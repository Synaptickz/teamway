import { Component, OnInit } from '@angular/core';
import { QuestionAnswer } from '../models/qa.model';
import { QaService } from '../qa.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  qaArr: Array<QuestionAnswer> = [];
  qaIndex: number = 0;
  result: string = '';

  constructor(private qaService: QaService) {}

  ngOnInit(): void {
    this.qaService.getQA()
      .subscribe(arr => this.qaArr = arr);
  }

  restart(): void {
    this.qaIndex = 0;
    this.qaArr.forEach(qa => qa.answers.forEach(v => v.checked = false));
  }

  prev(): void {
    if (this.qaIndex - 1 >= 0) {
      this.qaIndex--;
    }
  }

  next(): void {
    if (this.qaIndex + 1 < this.qaArr.length) {
      this.qaIndex++;
    }
  }

  setScore(n: number): void {
    this.qaArr[this.qaIndex].answers.forEach((v, i) => v.checked = i == n)
  }

  canComputeResult(): boolean {
    const answersCount = this.qaArr.filter(v => v.answers.find(p => p.checked == true)).length
    if (this.qaArr.length === answersCount && this.qaArr.length > 0) {
      return true;
    }
    return false;
  }

  computeResult(): void {
    const scoreSum = this.qaArr
      .map(v => v.answers.find(p => p.checked == true)?.score)
      .reduce((acc, a) => acc! + a!, 0)
      || 0;
    this.result = (scoreSum <= 0) ? 'introvert' : 'exovert';
  }
}
