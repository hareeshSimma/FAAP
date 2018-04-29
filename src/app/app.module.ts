import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HistoryComponent } from './history/history.component';

import { AffiliatedunitsComponent } from './affiliatedunits/affiliatedunits.component';
import { GallaryComponent } from './gallary/gallary.component';
import { ContactusComponent } from './contactus/contactus.component';
import { UserService } from './user.service';
import { ElectionsComponent } from './elections/elections.component';
import { PasteventsComponent } from './pastevents/pastevents.component';
import { AchieventsComponent } from './achievents/achievents.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    HistoryComponent,
   
    AffiliatedunitsComponent,
    GallaryComponent,
    ContactusComponent,
    ElectionsComponent,
    PasteventsComponent,
    AchieventsComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
