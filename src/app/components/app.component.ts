import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgSwitch, NgSwitchDefault, NgSwitchCase } from '@angular/common';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { ProfileSectionComponent } from './profile-section/profile-section.component';
import { SkillTableComponent } from './skill-table/skill-table.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    NgSwitch,
    NgSwitchDefault,
    NgSwitchCase,
    RouterOutlet,
    HeaderBarComponent,
    ProfileSectionComponent,
    SkillTableComponent,
    FooterBarComponent,
  ],
})
export class AppComponent {}
