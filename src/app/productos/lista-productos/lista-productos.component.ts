import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListaProductosComponent { }
