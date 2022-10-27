import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';


@Component({
  selector: 'app-component-test',
  templateUrl: './component-test.component.html',
  styleUrls: ['./component-test.component.css']
})
export class ComponentTestComponent implements OnInit {

  rows:any;
  expanded = {};
  timeout: any;

  ColumnMode = ColumnMode;

  ngOnInit(): void {
  }




  constructor() {
    this.fetch((data: any) => {
      this.rows = data;
    });
  }

  onPage(event: any) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log('paged!', event);
    }, 100);
  }

  fetch(cb: { (data: any): void; (arg0: any): void; }) {
    const req = new XMLHttpRequest();
    req.open('GET', `https://aadskepler.rt4.cloud:8481/WS_ejemplo/api/estatusagente/5101`);

    req.onload = () => {
      const rows = JSON.parse(req.response);

      for (const row of rows) {
        row.height = Math.floor(Math.random() * 80) + 50;
      }

      cb(rows);
    };

    req.send();
  }

  getRowHeight(row: { height: any; }) {
    return row.height;
  }

}
