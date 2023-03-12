import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateInfoComponent } from './candidate-info/candidate-info.component';
import { TestComponent } from './test/test.component';
import { ResultComponent } from './result/result.component';
const routes: Routes = [
  { path: '', redirectTo: '/candidateInfo', pathMatch: 'full' },
  {
    component:CandidateInfoComponent,
    path:'candidateInfo'
  },
  {
    component: TestComponent,
    path: 'test'
  },
  {
    component: ResultComponent,
    path: 'result'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
