import { Component, OnInit } from '@angular/core';
import { ChoreService } from 'src/app/services/chore.service';
import { MatDialog } from '@angular/material/dialog';
import { NewSeason, SeasonConfigList, SeasonDisplayList, SeasonList } from '../../season';
import { CreateSeasonComponent } from '../../modals/create-season/create-season.component';

@Component({
  selector: 'app-seasons-config',
  templateUrl: './seasons-config.component.html',
  styleUrls: ['./seasons-config.component.scss'],
})
export class SeasonsConfigComponent implements OnInit {

  seasons: SeasonList[] = [];
  seasonsConfig: SeasonDisplayList[] =[];
  displayedColumns: string[] = [
    'seasonname',
    'activemonths',
  ];
  modalHeight: string = '80%';
  modalWidth: string = '80%';

  constructor(
    private choreService: ChoreService,
    public dialog: MatDialog

    ) {}

  ngOnInit(): void {
    this.getConfigSeasons();
    
  }

  getSeasons() {
    this.choreService.getSeasons().subscribe((seasons) => {
      this.seasons = seasons;
    });
  }

  getConfigSeasons() {
    this.choreService.getConfigSeasons().subscribe((seasonList) => {
      this.seasonsConfig = seasonList.map((val) => ({
        ...val,
        activemonths: val.activemonths.map((val) => {
          return this.choreService.getSeasonMonth(val)
        }).join(', ')
      }))
    })
  }

  newSeason() {
    const dialogRef = this.dialog.open(CreateSeasonComponent, { height: this.modalHeight, width: this.modalWidth })

    dialogRef.afterClosed().subscribe(result => {
      if(result.seasonname){
        this.choreService.addSeason(result).subscribe(() => {
          this.getSeasons()
        })
      }
    })
  }

}
