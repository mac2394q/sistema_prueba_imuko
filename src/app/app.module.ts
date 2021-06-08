import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EpsComponent } from './application/components/eps/eps.component';
import { PersonaComponent } from './application/components/persona/persona.component';
import { PersonaFormComponent } from './application/components/persona/persona-form/persona-form.component';
import { NavigationComponent } from './application/components/navigation/navigation.component';
import { DashboardComponent } from './application/components/dashboard/dashboard.component';

import { EpsService } from './application/modules/persona/service/eps.service.js';
import { PersonaService } from './application/modules/persona/service/persona.service.js';

@NgModule({
  declarations: [
    AppComponent,
    EpsComponent,
    PersonaComponent,
    PersonaFormComponent,
    NavigationComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ EpsService, PersonaService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
