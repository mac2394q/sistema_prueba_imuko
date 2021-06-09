import { DashboardComponent } from './application/components/ui/dashboard/dashboard.component';
import { EpsComponent } from './application/components/components/eps/eps.component';
import { PersonaComponent } from './application/components/components/persona/persona.component';
import { PersonaFormComponent } from './application/components/components/persona/persona-form/persona-form.component';
import { FichaComponent } from './application/components/components/persona/ficha/ficha.component';


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'persona',
    component: PersonaComponent
  },
  {
    path: 'persona-form',
    component: PersonaFormComponent
  },
  {
    path: 'ficha',
    component: FichaComponent
  },
  {
    path: 'eps',
    component: EpsComponent
  },
  {
    path: 'home',
    component: DashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
