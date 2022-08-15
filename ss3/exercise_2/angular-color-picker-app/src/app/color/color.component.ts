import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  color1 = 255;
  color2 = 255;
  color3 = 255;
  color4 = ' ';

  getColor1(color1) {
    this.color1 = color1;
  }

  getColor2(color2) {
    this.color2 = color2;
  }

  getColor3(color3) {
    this.color3 = color3;
  }

  constructor() {
  }

  ngOnInit(): void {
  }
}
