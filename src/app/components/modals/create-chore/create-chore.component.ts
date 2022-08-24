import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Chore } from '../../chore';

@Component({
  selector: 'app-create-chore',
  templateUrl: './create-chore.component.html',
  styleUrls: ['./create-chore.component.scss']
})
export class CreateChoreComponent implements OnInit {

  formGroup = new FormGroup({
    chorename: new FormControl(null, [Validators.required]),
    description: new FormControl(),
    cycleRate: new FormControl(),
    cycleType: new FormControl()  /*  1=Day, 2=Week, 3=Month, 4=Year  */
  })


  constructor(
    //@Inject(MAT_DIALOG_DATA),
    private dialogRef: MatDialogRef<CreateChoreComponent>
  ) { }

  ngOnInit(): void {
  }

  submitChore(){
    const {value} = this.formGroup
    console.log('this is the form values', value)
    const newJob: Chore = {...value}
    this.dialogRef.close(newJob)
  }

  cancel(){
    this.dialogRef.close()
  }

}
