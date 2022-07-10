import { Component } from '@angular/core';
import { DataService } from 'src/services/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private dataService:DataService){
    
  }
  title = 'faqs';
  questions:any[] = [];
  filteredQuestions:any[]=[];
  panelOpenState = false;
  step = 0;
  searchedValue:any='';
  totalLength:any;
  page:number=1;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  ngOnInit(){
    this.questions = this.dataService.getQuestions();
    this.totalLength=this.questions.length
    console.log("length", this.totalLength);
    this.getTheInput();
  }

  getTheInput(){
    this.filteredQuestions=this.searchedValue=='' ? this.questions : this.questions.filter((question)=>{
      // console.log(question.text);
      // console.log(question.text.toLowerCase() == this.searchedValue.toLowerCase());
      return question.text.toLowerCase().includes(this.searchedValue.toLowerCase());
    })
    console.log("Searched Value", this.searchedValue)
    console.log("filteredOne", this.filteredQuestions);
  }
}
