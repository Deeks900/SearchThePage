import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //Let's make an array of type question
  questions:Question[] = [];

  constructor() { 
    this.questions=[
      {
        text:'What is your Javascript?',
        answer:'A programming language'
      },
      {
        text:'What is your Angular?',
        answer:'A programming language'
      },
      {
        text:'What is your Typescript',
        answer:'A programming language'
      }
    ]
  }

  getQuestions(){
    return this.questions;
  }
}
