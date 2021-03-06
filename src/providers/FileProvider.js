import fs from 'fs';
import mkdirp from 'mkdirp';
import path from 'path';
const { COPYFILE_EXCL } = fs.constants;

export default class FileProvider {
    exists(dir, fileName) {
        return fs.existsSync(path.resolve(dir, fileName));
    }

    read(dir) {
        const buffer = fs.readFileSync(dir);
        return buffer.toString();
    }

    readDirectory(dir) {
        return fs.readdirSync(dir);
    }

    write(dir, fileName, content, ext, params = {}) {
        const {shouldAppend} = params;
        let options = {};

        if (shouldAppend) {
            options.flag = 'a';
        }

        try {
            fs.writeFileSync(`${dir ? `${dir}/`: ''}${fileName}${ext ? `.${ext}` : ''}`, content, options);
        } catch (e) {
            if (e.message.includes('no such file or directory')) {
                mkdirp.sync(dir);
                return this.write(dir, fileName, content, ext);
            }

            throw e;
        }
    }

    copy(source, destination, overwrite = false) {
        try {
            if (overwrite) {
                fs.copyFileSync(source, destination);
                return;
            }
    
            fs.copyFileSync(source, destination, COPYFILE_EXCL);
        } catch (e) {
            if (e.message.includes('no such file or directory')) {
                const {dir} = path.parse(destination);
                mkdirp.sync(dir);
                return this.copy(source, destination, overwrite);
            }

            throw e;
        }
    }
}