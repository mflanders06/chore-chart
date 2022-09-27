import { Component, OnInit } from '@angular/core';
import { ChoreService } from 'src/app/services/chore.service';
import { MatDialog } from '@angular/material/dialog';
import { SeasonConfigList, SeasonDisplayList, SeasonList } from '../../season';

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

  constructor(private choreService: ChoreService) {}

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
      console.log(this.seasonsConfig)
    })
  }

}
