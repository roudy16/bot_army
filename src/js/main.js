import * as utils from "utils"
import * as spawn_funcs from "spawn_funcs"
import role_harvester from "role_harvester";
import role_upgrader from "role_upgrader";
import role_builder from "role_builder";
import {calcCreepCost} from "utils";
import {CreepComponents} from "spawn_funcs";

export function loop() {
    // ########################


    // ########################


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

    let spawner = Game.spawns['Spawn1'];
    let spawn_room = spawner.room;
    let room_energy_cap = spawn_room.energyCapacityAvailable;

    let creepCountMap = utils.calcCreepCountMap();

    if (creepCountMap[utils.Role.UPGRADER_LT] + creepCountMap[utils.Role.UPGRADER_SM] < 4) {
        if (room_energy_cap < 400) {
            spawn_funcs.spawnTinyUpgrader(spawner);
        } else {
            spawn_funcs.spawnSmallUpgrader(spawner);
        }
    }
    if (creepCountMap[utils.Role.BUILDER_LT] + creepCountMap[utils.Role.BUILDER_SM] < 4) {
        if (room_energy_cap < 400) {
            spawn_funcs.spawnTinyBuilder(spawner);
        } else {
            spawn_funcs.spawnSmallBuilder(spawner);
        }
    }
    if (creepCountMap[utils.Role.HARVESTER_LT] + creepCountMap[utils.Role.HARVESTER_SM] < 4) {
        if (room_energy_cap < 400) {
            spawn_funcs.spawnTinyHarvester(spawner);
        } else {
            spawn_funcs.spawnSmallHarvester(spawner);
        }
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

