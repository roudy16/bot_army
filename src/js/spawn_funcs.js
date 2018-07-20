import * as utils from "utils"

export function spawnTinyHarvester() {
    return Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], null,
        {role: utils.Role.HARVESTER_LT});
}

export function spawnTinyBuilder() {
    return Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], null,
        {role: utils.Role.BUILDER_LT});
}

export function spawnTinyUpgrader() {
    return Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], null,
        {role: utils.Role.UPGRADER_LT});
}

export function spawnSmallHarvester() {
    return Game.spawns['Spawn1'].spawnCreep([WORK, WORK, CARRY, CARRY, MOVE, MOVE], null,
        {role: utils.Role.HARVESTER_LT});
}

export function spawnSmallBuilder() {
    return Game.spawns['Spawn1'].spawnCreep([WORK, WORK, CARRY, CARRY, MOVE, MOVE], null,
        {role: utils.Role.BUILDER_LT});
}

export function spawnSmallUpgrader() {
    return Game.spawns['Spawn1'].spawnCreep([WORK, WORK, CARRY, CARRY, MOVE, MOVE], null,
        {role: utils.Role.UPGRADER_LT});
}
