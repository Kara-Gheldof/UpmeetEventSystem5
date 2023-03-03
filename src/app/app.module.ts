import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpcomingEventsModule } from './upcoming-events/upcoming-events.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TeamInfoModule } from './team-info/team-info.module';
import { ContactModule } from './contact/contact.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UpcomingEventsModule,
    NgbModule,
    TeamInfoModule,
    ContactModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
