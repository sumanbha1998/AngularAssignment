import { Component, OnInit } from '@angular/core';
import { ServiceService, userDetailObject } from '../Service/service.service';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit {

  constructor(private servcom : ServiceService) { }

  traineeDetail: userDetailObject []= [];

  ngOnInit(): void {

    this.traineeDetail = this.servcom.userDetailArray;
  }

}
