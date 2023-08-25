import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-header-bar',
  standalone: true,
  imports: [CommonModule],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-100%)' }),
        animate(
          '300ms ease-in',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'translateY(0)' }),
        animate(
          '300ms ease-out',
          style({ opacity: 0, transform: 'translateY(-100%)' })
        ),
      ]),
    ]),
  ],
  templateUrl: './header-bar.component.html',
})
export class HeaderBarComponent {
  public isMenuShowing = false;

  toggleMenuBar() {
    this.isMenuShowing = !this.isMenuShowing;
  }
}
