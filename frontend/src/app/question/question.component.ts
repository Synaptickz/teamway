import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuestionAnswer } from '../models/qa.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input()
  qa!: QuestionAnswer;

  @Output()
  score = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  select(n: number) {
    this.score.emit(n);
  }
}
