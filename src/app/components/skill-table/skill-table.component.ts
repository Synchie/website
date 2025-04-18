import { Component } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { CompanyService } from 'src/app/services/company.service';
import { NgIconComponent } from '@ng-icons/core';
import {
  animate,
  style,
  transition,
  trigger,
  state,
} from '@angular/animations';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
    selector: 'app-skill-table',
    imports: [CommonModule, AsyncPipe, NgIconComponent, TranslocoModule],
    templateUrl: './skill-table.component.html',
    animations: [
        trigger('rotateAnimation', [
            state('start', style({
                transform: 'rotateY(0deg)',
            })),
            state('end', style({
                transform: 'rotateY(180deg)',
            })),
            transition('start <=> end', animate('750ms ease-in-out')),
        ]),
    ]
})
export class SkillTableComponent {
  public companies$ = this.service.getCompanyData();

  public isVisible: boolean[] = [false, false, false];
  public currentState: string[] = ['start', 'start', 'start'];

  constructor(private service: CompanyService) {}

  toogleCardSpin(index: number) {
    this.currentState[index] =
      this.currentState[index] === 'start' ? 'end' : 'start';
  }
  toggleVisibility(event: any, index: number) {
    if (event.fromState === 'void') return;
    this.isVisible[index] = !this.isVisible[index];
  }
}
