import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DataService } from '../services/index.service';
import { CandidateInfoComponent } from './candidate-info/candidate-info.component';
import { TestComponent } from './test/test.component';
import { ResultComponent } from './result/result.component';
@NgModule({
  declarations: [
    AppComponent,
    CandidateInfoComponent,
    TestComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
