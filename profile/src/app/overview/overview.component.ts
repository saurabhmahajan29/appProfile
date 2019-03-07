import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  @Input() homeCarousel;
  @Input() resumeUrl;
  isOpen: Boolean = false;
  constructor() { }

  ngOnInit() {
  }

  navigateTo(eleId) {
    document.getElementById(eleId).scrollIntoView();
  }

  navToggle() {
    this.isOpen = !this.isOpen;
  }
}
