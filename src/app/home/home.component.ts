import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent, CommonModule],
  template: `
    <section class="content">
      <section>
        <form>
          <input type="text" placeholder="Filtrar por cidade" />
          <button class="primary" type="button">Buscar</button>
        </form>
      </section>
      <section class="results">
        <app-housing-location
          *ngFor="let item of housingLocationList"
          [housingLocation]="item"
        />
      </section>
    </section>
  `,
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];

  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
