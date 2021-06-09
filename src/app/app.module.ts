import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EpsComponent } from './application/components/components/eps/eps.component';
import { PersonaComponent } from './application/components/components/persona/persona.component';
import { PersonaFormComponent } from './application/components/components/persona/persona-form/persona-form.component';
import { NavigationComponent } from './application/components/ui/navigation/navigation.component';

import { DashboardComponent } from './application/components/ui/dashboard/dashboard.component';
import { EpsService } from './application/modules/services/eps.service';
import { PersonaService } from './application/modules/services/persona.service';
import { FichaComponent } from './application/components/components/persona/ficha/ficha.component';

@NgModule({
  declarations: [
    AppComponent,
    EpsComponent,
    PersonaComponent,
    PersonaFormComponent,
    NavigationComponent,
    DashboardComponent,
    FichaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ EpsService, PersonaService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
