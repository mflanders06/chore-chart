import { Component, OnInit } from '@angular/core';
import { ChoreService } from 'src/app/services/chore.service';
import { MatDialog } from '@angular/material/dialog';
import { seasonList } from '../../season';

@Component({
  selector: 'app-seasons-config',
  templateUrl: './seasons-config.component.html',
  styleUrls: ['./seasons-config.component.scss'],
})
export class SeasonsConfigComponent implements OnInit {
  constructor(private choreService: ChoreService) {}

  seasons: seasonList[] = [];
  displayedColumns: string[] = [
    'chorename',
    'description',
    'cycleRate',
    'cycleType',
  ];

  ngOnInit(): void {
    this.getSeasons();
  }

  getSeasons() {
    this.choreService.getSeasons().subscribe((seasons) => {
      this.seasons = seasons;
    });
  }
}
