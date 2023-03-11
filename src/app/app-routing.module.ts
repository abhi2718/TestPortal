import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateInfoComponent } from './candidate-info/candidate-info.component';
const routes: Routes = [
  { path: '', redirectTo: '/candidateInfo', pathMatch: 'full' },
  {
    component:CandidateInfoComponent,
    path:'candidateInfo'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
