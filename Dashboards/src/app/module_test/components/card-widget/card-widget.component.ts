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


  constructor(private service:ServiceTestService) {

  }

  ngOnInit(): void {
    var body = {
      query: this.inQuery
    }

    //console.log(this.body);
    this.getVaues(body);
    //this.postTest();
  }

  public getVaues(body:any){
    if(this.inQuery != ''){
      this.service.post('https://aadskepler.rt4.cloud:8481/WS_ejemplo/api/solicitud',body).subscribe(data =>{
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
  public postTest(){
    let url = 'https://aadskepler.rt4.cloud:8481/WS_ejemplo/api/solicitud'

    // this.service.postRest(url , JSON.parse(body)).subscribe(data =>{
    //   console.log(data);
    // })
    var raw = {
      query: this.inQuery
    };
     this.service.post(url,raw ).subscribe(response =>{
      console.log(response);
     });

  }

}
