import {
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
    selector: 'app-availability',
    imports: [CommonModule, TranslocoModule],
    templateUrl: './availability.component.html'
})
export class AvailabilityComponent implements AfterViewInit {
  @ViewChild('canvas') canvas?: ElementRef<HTMLCanvasElement>;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.drawOnCanvas();
  }

  drawOnCanvas() {
    const canvas = this.canvas?.nativeElement;
    const ctx = canvas?.getContext('2d');

    this.fillReact('red', 0, canvas!.height, canvas!.width, ctx);
    this.fillReact('green', 250, canvas!.height, canvas!.width, ctx);
  }

  private fillReact(
    color: 'green' | 'red',
    start: number,
    height: number,
    width: number,
    ctx: CanvasRenderingContext2D | null | undefined,
    end: number = 0
  ) {
    if (!ctx?.fillStyle) return;

    ctx.fillStyle = color;
    ctx.fillRect(start, end, width, height);
  }
}
