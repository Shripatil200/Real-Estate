import { Component, Input } from '@angular/core';
import { HousingLocation } from '../../services/housing-location';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-housing-location-component',
  imports: [RouterModule],
  templateUrl: './housing-location-component.html',
  styleUrls: ['./housing-location-component.scss']
})
export class HousingLocationComponent {
  @Input() housingLocation! : HousingLocation;
}
