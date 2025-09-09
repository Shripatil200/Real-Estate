import { Injectable } from '@angular/core';
import { promises } from 'dns';
import { HousingLocation } from './housing-location';
import { features } from 'process';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  
  url = "http://localhost:3000/locations";

  async getAllHousingList(): Promise<HousingLocation[]>{
    const data = await fetch(this.url);
    
    return (await data.json()) ??[];
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined>{
    const data = await fetch(`${this.url}?id=${id}`);
    const location = await data.json();
    return location[0] ?? {};
  }

  submitApplication(firstName:String, lastName:String, email:String){
    // add form submition logic later..

    console.log(firstName, lastName, email);
  }
}
