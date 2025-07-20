// core/services/auth.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// core/services/event.service.ts
@Injectable({ providedIn: 'root' })
export class EventService {
  private apiUrl = 'https://localhost:7282/api/events';
  constructor(private http: HttpClient) {}
  getEvents() {
    return this.http.get<Event[]>(this.apiUrl);
  }
}

