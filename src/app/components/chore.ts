export interface Chore {
    id: number,
    chorename: string,
    description: string,
    cycleRate: number,
    cycleType: string,
    activeSeason: number
}

export interface NewChore {
    id: number,
    chorename: string,
    description: string,
    cycleRate: number,
    cycleType: number,  /*  1= days,  2= weeks,  3= months,  4= years   */
    activeSeason: number
}

export interface DBChoreDatum {
    id: number,
    chorename: string,
    description: string,
    cycle_rate: number,
    cycle_type: number,  /*  1= days,  2= weeks,  3= months,  4= years   */
    activeSeason: number
}
