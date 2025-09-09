import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location-component/housing-location-component';
import { HousingLocation } from '../../services/housing-location';
import { HousingService } from '../../services/housing-service';


@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home-component.html',
  styleUrls: ['./home-component.scss']
})
export class HomeComponent {

  housingLocationList : HousingLocation[] = [];
  housingService : HousingService = inject(HousingService);
  filteredLocationList: HousingLocation[] = [];

  constructor(){
    this.housingService
    .getAllHousingList()
    .then((housingLocationList : HousingLocation[])=>{
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }

  filteredResult(text:String){
    if(!text){
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    this.filteredLocationList = this.housingLocationList.filter((housingLocation)=>{
      return housingLocation?.city.toLowerCase().includes(text.toLowerCase());
    })
  }


}
