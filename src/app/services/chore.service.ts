import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Chore, DBChoreDatum } from '../components/chore';
import { seasonList } from '../components/season';

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

  getSeasons(): Observable<seasonList[]>{
    return this.http.get<seasonList[]>(`${this.backEndUrl}api/seasons`)
  }

  getCycleType(cycleType: number): string {
    switch(cycleType) {
      case 1:
        return "Days"
      case 2:
        return "Weeks"
      case 3:
        return "Months"
      case 4:
        return "Years"
      default:
        return "Other"
    }
  }

}
