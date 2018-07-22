import * as utils from "utils"
import * as spawn_funcs from "spawn_funcs"
import role_harvester from "role_harvester";
import role_upgrader from "role_upgrader";
import role_builder from "role_builder";

export function loop() {
    // ########################
    // ########################

    // Clean up dead creep memory
    for (let name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
        }
    }

    for (let room_name in Game.rooms) {
        handleRoomSpawn(Game.rooms[room_name]);
    }

    for (let name in Game.creeps) {
        let creep = Game.creeps[name];
        let creep_role = creep.memory.role;

        switch (creep_role) {
            case (utils.Role.HARVESTER_LT):
                role_harvester.run(creep);
                break;
            case (utils.Role.UPGRADER_LT):
                role_upgrader.run(creep);
                break;
            case (utils.Role.BUILDER_LT):
                role_builder.run(creep);
                break;
            default:
                console.log("Unrecognized creep role: " + creep_role);
                break;
        }
    }
}

/**
 * @param {Room} room
 */
function handleRoomSpawn(room) {
    let spawns = room.find(FIND_MY_SPAWNS);
    if (spawns.length === 0) {
        return;
    }

    let spawner = spawns[0];
    let room_energy_cap = room.energyCapacityAvailable;

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
}
