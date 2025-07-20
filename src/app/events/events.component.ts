import { Component, OnInit } from '@angular/core';
import { EventService } from '../core/services/event.service';
import { BookingService } from '../core/services/booking.service';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';

interface Event {
  id: number;
  title: string;
  date: string;
}

@Component({
  selector: 'app-events',
  imports: [NgFor],
  templateUrl: './events.component.html',
})
export class EventsComponent implements OnInit {
  events: Event[] = [];

  constructor(
    private eventService: EventService,
    private bookingService: BookingService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents() {
    this.eventService.getEvents().subscribe({
      next: (res: any[]) => {
        this.events = res.map(e => ({
          id: e.id,
          title: e.title,
          date: e.date
        }));
      },
      error: (err) => {
        alert('Failed to load events');
      },
    });
  }

  book(eventId: number) {
    this.bookingService.bookEvent(eventId).subscribe({
      next: () => {
        alert('Event booked successfully');
      },
      error: () => {
        alert('Already booked or booking failed');
      },
    });
  }
}
