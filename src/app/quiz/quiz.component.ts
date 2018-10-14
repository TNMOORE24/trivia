import { Component, OnInit } from '@angular/core';
import {Answer,Question} from './quiz.model';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
questions: Question[];
correctAnswers: number;
currentQuestionIndex: number;
quizIsOver: boolean;


 constructor() { }

  ngOnInit() {onSelect(answer: Answer){
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
    this.quizIsOver = false;
   if (answer.correct) {
     console.log('answer correct');
   }
   else {
     console.log('answer wrong');
   }
 }this.questions = [
  {
    "text": "Florence Nightingale became known as \"the Lady With the Lamp\" during which war?",
    "answers": [
      {
        "correct": false,
        "text": "American Civil War"
      },
      {
        "correct": false,
        "text": "World War I"
      },
      {
        "correct": true,
        "text": "Crimean War"
      },
      {
        "correct": false,
        "text": "World War II"
      }
    ]
  },
  {
    "text": "In a quarter-mile race, which animal can be expected to win?",
    "answers": [
      {
        "correct": false,
        "text": "Lion"
      },
      {
        "correct": true,
        "text": "Pronghorn Antelope"
      },
      {
        "correct": false,
        "text": "Quarter Horse"
      },
      {
        "correct": false,
        "text": "Giraffe"
      }
    ]
  }
];
  }

}
