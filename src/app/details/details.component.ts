import { Component, inject } from '@angular/core';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);

  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  constructor() {
    const locationId = this.route.snapshot.params['id'];
    this.housingLocation =
      this.housingService.getHousingLocationById(locationId);
  }
}
