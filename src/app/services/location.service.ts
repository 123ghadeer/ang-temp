import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  currentLocation!: {
    lat: number,
    lng: number
  }
  constructor() {

  }

  getUserLocation(){
    const location =  localStorage.getItem("location")
    if(!location){
      return null;
    }
    return JSON.parse(location);
  }

  setCurrentLocation() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) => {
        localStorage.setItem("location", JSON.stringify({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }))
      });
    }
  }
}
