import { Injectable } from '@angular/core';
import {RestApiService} from '../service//rest-api.service';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  response;
  constructor(private rest: RestApiService) { }
  questionItem(body)
  {

    let data = this.rest.post(
      'question/show'  , JSON.stringify(body));
      data.subscribe(res => {
        this.response = res.categories;
        return this.response;
        //console.log( this.response , 'respose');
         },

   error => {
  this.data.error('There Is something issue! . Please Try Again.');
  });
  //return response[0];

  }
}
