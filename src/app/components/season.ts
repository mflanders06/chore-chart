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

export interface NewSeason {
  seasonname: string;
  activemonths: number[];
}

export interface NewSeasonSubmission {
    seasonname: string,
    january: boolean,
    february: boolean,
    march: boolean,
    april: boolean,
    may: boolean,
    june: boolean,
    july: boolean,
    august: boolean,
    september: boolean,
    october: boolean,
    november: boolean,
    december: boolean
}