import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HistoryComponent } from './history/history.component';
import { AffiliatedunitsComponent } from './affiliatedunits/affiliatedunits.component';
import { GallaryComponent } from './gallary/gallary.component';
import { ContactusComponent } from './contactus/contactus.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home',  component: DashboardComponent },
      { path: 'history',  component: HistoryComponent },
      { path: 'affiliatedunits',  component: AffiliatedunitsComponent },
      { path: 'gallery',  component: GallaryComponent },
      { path: 'contactus',  component: ContactusComponent },
      

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
