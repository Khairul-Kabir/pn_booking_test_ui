// core/services/auth.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BookingService {
  private apiUrl = 'https://localhost:7282/api/bookings';
  constructor(private http: HttpClient) {}

  bookEvent(eventId: number) {
    return this.http.post(this.apiUrl, { eventId });
  }

  getMyBookings() {
    return this.http.get(this.apiUrl + '/me');
  }
}

