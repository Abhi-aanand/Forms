import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics=['Angular', 'React', 'Vue'];
  topicHasError=true;
  submitted=false;
  errorMsg='';

  userModel = new User('Sabuja' , 'sabuja@gmail.com' , 7033510115 , 'default' , 'morning' , true);
  
  
  constructor( private _enrollmentservice: EnrollmentService){}

  validateTopic(value: string){
    if(value === 'default'){
      this.topicHasError = true;
    }else{
      this.topicHasError = false;

    }
  }
  onSubmit(userForm: any){
    console.log(userForm);
    
    // this.submitted=true;
    // this._enrollmentservice.enroll(this.userModel)
    // .subscribe(
    //   data=> console.log('Success!',data),
    //   error=>this.errorMsg=error.statusText
      
      
    // )
    
  }
}
