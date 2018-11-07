import { Component } from '@angular/core';
import * as $ from 'jquery'
// import { $ } from 'protractor';

@Component({//用来告知ng如何处理typescript类，包含多个属性，属性的值叫元数据，ng会根据这些值来渲染组件执行组件的逻辑
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'auction';

  test(){
    $("#haha").html('hahaha')
  }
}
