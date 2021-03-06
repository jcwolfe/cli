import {
    UpdateCoveoSearchPageCommand,
    CreateComponentCommand,
    BuildCommand,
    CreateProjectCommand,
    ServerCommand,
    CreateSandboxCommand,
    CreateStylesheetCommand,
    CreateReadmeCommand,
    CreateDockerCommand,
    DeployCommand,
    CreateLocalesCommand,
    CreateTranslationCommand,
    UpdateTranslationCommand,
    CreatePipelineCommand,
} from '../../commands';

export default {
    "command.updatecoveosearchpage": {
        "class": UpdateCoveoSearchPageCommand,
        "constructor": [
            {"type": "service", "key": "service.coveosearchpagebundler"},
            {"type": "service", "key": "logger"},
        ],
    },
    "command.createcomponent": {
        "class": CreateComponentCommand,
        "constructor": [
            {"type": "service", "key": "service.component"},
            {"type": "service", "key": "service.stylesheet"},
            {"type": "service", "key": "logger"},
            {"type": "parameter", "key": "component"},
            {"type": "parameter", "key": "stylesheet"},
        ],
    },
    "command.build": {
        "class": BuildCommand,
        "constructor": [
            {"type": "service", "key": "service.build"},
            {"type": "service", "key": "logger"},
            {"type": "parameter", "key": "component"},
            {"type": "parameter", "key": "stylesheet"},
            {"type": "parameter", "key": "watch"},
        ],
    },
    "command.createproject": {
        "class": CreateProjectCommand,
        "constructor": [
            {"type": "service", "key": "service.project"},
            {"type": "service", "key": "service.component"},
            {"type": "service", "key": "service.stylesheet"},
            {"type": "service", "key": "service.sandbox"},
            {"type": "service", "key": "service.readme"},
            {"type": "service", "key": "service.docker"},
            {"type": "service", "key": "service.locales"},
            {"type": "service", "key": "service.componentinstallation"},
            {"type": "service", "key": "logger"},
            {"type": "parameter", "key": "component"},
            {"type": "parameter", "key": "stylesheet"},
            {"type": "parameter", "key": "coveo"},
            {"type": "parameter", "key": "locales"},
        ],
    },
    "command.server": {
        "class": ServerCommand,
        "constructor": [
            {"type": "service", "key": "app"},
            {"type": "service", "key": "logger"},
            {"type": "service", "key": "resolver.sandbox"},
            {"type": "parameter", "key": "coveo"},
        ],
    },
    "command.sandbox": {
        "class": CreateSandboxCommand,
        "constructor": [
            {"type": "service", "key": "service.sandbox"},
            {"type": "service", "key": "logger"},
            {"type": "parameter", "key": "coveo"},
        ],
    },
    "command.createstylesheet": {
        "class": CreateStylesheetCommand,
        "constructor": [
            {"type": "service", "key": "service.stylesheet"},
            {"type": "service", "key": "logger"},
            {"type": "parameter", "key": "stylesheet"},
        ],
    },
    "command.createreadme": {
        "class": CreateReadmeCommand,
        "constructor": [
            {"type": "service", "key": "service.readme"},
            {"type": "service", "key": "logger"},
        ],
    },
    "command.createdocker": {
        "class": CreateDockerCommand,
        "constructor": [
            {"type": "service", "key": "service.docker"},
            {"type": "service", "key": "logger"},
        ],
    },
    "command.deploy": {
        "class": DeployCommand,
        "constructor": [
            {"type": "service", "key": "service.deploy"},
            {"type": "service", "key": "logger"},
            {"type": "parameter", "key": "coveo"},
        ],
    },
    "command.createlocales": {
        "class": CreateLocalesCommand,
        "constructor": [
            {"type": "service", "key": "service.locales"},
            {"type": "service", "key": "service.componentinstallation"},
            {"type": "service", "key": "logger"},
            {"type": "parameter", "key": "locales"},
            {"type": "parameter", "key": "component"},
            {"type": "parameter", "key": "coveo"},
        ],
    },
    "command.createtranslation": {
        "class": CreateTranslationCommand,
        "constructor": [
            {"type": "service", "key": "service.translation"},
            {"type": "service", "key": "logger"},
            {"type": "parameter", "key": "locales"},
        ],
    },
    "command.updatetranslation": {
        "class": UpdateTranslationCommand,
        "constructor": [
            {"type": "service", "key": "service.translation"},
            {"type": "service", "key": "logger"},
            {"type": "parameter", "key": "locales"},
        ],
    },
    "command.createpipeline": {
        "class": CreatePipelineCommand,
        "constructor": [
            {"type": "service", "key": "service.pipeline"},
            {"type": "service", "key": "service.condition"},
            {"type": "service", "key": "logger"},
            {"type": "parameter", "key": "coveo"},
        ],
    },
}
