import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  @Input() aboutme;
  @Input() resumeUrl;
  constructor() { }

  ngOnInit() { }

}
