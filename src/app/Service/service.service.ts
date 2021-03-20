import { Injectable } from '@angular/core';

export interface userDetailObject {
  'id' : string;
  'traineename' : string;
  'courseName' : string;
  'joiningdate' : string;
  'coursedate' : string;
}

@Injectable({
  providedIn: 'root'
})


export class ServiceService {

  userDetailArray : userDetailObject []=[];
  constructor() {

    // this.userDetailArray.push({
    //   'id' : '1',
    //   'traineename' : 'Trainee Name',
    //   'courseName' : 'Course Name',
    //   'joiningdate' : 'Joining Date',
    //   'coursedate' : 'Course Date'
    // });

   }

  

  storeData(data : userDetailObject){
    this.userDetailArray.push({
      'id' : data.id,
      'traineename' : data.traineename,
      'courseName' : data.courseName,
      'joiningdate' : data.joiningdate,
      'coursedate' : data.coursedate
    });
    console.log(this.userDetailArray);
  }

  getData(id) : userDetailObject{
    return this.userDetailArray[id];
  }
}
