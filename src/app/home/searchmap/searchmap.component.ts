import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import {GooglePlaceDirective} from "ngx-google-places-autocomplete";
@Component({
  selector: 'app-searchmap',
  templateUrl: './searchmap.component.html',
  styleUrls: ['./searchmap.component.css']
})
export class SearchmapComponent implements OnInit {
  @ViewChild('mapRef', { static: true })
  mapElement!: ElementRef;
  @ViewChild('placesRef', { static: true }) placesRef!: GooglePlaceDirective;


  constructor() { };


  handleAddressChange(address: any) {
    console.log({
      latitude: address.geometry.location.lat(),
      longitude: address.geometry.location.lng(),

    })

  }


  ngOnInit() {
    this.placesRef.options = {
      ...this.placesRef.options, types: [], componentRestrictions: {
        country: "JO",
      }
    }

  }
  // loadMap = () => {
  //   var map = new window['google'].maps.Map(this.mapElement.nativeElement, {
  //     center: {lat: 24.5373, lng: 81.3042},
  //     zoom: 8
  //   });

  //   var marker = new window['google'].maps.Marker({
  //     position: {lat: 24.5373, lng: 81.3042},
  //     map: map,
  //     title: 'Hello World!',
  //     draggable: true,
  //     animation: window['google'].maps.Animation.DROP,
  //   });

  //   var contentString = '<div id="content">'+
  //   '<div id="siteNotice">'+
  //   '</div>'+
  //   '<h3 id="thirdHeading" class="thirdHeading">tutsmake.com</h3>'+
  //   '<div id="bodyContent">'+
  //   '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>'+
  //   '</div>'+
  //   '</div>';

  //   var infowindow = new window['google'].maps.InfoWindow({
  //     content: contentString
  //   });

  //     marker.addListener('click', function() {
  //       infowindow.open(map, marker);
  //     });

  // }
  // renderMap() {

  //   window['initMap'] = ()   =>  {
  //     this.loadMap();
  //   }
  //   if(!window.document.getElementById('google-map-script')) {
  //     var s = window.document.createElement("script");
  //     s.id = "google-map-script";
  //     s.type = "text/javascript";
  //     //s.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyB3TtC7ztiNouZ55oFsr3HwnR-6ln11F-Y";

  //     window.document.body.appendChild(s);
  //   } else {
  //     this.loadMap();
  //   }
  // }





  //   // zoomIn() {

  //   //   if (this.zoom < this.options.maxZoom) this.zoom++
  //   // }

  //   // zoomOut() {
  //   //   if (this.zoom > this.options.minZoom) this.zoom--
  //   // }

}
