import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoreListComponent } from './components/pages/chore-list/chore-list.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SeasonsConfigComponent } from './components/pages/seasons-config/seasons-config.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'choreList', component: ChoreListComponent},
  { path: 'seasonConfig', component: SeasonsConfigComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
