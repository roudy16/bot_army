import * as utils from "utils"

/**
 *
 * @param {StructureSpawn} spawner
 * @returns {number}
 */
export function spawnTinyHarvester(spawner) {
    let id = 0;
    let err = OK;
    let retry = true;

    while (retry) {
        err = spawner.spawnCreep(CreepComponents.LT_WORKER, "HARVESTER" + id,
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

/**
 *
 * @param {StructureSpawn} spawner
 * @returns {number}
 */
export function spawnTinyBuilder(spawner) {
    let id = 0;
    let err = OK;
    let retry = true;

    while (retry) {
        err = spawner.spawnCreep(CreepComponents.LT_WORKER, "BUILDER" + id,
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

/**
 *
 * @param {StructureSpawn} spawner
 * @returns {number}
 */
export function spawnTinyUpgrader(spawner) {
    let id = 0;
    let err = OK;
    let retry = true;

    while (retry) {
        err = spawner.spawnCreep(CreepComponents.LT_WORKER, "UPGRADER" + id,
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

/**
 *
 * @param {StructureSpawn} spawner
 * @returns {number}
 */
export function spawnSmallHarvester(spawner) {
    let id = 0;
    let err = OK;
    let retry = true;

    while (retry) {
        err = spawner.spawnCreep(CreepComponents.SM_WORKER, "HARVESTER" + id,
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

/**
 *
 * @param {StructureSpawn} spawner
 * @returns {number}
 */
export function spawnSmallBuilder(spawner) {
    let id = 0;
    let err = OK;
    let retry = true;

    while (retry) {
        err = spawner.spawnCreep(CreepComponents.SM_WORKER, "BUILDER" + id,
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

/**
 *
 * @param {StructureSpawn} spawner
 * @returns {number}
 */
export function spawnSmallUpgrader(spawner) {
    let id = 0;
    let err = OK;
    let retry = true;

    while (retry) {
        err = spawner.spawnCreep(CreepComponents.SM_WORKER, "UPGRADER" + id,
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

export const CreepComponents = {
    LT_WORKER: [WORK, CARRY, MOVE],
    SM_WORKER: [WORK, WORK, CARRY, CARRY, MOVE, MOVE],
};
