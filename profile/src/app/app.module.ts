import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ExperienceComponent } from './experience/experience.component';
import { TimeLineComponent } from './time-line/time-line.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { StrengthsComponent } from './strengths/strengths.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    ExperienceComponent,
    TimeLineComponent,
    TestimonialsComponent,
    StrengthsComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
