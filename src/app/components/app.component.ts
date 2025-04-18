import { Component } from '@angular/core';
import { AvailabilityComponent } from './availability/availability.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { ProfileSectionComponent } from './profile-section/profile-section.component';
import { SkillTableComponent } from './skill-table/skill-table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    HeaderBarComponent,
    ProfileSectionComponent,
    SkillTableComponent,
    FooterBarComponent,
    AvailabilityComponent,
  ],
})
export class AppComponent {}
