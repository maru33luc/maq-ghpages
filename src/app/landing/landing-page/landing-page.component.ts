import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ListaProductosComponent } from '../../productos/lista-productos/lista-productos.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ListaProductosComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPageComponent { }
