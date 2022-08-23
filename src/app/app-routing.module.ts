import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoreListComponent } from './components/pages/chore-list/chore-list.component';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'choreList', component: ChoreListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
