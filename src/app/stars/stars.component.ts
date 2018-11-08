import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {
  @Input() rating: number = 0;//input装饰器的含义就是rating这个变量应该有父组件传递进来
  // private rating: number = 0;
  private stars: boolean[] = [];
  constructor() { }

  ngOnInit() {
    for(let i = 0; i < 5;i ++){
      this.stars.push( i > this.rating);
    }
  }

}
