import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
//services
import { QuestionModelService } from './service';
import { RestApiService } from './service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//services
import {MatDialogRef, MAT_DIALOG_DATA,MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { QuestionDataModelComponent } from './question-data-model/question-data-model.component';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuestionDataModelComponent
  ],
  entryComponents : [
    QuestionDataModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [
    QuestionModelService,
    RestApiService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
