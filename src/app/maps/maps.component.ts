import { Component } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { GoogleMapsModule } from '@angular/google-maps';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-maps',
  standalone: true,
  imports: [GoogleMap, GoogleMapsModule, CommonModule],
  templateUrl: './maps.component.html',
  styleUrl: './maps.component.css'
})
export class MapsComponent {
   latitude: number = 0; 
   longitude: number = 0;
   position = {lat: 70.73061, lng: -73.935242};
   markers = [
    {
      position: { lat: 40.73061, lng: -73.935242 },
      label: 'A'
    }, 
    {
      position: { lat: 70.73061, lng: -83.935242 },
      label: 'A'
    },
    {
      position: { lat: 80.73061, lng: -93.935242 },
      label: 'A'
    }  
  ]
  info: {position: {lat:number, lng:number}, label: string} = {position: {lat: 0, lng:0}, label: ""}

   location(event: google.maps.MapMouseEvent) {
   
      this.latitude = event.latLng?.toJSON().lat ?? 0;
      this.longitude = event.latLng?.toJSON().lng ?? 0;
      console.log(`${this.latitude }, ${this.longitude }`);

   this.info = {position: {lat: this.latitude, lng:this.longitude}, label: "A"};
    
   }





   
}
