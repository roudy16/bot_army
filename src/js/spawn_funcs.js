import * as utils from "utils"

export function spawnTinyHarvester() {
    let id = 0;
    let err = OK;
    let retry = true;

    while (retry) {
        err = Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], "HARVESTER" + id,
            {memory: {role: utils.Role.HARVESTER_LT}});

        switch (err) {
            case (ERR_NAME_EXISTS):
                id++;
                break;
            default:
                retry = false;
                break;
        }
    }

    return err;
}

export function spawnTinyBuilder() {
    let id = 0;
    let err = OK;
    let retry = true;

    while (retry) {
        err = Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], "BUILDER" + id,
            {memory: {role: utils.Role.BUILDER_LT}});

        switch (err) {
            case (ERR_NAME_EXISTS):
                id++;
                break;
            default:
                retry = false;
                break;
        }
    }

    return err;
}

export function spawnTinyUpgrader() {
    let id = 0;
    let err = OK;
    let retry = true;

    while (retry) {
        err = Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], "UPGRADER" + id,
            {memory: {role: utils.Role.UPGRADER_LT}});

        switch (err) {
            case (ERR_NAME_EXISTS):
                id++;
                break;
            default:
                retry = false;
                break;
        }
    }

    return err;
}

export function spawnSmallHarvester() {
    let id = 0;
    let err = OK;
    let retry = true;

    while (retry) {
        err = Game.spawns['Spawn1'].spawnCreep([WORK, WORK, CARRY, CARRY, MOVE, MOVE], "HARVESTER" + id,
            {memory: {role: utils.Role.HARVESTER_LT}});

        switch (err) {
            case (ERR_NAME_EXISTS):
                id++;
                break;
            default:
                retry = false;
                break;
        }
    }

    return err;
}

export function spawnSmallBuilder() {
    let id = 0;
    let err = OK;
    let retry = true;

    while (retry) {
        err = Game.spawns['Spawn1'].spawnCreep([WORK, WORK, CARRY, CARRY, MOVE, MOVE], "BUILDER" + id,
            {memory: {role: utils.Role.BUILDER_LT}});

        switch (err) {
            case (ERR_NAME_EXISTS):
                id++;
                break;
            default:
                retry = false;
                break;
        }
    }

    return err;
}

export function spawnSmallUpgrader() {
    let id = 0;
    let err = OK;
    let retry = true;

    while (retry) {
        err = Game.spawns['Spawn1'].spawnCreep([WORK, WORK, CARRY, CARRY, MOVE, MOVE], "UPGRADER" + id,
            {memory: {role: utils.Role.UPGRADER_LT}});

        switch (err) {
            case (ERR_NAME_EXISTS):
                id++;
                break;
            default:
                retry = false;
                break;
        }
    }

    return err;
}
