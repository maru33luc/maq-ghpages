import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-cuadrado',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl:'./cuadrado.component.html',
  styleUrl: './cuadrado.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CuadradoComponent { }
