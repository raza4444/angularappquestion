import {QuestionDataModelComponent} from '../question-data-model/question-data-model.component';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit() {
  }

  openModal(){
    this.dialog.closeAll();
    this.dialog.open(QuestionDataModelComponent, {
      width :'50%',
      data : {value : 'passvalue' }
    })
  }
}
