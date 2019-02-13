import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'profile';
  skills: Array<any> = [
    {
      name: 'java',
      percentage: '80',
      borderColor: '#78C000'
    },
    {
      name: 'java',
      percentage: '70',
      borderColor: 'red'
    },
    {
      name: 'java',
      percentage: '100',
      borderColor: 'lime'
    },{
      name: 'java',
      percentage: '80',
      borderColor: '#78C000'
    },
    {
      name: 'html/css',
      percentage: '90',
      borderColor: 'red'
    },
    {
      name: 'sprint boot',
      percentage: '95',
      borderColor: '#C7E596'
    },{
      name: 'java',
      percentage: '80',
      borderColor: '#78C000'
    },
    {
      name: 'java',
      percentage: '90',
      borderColor: 'red'
    },
    {
      name: 'java',
      percentage: '95',
      borderColor: '#C7E596'
    }
  ];

}
