export default role_harvester;

export var role_harvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if (!creep.memory.upgrading) {
            if (creep.carry.energy < creep.carryCapacity) {
                let sources = creep.room.find(FIND_SOURCES);
                if (creep.harvest(sources[0]) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
                }
            } else {
                let targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType === STRUCTURE_EXTENSION ||
                            structure.structureType === STRUCTURE_SPAWN ||
                            structure.structureType === STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;
                    }
                });
                if (targets.length > 0) {
                    if (creep.transfer(targets[0], RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                        creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                    }
                } else {
                    creep.memory.upgrading = true;
                }
            }
        } else {
            if(creep.upgradeController(creep.room.controller) === ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});
            }

            if (creep.carry.energy === 0) {
                creep.memory.upgrading = false;
            }
        }
    }
};

module.exports = role_harvester;
