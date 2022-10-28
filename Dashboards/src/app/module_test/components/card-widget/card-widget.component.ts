import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { ServiceTestService } from '../../services/service-test.service';


@Component({
  selector: 'app-card-widget',
  templateUrl: './card-widget.component.html',
  styleUrls: ['./card-widget.component.css']
})
export class CardWidgetComponent implements OnInit {
  @Input() inName: any;
  @Input() inQuery: any;
  public body!: JSON;
  constructor(private service:ServiceTestService) {

  }

  ngOnInit(): void {
    var obj = {
      query: this.inQuery
    }
    this.body=<JSON><unknown>obj;
    console.log(this.body);
    this.getVaues(this.body);

  }

  public getVaues(body:JSON){
    if(this.inQuery != ''){
      this.service.postRest('https://aadskepler.rt4.cloud:8481/WS_ejemplo/api/solicitud',body).subscribe(data =>{
      console.log(data);
    }),(err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
          console.log('Client-side error occured.');
      } else {
          console.log('Server-side error occured.');
      }
  }
    }

  }

}
