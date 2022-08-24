export interface Chore {
    id: number,
    chorename: string,
    description: string,
    cycleRate: number,
    cycleType: number,  /*  1= days,  2= weeks,  3= months,  4= years   */
}
