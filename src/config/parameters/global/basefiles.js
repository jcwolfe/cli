const common = [
    '.gitignore',
    '.npmignore',
    // 'docker-compose.builder.yml',
    'Makefile',
    'LICENSE',
    '.env.dist',
    '.env',
];

const vanilla = [

];

const typescript = [
    'tsconfig.json',
];

export default {
    "basefiles.vanilla": [...common, ...vanilla],
    "basefiles.typescript": [...common, ...typescript],
}