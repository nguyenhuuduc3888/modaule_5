import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  firstNumber = 0;
  secondNumber = 0;
  result = 0;
  error = '';

  calculator(operator) {
    if (operator === '+') {
      this.result = this.firstNumber + this.secondNumber;
      this.error = ' Ok';
    } else if (operator === '-') {
      this.result = this.firstNumber - this.secondNumber;
      this.error = ' Ok';
    } else if (operator === '*') {
      this.result = this.firstNumber * this.secondNumber;
      this.error = ' Ok';
    } else {
      if (this.secondNumber === 0) {
        this.error = ' Không thành công,Không thể chia cho không';
      } else {
        this.result = this.firstNumber / this.secondNumber;
        this.error = ' Ok';
      }
    }
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
