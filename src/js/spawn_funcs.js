import * as utils from "utils"

/**
 *
 * @param {StructureSpawn} spawner
 * @returns {number}
 */
export function spawnTinyHarvester(spawner) {
    return spawnCreepTemplate(spawner, CreepComponents.LT_WORKER,
        {memory: {role: utils.Role.HARVESTER_LT}}, "HARVESTER");
}

/**
 *
 * @param {StructureSpawn} spawner
 * @returns {number}
 */
export function spawnTinyBuilder(spawner) {
    return spawnCreepTemplate(spawner, CreepComponents.LT_WORKER,
        {memory: {role: utils.Role.BUILDER_LT}}, "BUILDER");
}

/**
 *
 * @param {StructureSpawn} spawner
 * @returns {number}
 */
export function spawnTinyUpgrader(spawner) {
    return spawnCreepTemplate(spawner, CreepComponents.LT_WORKER,
        {memory: {role: utils.Role.UPGRADER_LT}}, "UPGRADER");
}

/**
 *
 * @param {StructureSpawn} spawner
 * @returns {number}
 */
export function spawnSmallHarvester(spawner) {
    return spawnCreepTemplate(spawner, CreepComponents.SM_WORKER,
        {memory: {role: utils.Role.HARVESTER_LT}}, "HARVESTER");
}

/**
 *
 * @param {StructureSpawn} spawner
 * @returns {number}
 */
export function spawnSmallBuilder(spawner) {
    return spawnCreepTemplate(spawner, CreepComponents.SM_WORKER,
        {memory: {role: utils.Role.BUILDER_LT}}, "BUILDER");
}

/**
 *
 * @param {StructureSpawn} spawner
 * @returns {number}
 */
export function spawnSmallUpgrader(spawner) {
    return spawnCreepTemplate(spawner, CreepComponents.SM_WORKER,
        {memory: {role: utils.Role.UPGRADER_LT}}, "UPGRADER");
}

function spawnCreepTemplate(spawner, components, options, name_root) {
    let id = 0;
    let err = OK;
    let retry = true;

    while (retry) {
        err = spawner.spawnCreep(components, name_root + id, options);

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
