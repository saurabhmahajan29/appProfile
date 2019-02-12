import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'profile';
  skills: Array = [
    {
      name: 'java',
      percentage: '80',
      borderColor: '#78C000'
    },
    {
      name: 'HTML',
      percentage: '70',
      borderColor: 'red'
    },
    {
      name: 'CSS',
      percentage: '100',
      borderColor: 'lime'
    },{
      name: 'spring boot',
      percentage: '80',
      borderColor: '#78C000'
    },
    {
      name: 'mongoDB',
      percentage: '90',
      borderColor: 'red'
    },
    {
      name: 'SQL',
      percentage: '95',
      borderColor: '#C7E596'
    },{
      name: 'spring boot',
      percentage: '80',
      borderColor: '#78C000'
    },
    {
      name: 'mongoDB',
      percentage: '90',
      borderColor: 'red'
    },
    {
      name: 'SQL',
      percentage: '95',
      borderColor: '#C7E596'
    }
  ];

}
