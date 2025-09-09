import { Component, inject } from '@angular/core';
import { FormControl , FormGroup, ReactiveFormsModule} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HousingLocation } from '../../services/housing-location';
import { HousingService } from '../../services/housing-service';


@Component({
  selector: 'app-details-component',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './details-component.html',
  styleUrls: ['./details-component.scss']
})
export class DetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined; 
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });
  constructor() {
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
    this.housingService.getHousingLocationById(housingLocationId).then((housingLocation) => {
      this.housingLocation = housingLocation;
    });
  }
  submitApplication() { 
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    );
  }
}