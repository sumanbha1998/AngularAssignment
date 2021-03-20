import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'suman';


  viewFlag:boolean = true;


  clickingView(){
    this.viewFlag=true;
  }

  clickingApply(){
    this.viewFlag=false;
  }
}
