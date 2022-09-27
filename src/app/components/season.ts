export interface SeasonList {
  id: number;
  seasonname: string;
}

export interface SeasonConfigList {
  id: number;
  seasonname: string;
  activemonths: number[];
}

export interface SeasonDisplayList {
  id: number;
  seasonname: string;
  activemonths: string;
}