import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ChoreService } from 'src/app/services/chore.service';
import { Chore } from '../../chore';
import { CreateChoreComponent } from '../../modals/create-chore/create-chore.component';

@Component({
  selector: 'app-chore-list',
  templateUrl: './chore-list.component.html',
  styleUrls: ['./chore-list.component.scss']
})
export class ChoreListComponent implements OnInit {
  chores: Chore[] = []
  displayedColumns: string[] = ["chorename", "description"]
  modalHeight: string = '80%';
  modalWidth: string = '80%';

  constructor(
    private choreService: ChoreService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.getChoreList();
  }

  getChoreList(){
    this.choreService.getChores().subscribe(chores => {
      this.chores = chores
    })
  }

  newJob(){
    const dialogRef = this.dialog.open(CreateChoreComponent, { height: this.modalHeight, width: this.modalWidth })

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      if(result.chorename){
        this.choreService.addChore(result).subscribe(() => {
          this.getChoreList()
        })
      }
    })
  }

}
