import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-main-block',
  templateUrl: './main-block.component.html',
  styleUrls: ['./main-block.component.sass']
})
export class MainBlockComponent implements OnInit {
  @HostBinding('class.temp') temp: boolean = false;

  @Input() public index: number;
  @Input() public data?: {
    walls?: {
      top?: any;
      bottom?: any;
      left?: any;
      right?: any;
    };
    floor?: any;
  };
  constructor() { }



  public toggle_temp(){
    this.temp = !this.temp;
  }

  ngOnInit(): void {
  }

}
