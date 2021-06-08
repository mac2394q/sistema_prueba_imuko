import { DashboardComponent } from './application/components/dashboard/dashboard.component';
import { PersonaComponent } from './application/components/persona/persona.component';
import { PersonaFormComponent } from './application/components/persona/persona-form/persona-form.component';
import { EpsComponent } from './application/components/eps/eps.component';


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
