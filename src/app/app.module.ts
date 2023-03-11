import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from '../services/index.service';
import { CandidateInfoComponent } from './candidate-info/candidate-info.component';
@NgModule({
  declarations: [
    AppComponent,
    CandidateInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
