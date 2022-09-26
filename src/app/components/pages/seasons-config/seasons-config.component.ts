import { Component, OnInit } from '@angular/core';
import { ChoreService } from 'src/app/services/chore.service';
import { MatDialog } from '@angular/material/dialog';
import { SeasonConfigList, SeasonList } from '../../season';

@Component({
  selector: 'app-seasons-config',
  templateUrl: './seasons-config.component.html',
  styleUrls: ['./seasons-config.component.scss'],
})
export class SeasonsConfigComponent implements OnInit {

  seasons: SeasonList[] = [];
  seasonsConfig: SeasonConfigList[] =[];
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
      this.seasonsConfig = seasonList;
    })
  }

}
