import { Component, OnInit } from '@angular/core';
import { ProfileService  } from '../_services/profile-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  title = 'profile';

  profileData: JSON ;
  constructor(private profileService: ProfileService) { }

  ngOnInit() {
      this.profileService.getProfileData().subscribe(profileData => {
        this.profileData = profileData as JSON;
      });
  }
}
