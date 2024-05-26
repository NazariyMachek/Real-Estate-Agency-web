import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Offer } from '../models/offer';
import { environment } from 'src/environments/environment';
import { Realtor } from '../models/realtor';
import { Agency } from '../models/agency';

const CACHE_SIZE = 1;

/**
 * Service that works with the Feature Access data
 */
@Injectable({
  providedIn: 'root',
})
export class AgencyService {

  constructor(private http: HttpClient) {}

  public loadAgencies(): Observable<Agency[]> {
    return this.http.get<Agency[]>(environment.API_URL + 'Agency/get');
  }

  public loadAgencyById(id: number): Observable<Agency> {
    return this.http.get<Agency>(environment.API_URL + 'Agency/get/' + id);
  }

  public createAgency(offer: Agency): Observable<any> {
    return this.http.post<Agency>(environment.API_URL + 'Agency/create', offer);
  }
}