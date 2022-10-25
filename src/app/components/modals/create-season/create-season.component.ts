import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ChoreService } from 'src/app/services/chore.service';
import { NewSeason } from '../../season';

@Component({
  selector: 'app-create-season',
  templateUrl: './create-season.component.html',
  styleUrls: ['./create-season.component.scss']
})
export class CreateSeasonComponent implements OnInit {

  formGroup = new FormGroup({
    seasonname: new FormControl(null, [Validators.required]),
    january: new FormControl(),
    february: new FormControl(),
    march: new FormControl(),
    april: new FormControl(),
    may: new FormControl(),
    june: new FormControl(),
    july: new FormControl(),
    august: new FormControl(),
    september: new FormControl(),
    october: new FormControl(),
    november: new FormControl(),
    december: new FormControl(),
  })

  constructor(
    private dialogRef: MatDialogRef<CreateSeasonComponent>,
    private choreService: ChoreService
  ) { }

  ngOnInit(): void {
  }

  submitSeason() {
    const {value} = this.formGroup
    const newSeason: NewSeason = {...value}
    
  }

  cancel() {
    this.dialogRef.close();
  }

}
