import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Offer } from '../models/offer';
import { environment } from 'src/environments/environment';

const CACHE_SIZE = 1;

/**
 * Service that works with the Feature Access data
 */
@Injectable({
  providedIn: 'root',
})
export class OfferService {
  private _allOffers$: Observable<Offer[]> | undefined;

  constructor(private http: HttpClient) {}

  get allOffers(): Observable<Offer[]> {
    if (!this._allOffers$) {
      this._allOffers$ = this.loadOffers().pipe(
        shareReplay(CACHE_SIZE)
      );
    }
    return this._allOffers$;
  }

  /**
   * This service gets the features list from API
   * @returns - Feature array
   */
  public loadOffers(): Observable<Offer[]> {
    return this.http.get<Offer[]>(environment.API_URL + 'Offer/get');
  }

  public loadOfferById(id: number): Observable<Offer> {
    return this.http.get<Offer>(environment.API_URL + 'Offer/get/' + id);
  }

  public loadAllOffersByUserId(userId: number): Observable<Offer[]> {
    return this.http.get<Offer[]>(environment.API_URL + 'Offer/user/' + userId);
  }

  public createOffer(offer: Offer): Observable<any> {
    return this.http.post<Offer>(environment.API_URL + 'Offer/create', offer);
  }

  public updateOffer(id: number, offer: Offer): Observable<any> {
    return this.http.put<Offer>(environment.API_URL + 'Offer/update/' + id, offer);
  }
}