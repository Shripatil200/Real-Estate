import { Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { DetailsComponent } from './components/details-component/details-component';
import { PageNotFoundComponent } from './page-not-found.component/page-not-found.component';

export const routes: Routes = [
    {path:'', redirectTo:'/home', pathMatch:'full'},

    {path:'home' , component:HomeComponent},
    {path:'details', component:DetailsComponent},



    
    {path:"**", component:PageNotFoundComponent},
];
