import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.scss']
})
export class TimeLineComponent implements OnInit {

  @Input() organization;
  constructor() { }

  ngOnInit() { }
}
