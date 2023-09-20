import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-profile-section',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './profile-section.component.html',
})
export class ProfileSectionComponent {}
