import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Chore, DBChoreDatum } from '../components/chore';
import { NewSeason, SeasonConfigList, SeasonDisplayList, SeasonList, NewSeasonSubmission } from '../components/season';

@Injectable({
  providedIn: 'root'
})
export class ChoreService {
  backEndUrl: string = `http://127.0.0.1:3500/`

  constructor(private http: HttpClient) { }

  getChores(): Observable<Chore[]>{
    return this.http.get<DBChoreDatum[]>(`${this.backEndUrl}api/chores`).pipe(map(observer => {
      return observer.map(data => ({ ...data, cycleRate: data.cycle_rate, cycleType: this.getCycleType(data.cycle_type)})) as Chore[]
    }))
  }

  addChore(chore: Chore) {
    return this.http.post(`${this.backEndUrl}api/chores`, chore)
  }

  getSeasons(): Observable<SeasonList[]>{
    return this.http.get<SeasonList[]>(`${this.backEndUrl}api/seasons`)
  }

  getConfigSeasons(): Observable<SeasonConfigList[]>{
    return this.http.get<SeasonConfigList[]>(`${this.backEndUrl}api/seasonsConfig`)
  }

  getCycleType(cycleType: number): string {
    switch(cycleType) {
      case 1: return "Days"
      case 2: return "Weeks"
      case 3: return "Months"
      case 4: return "Years"
      default: return "Other"
    }
  }

  getSeasonMonth(activemonth: number): string {
    switch(activemonth) {
      case 1: return "January"
      case 2: return "February"
      case 3: return "March"
      case 4: return "April"
      case 5: return "May"
      case 6: return "June"
      case 7: return "July"
      case 8: return "August"
      case 9: return "September"
      case 10: return "October"
      case 11: return "November"
      case 12: return "December"
      default: return "Other"
    }
  }

  getSeasonMonthNumber(textMonth: string): number {
    switch(textMonth) {
      case "January": return 1
      case "February": return 2
      case "March": return 3
      case "April": return 4
      case "May": return 5
      case "June": return 6
      case "July": return 7
      case "August": return 8
      case "September": return 9
      case "October": return 10
      case "November": return 11
      case "December": return 12
      default: return 13
    }
  }

  getSeasonMonthsFromList(NewSeasonSubmission: { january: boolean; february: boolean; march: boolean; april: boolean; may: boolean; june: boolean; july: boolean; august: boolean; september: boolean; october: boolean; november: boolean; december: boolean; }) {
    let activemonths: number[] = []

      NewSeasonSubmission.january ? activemonths.push(1) : null
      NewSeasonSubmission.february ? activemonths.push(2) : null
      NewSeasonSubmission.march ? activemonths.push(3) : null 
      NewSeasonSubmission.april ? activemonths.push(4) : null
      NewSeasonSubmission.may ? activemonths.push(5) : null
      NewSeasonSubmission.june ? activemonths.push(6) : null
      NewSeasonSubmission.july ? activemonths.push(7) : null
      NewSeasonSubmission.august ? activemonths.push(8) : null
      NewSeasonSubmission.september ? activemonths.push(9) : null
      NewSeasonSubmission.october ? activemonths.push(10) : null
      NewSeasonSubmission.november ? activemonths.push(11) : null
      NewSeasonSubmission.december ? activemonths.push(12) : null

    console.log('active months in service', activemonths)
    return activemonths;
  }

  addSeason(season: NewSeason){

    return this.http.post(`${this.backEndUrl}api/seasons`, season)
  }

}
