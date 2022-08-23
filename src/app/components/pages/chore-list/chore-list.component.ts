import { Component, OnInit } from '@angular/core';
import { ChoreService } from 'src/app/services/chore.service';
import { Chores } from '../../chores';

@Component({
  selector: 'app-chore-list',
  templateUrl: './chore-list.component.html',
  styleUrls: ['./chore-list.component.scss']
})
export class ChoreListComponent implements OnInit {
  chores: Chores[] = []
  displayedColumns: string[] = ["chorename", "description"]

  constructor(private choreList: ChoreService) { }

  ngOnInit(): void {
    this.getChoreList();
  }

  getChoreList(){
    this.choreList.getChores().subscribe(chores => {
      this.chores = chores
      console.log(chores);
    })
  }

}
