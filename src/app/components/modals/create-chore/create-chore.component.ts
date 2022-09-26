import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NewChore } from '../../chore';
import { SeasonList } from '../../season';
import { ChoreService } from 'src/app/services/chore.service';

@Component({
  selector: 'app-create-chore',
  templateUrl: './create-chore.component.html',
  styleUrls: ['./create-chore.component.scss']
})
export class CreateChoreComponent implements OnInit {

  formGroup = new FormGroup({
    chorename: new FormControl(null, [Validators.required]),
    description: new FormControl(),
    cycleRate: new FormControl(null, [Validators.required]),
    cycleType: new FormControl(null, [Validators.required]),  /*  1=Day, 2=Week, 3=Month, 4=Year  */
    activeSeason: new FormControl()
  })

  activeSeason: SeasonList[] = []

  constructor(
    //@Inject(MAT_DIALOG_DATA),
    private dialogRef: MatDialogRef<CreateChoreComponent>,
    private choreService: ChoreService
  ) { }

  ngOnInit(): void {
    this.initialFormValueSetup();
    this.getSeasons();
  }

  initialFormValueSetup(){
    this.formGroup.patchValue({
      cycleRate: 1,
      cycleType: 2
    })
  }

  submitChore(){
    const {value} = this.formGroup
    //console.log('this is the form values', value)
    const newJob: NewChore = {...value}
    this.dialogRef.close(newJob)
  }

  cancel(){
    this.dialogRef.close()
  }

  getSeasons(){
    this.choreService.getSeasons().subscribe(activeSeason => {
      this.activeSeason = activeSeason
      console.log('this is activeSeasons', this.activeSeason)
    })
  }

}
