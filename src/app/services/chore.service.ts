import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Chore } from '../components/chore';

@Injectable({
  providedIn: 'root'
})
export class ChoreService {
  backEndUrl: string = `http://127.0.0.1:3500/`

  constructor(private http: HttpClient) { }

  getChores(): Observable<Chore[]>{
    return this.http.get<Chore[]>(`${this.backEndUrl}api/chores`)
  }

  addChore(chore: Chore) {
    return this.http.post(`${this.backEndUrl}api/chores`, chore)
  }

}
