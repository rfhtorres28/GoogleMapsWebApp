import { Component } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { GoogleMapsModule } from '@angular/google-maps';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-maps',
  standalone: true,
  imports: [GoogleMap, GoogleMapsModule, CommonModule, FormsModule],
  templateUrl: './maps.component.html',
  styleUrl: './maps.component.css'
})
export class MapsComponent {
   latitude: number = 0; 
   longitude: number = 0;
   inputLatitude: string = "";
   inputLongitude: string = "";
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
  center: google.maps.LatLngLiteral = { lat: 14.279451427593996, lng: 121.1005105 }; // sets the center of the map
  centerTest: google.maps.LatLngLiteral = { lat: 0, lng: 0 };
  options: google.maps.MapOptions = { maxZoom: 20, minZoom: 3};
  info: {position: {lat:number, lng:number}, label: string} = {position: {lat: 0, lng:0}, label: ""}
  testCoordinates: {position: {lat:number, lng:number}, label: string} = {position: {lat: 0, lng:0}, label: ""}

  location(event: google.maps.MapMouseEvent) {
   
      this.latitude = event.latLng?.toJSON().lat ?? 0;
      this.longitude = event.latLng?.toJSON().lng ?? 0;
      console.log(`${this.latitude }, ${this.longitude }`);

   this.info = {position: {lat: this.latitude, lng:this.longitude}, label: "A"};

   }
  
   
   onCoordinatesChange() {
      const latValue = parseFloat(this.inputLatitude);
      const longValue = parseFloat(this.inputLongitude);
      this.centerTest = {lat: latValue, lng:longValue}
   }




   
}
