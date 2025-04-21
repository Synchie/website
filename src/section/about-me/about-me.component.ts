import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ChipModule } from 'primeng/chip';
@Component({
  selector: 'app-about-me',
  imports: [ChipModule],
  templateUrl: './about-me.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutMeComponent {
  public $skills = signal([
    'Angular',
    'TypeScript',
    '.NET',
    'TailwindCSS',
    'Azure',
  ]);
}
