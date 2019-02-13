import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'profile';

  profileData: JSON ;
  constructor() { }

  ngOnInit() {

    const dataJson = `{
      "aboutme":{
        "description": "Hey there! I am Manan Shah. I discovered my passion for programming when I was a sophomore in High School; It was then when it became clear what I wanted to do for a living. I pursued my career at Maharaja SayajiRao University in Baroda where I learned JAVA and other web technologies and I fell in love with coding and designing. I am a tech-savvy person and like to keep myself updated with new softwares and technologies. I follow stackoverflow, Github, javaworld, javaranch and lot other technical websites. When I am not coding, I play guitar and keyboard ;)",
        "dob":"29 jun 1989",
        "skype":"shahmanan.com",
        "phone":"+ 32 4663028",
        "whatsapp":"91 967331",
        "email":"shahmanan.com@gmail.com",
        "address":"Brussels, Belgium"
      },
      "experience": {
        "specialities":"User Expereince & User Requirements, Analysis, design and development of Java based applications, effort estimations and negotiations techniques, client facing activities, Product modeling, Team mentoring.",
        "domains": ["Telecom", "Financial","Technical"],
        "organization": [
          {
            "year": 2010,
            "name": "ING",
            "designation": "Application Lead",
            "duration": "January 2018 – Present",
            "city": "Brussels",
            "country": "Belgium",
            "logo": "ing-bank-logo.png"
          }, {
            "year": 2015,
            "name": "Oracle",
            "designation": "Java Consultant",
            "duration": "September 2014 – January 2016",
            "city": "Doha",
            "country": "Qatar",
            "logo": "oracle-logo.png"
          }, {
            "year": 2013,
            "name": "Telenet",
            "designation": "Java Analyst Developer",
            "duration": "July 2013 – August 2014",
            "city": "Mechelen",
            "country": "Belgium",
            "logo": "telenet-logo-uitgelicht.jpg"
          }, {
            "year": 2010,
            "name": "Infosys",
            "designation": "Java Developer",
            "duration": "June 2010 – July 2013",
            "city": "Pune",
            "country": "Maharashtra, India",
            "logo": "Infosys-logo.jpg"
          }
        ]
      },
      "skills":"",
      "testimonials": ""
    }`;
    this.profileData = JSON.parse(dataJson);
    }
  }
  /*[
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
  ];*/

}
