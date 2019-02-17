import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../shared/app.settings';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private profileUrl = AppSettings.PROFILE_JSON_URL;

  constructor(private httpClient: HttpClient) { }

  getProfileData() {
    return this.httpClient.get(this.profileUrl);
  }
}

