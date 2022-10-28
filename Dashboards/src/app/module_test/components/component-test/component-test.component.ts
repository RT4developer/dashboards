import { Component, OnInit ,Input} from '@angular/core';
import { ColumnMode, columnsByPin } from '@swimlane/ngx-datatable';
import { ServiceTestService } from '../../services/service-test.service';


@Component({
  selector: 'app-component-test',
  templateUrl: './component-test.component.html',
  styleUrls: ['./component-test.component.css']
})
export class ComponentTestComponent implements OnInit {
  @Input() url: any;
  rows:any;
  expanded = {};
  timeout: any;

  ColumnMode = ColumnMode;

  ngOnInit(): void {
  }




  constructor(private service:ServiceTestService) {

    this.testTable();
  }


  onPage(event: any) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log('paged!', event);
    }, 100);
  }



  getRowHeight(row: { height: any; }) {
    return row.height;
  }

  public testTable(){
    this.service.getRest('https://aadskepler.rt4.cloud:8481/WS_ejemplo/api/estatusagente/5101').subscribe(data => {
      this.rows = data;
    })
  }

}
