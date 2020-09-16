import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Abarna_Selva';
  title = "list of courses";
  imageurl = "https://loren.com/400/200";
  // Event Binding:
  onsave($event){
    console.log("save button is clicked!",$event);
  }
  // Two way data binding:
  // email = "abarna@example.com";
  // onkeyup() {
  //   console.log(this.email);
  // }
  // ngif:
  course = [];
}
