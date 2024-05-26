import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/models/offer';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss']
})
export class PreferencesComponent implements OnInit {
  favoriteOffers: Offer[] = [];

  constructor() { }

  ngOnInit(): void {
    try {
      this.favoriteOffers = JSON.parse(localStorage.getItem('preferences') ?? '') as Offer[];
      console.log(this.favoriteOffers);
    } catch (err) {
      // 👇️ SyntaxError: Unexpected end of JSON input
      this.favoriteOffers = [];
      console.log('There are no preferences yet', err);
    }
  }

}
