import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
    selector: 'app-footer-bar',
    imports: [CommonModule, TranslocoModule],
    templateUrl: './footer-bar.component.html'
})
export class FooterBarComponent {}
