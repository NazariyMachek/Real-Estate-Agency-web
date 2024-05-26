import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Offer } from '../models/offer';
import { environment } from 'src/environments/environment';
import { Realtor } from '../models/realtor';

const CACHE_SIZE = 1;

/**
 * Service that works with the Feature Access data
 */
@Injectable({
  providedIn: 'root',
})
export class RealtorService {

  constructor(private http: HttpClient) {}

  public loadRealtors(): Observable<Realtor[]> {
    return this.http.get<Realtor[]>(environment.API_URL + 'Realtor/get');
  }

  public loadRealtorById(id: number): Observable<Realtor> {
    return this.http.get<Realtor>(environment.API_URL + 'Realtor/get/' + id);
  }

  public loadAllRealtorByUserId(userId: number): Observable<Realtor[]> {
    return this.http.get<Realtor[]>(environment.API_URL + 'Realtor/user/' + userId);
  }

  public createRealtor(offer: Realtor): Observable<any> {
    return this.http.post<Realtor>(environment.API_URL + 'Realtor/create', offer);
  }
}