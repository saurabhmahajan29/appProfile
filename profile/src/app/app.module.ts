import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ExperienceComponent } from './experience/experience.component';
import { TimeLineComponent } from './time-line/time-line.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { StrengthsComponent } from './strengths/strengths.component';
import { OverviewComponent } from './overview/overview.component';
import { SkillComponent } from './skill/skill.component';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProfileFooterComponent } from './profile-footer/profile-footer.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from '../app/_services/profile-service.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    ExperienceComponent,
    TimeLineComponent,
    TestimonialsComponent,
    StrengthsComponent,
    OverviewComponent,
    SkillComponent,
    ProfileFooterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule.forRoot(),
    HttpClientModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
      subtitleColor: 'black',
      subtitle: 'UI'
    })
  ],
  providers: [ ProfileService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
