import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Chore, DBChoreDatum } from '../components/chore';
import { SeasonConfigList, SeasonList } from '../components/season';

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

  getSeasonMonth(activemonths: number): string {
    switch(activemonths) {
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

}
