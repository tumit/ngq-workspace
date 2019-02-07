import { Component, OnInit } from '@angular/core';
import 'bootstrap-datepicker';
declare var $: any;

@Component({
  selector: 'ngq-datepicker',
  template: `
    <p>
      ngq-datepicker works!
    </p>
  `,
  styles: []
})
export class NgqDatepickerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      alert('I am Called From jQuery');
    });
  }

}
