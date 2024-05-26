import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/models/offer';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.scss']
})
export class OffersListComponent implements OnInit {



  mockedOffers: Offer[] = [];
  filteredOffer: Offer[] = [];

  searchValue: string = '';

  roomEnabled: boolean = true;
  houseEnabled: boolean = true;
  garageEnabled: boolean = true;
  terrainEnabled: boolean = true;

  minPrice: number = 0;
  maxPrice: number = 10000;

  constructor(private offerService: OfferService) { }

  ngOnInit(): void {
    this.filteredOffer = this.mockedOffers;
    
    this.offerService.allOffers.subscribe(result => {
      this.mockedOffers = result as Offer[];
      this.filteredOffer = this.mockedOffers;
    })
  }

  onRoomSwitch() {
    this.roomEnabled = !this.roomEnabled;
    this.applyFilters();
  }

  onHouseSwitch() {
    this.houseEnabled = !this.houseEnabled;
    this.applyFilters();
  }

  onGarageSwitch() {
    this.garageEnabled = !this.garageEnabled;
    this.applyFilters();
  }

  onTerrainSwitch() {
    this.terrainEnabled = !this.terrainEnabled;
    this.applyFilters();
  }

  applyFilters() {
    let filteredArray = [];
    let switchedArray: Offer[] = [];
    let switchFilters: number[] = [];
    if (this.roomEnabled) {
      switchFilters.push(0);
    }
    if (this.houseEnabled) {
      switchFilters.push(1);
    }
    if (this.garageEnabled) {
      switchFilters.push(2);
    }
    if (this.terrainEnabled) {
      switchFilters.push(3);
    }
    filteredArray = this.mockedOffers.filter(offer => {
      return offer.title.toLowerCase().includes(this.searchValue.toLowerCase());
    });

    filteredArray.forEach(filter => {
      if (switchFilters.includes(filter.offertype)) {
        switchedArray.push(filter);
      }
    });

    switchedArray = switchedArray.filter(offer => {
      return offer.price > this.minPrice && offer.price < this.maxPrice;
    });

    this.filteredOffer = switchedArray;
  }

  private getStringOfferType(offer: Offer): string {
    switch (offer.offertype) {
      case 0:
        return 'Room';
      case 1: 
        return 'House';
      case 2:
        return 'Garage';
      case 3:
        return 'Terrain';
    }
    return '';
  }

}
