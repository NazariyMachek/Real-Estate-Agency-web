import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Offer } from '../models/offer';
import { environment } from 'src/environments/environment';
import { Review } from '../models/review';

const CACHE_SIZE = 1;

/**
 * Service that works with the Feature Access data
 */
@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  private _allReviews$: Observable<Review[]> | undefined;

  constructor(private http: HttpClient) {}

  get allReviews(): Observable<Review[]> {
    if (!this._allReviews$) {
      this._allReviews$ = this.loadAllReviews().pipe(
        shareReplay(CACHE_SIZE)
      );
    }
    return this._allReviews$;
  }

  /**
   * This service gets the features list from API
   * @returns - Feature array
   */
  public loadAllReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(environment.API_URL + 'Review/get');
  }

  public loadLinkedReviews(id:number): Observable<Review[]> {
    return this.http.get<Review[]>(environment.API_URL + 'Review/offer/' + id);
  }

  public createReview(review: Review): Observable<any> {
    return this.http.post<Review>(environment.API_URL + "Review/create", review);
  }
}