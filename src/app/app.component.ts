import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Testcase2';

  ReadMore:boolean=true;
  visible:boolean=false;





  onClick()
  {
    this.ReadMore=!this.ReadMore;
    this.visible=!this.visible;
  }

  public employees:any[]=[
    {
      "id":1,
      "name":"titi",
      "dep":"cse",
      "place":"Ekm"
    },
    {
      "id":2,
      "name":"tito",
      "dep":"eee",
      "place":"Ekm"
    },
    {
      "id":3,
      "name":"bruce",
      "dep":"ec",
      "place":"kollam"
    },
    
  ]
}
