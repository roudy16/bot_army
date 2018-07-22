export const Role = {
    BUILDER_LT: 'a',
    HARVESTER_LT: 'b',
    UPGRADER_LT: 'c',
    BUILDER_SM: 'd',
    HARVESTER_SM: 'e',
    UPGRADER_SM: 'f'
};

export function calcCreepCountMap() {
    let creepCountMap = {
        'a' : 0,
        'b' : 0,
        'c' : 0,
        'd' : 0,
        'e' : 0,
        'f' : 0,
    };

    for (let name in Game.creeps) {
        /** @var {Creep} */
        let creep = Game.creeps[name];
        let role = creep.memory.role;

        switch (role) {
            case Role.BUILDER_LT:
            case Role.HARVESTER_LT:
            case Role.UPGRADER_LT:
            case Role.BUILDER_SM:
            case Role.HARVESTER_SM:
            case Role.UPGRADER_SM:
                creepCountMap[role]++;
                break;
            default:
                break;
        }
    }

    return creepCountMap;
}

/**
 *
 * @param {Array<String>} body_parts
 * @returns {number}
 */
export function calcCreepCost(body_parts) {
    let sum = 0;
    body_parts.forEach(part => {
        sum += BODYPART_COST[part];
    });
    return sum;
}

