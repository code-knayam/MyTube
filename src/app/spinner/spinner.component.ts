import { Component, OnInit } from '@angular/core';

import { SpinnerService } from '../spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  active: boolean;

  constructor(private spinnerService: SpinnerService) { }

  ngOnInit() {
    this.spinnerService.spinnerStatus.subscribe(
      (status: boolean) => {
        this.active = status;
      }
    );
  }

}
