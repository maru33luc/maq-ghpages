import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [],
  template: `
    <section>
      <h1>Servicios</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </section>
  `,
  styleUrl: './servicios.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiciosComponent {}
