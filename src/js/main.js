import * as utils from "utils"
import * as spawn_funcs from "spawn_funcs"
import role_harvester from "role_harvester";
import role_upgrader from "role_upgrader";
import role_builder from "role_builder";

export function loop() {
    let tower = Game.getObjectById('TOWER_ID');
    if(tower) {
        let closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => structure.hits < structure.hitsMax
        });
        if(closestDamagedStructure) {
            tower.repair(closestDamagedStructure);
        }

        let closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) {
            tower.attack(closestHostile);
        }
    }

    for(let name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
        }
    }

    let creepCountMap = utils.calcCreepCountMap();

    if (creepCountMap[utils.Role.UPGRADER_LT] + creepCountMap[utils.Role.UPGRADER_SM] < 2) {
        spawn_funcs.spawnTinyUpgrader();
    }
    if (creepCountMap[utils.Role.BUILDER_LT] + creepCountMap[utils.Role.BUILDER_SM] < 2) {
        spawn_funcs.spawnTinyBuilder();
    }
    if (creepCountMap[utils.Role.HARVESTER_LT] + creepCountMap[utils.Role.HARVESTER_SM] < 2) {
        spawn_funcs.spawnTinyHarvester();
    }

    for(let name in Game.creeps) {
        let creep = Game.creeps[name];
        let creep_role = creep.memory.role;

        if(creep_role === 'harvester' || creep_role === utils.Role.HARVESTER_LT) {
            role_harvester.run(creep);
        }
        if(creep_role === 'upgrader' || creep_role === utils.Role.UPGRADER_LT) {
            role_upgrader.run(creep);
        }
        if(creep_role === 'builder' || creep_role === utils.Role.BUILDER_LT) {
            role_builder.run(creep);
        }
    }
}

