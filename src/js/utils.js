var util = {
    calcCreepCountMap: function() {
        let creepCountMap = {
            'a': 0,
            'b' : 0,
            'c' : 0,
        };

        for (let name in Game.creeps) {
            /** @var {Creep} */
            let creep = Game.creeps[name];
            let role = creep.memory.role;

switch (role) {
    case Role.BUILDER_LT:
    case Role.HARVESTER_LT:
    case Role.UPGRADER_LT:
        creepCountMap[role]++;
        break;
    default:
        break;
}
}

return creepCountMap;
}
};

const Role = {
    BUILDER_LT: 'a',
    HARVESTER_LT: 'b',
    UPGRADER_LT: 'c'
};

module.exports = util;
