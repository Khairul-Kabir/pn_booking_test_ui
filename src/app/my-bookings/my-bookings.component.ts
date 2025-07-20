import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { BookingService } from '../core/services/booking.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-my-bookings',
  imports: [NgFor],
  templateUrl: './my-bookings.component.html',
  styleUrl: './my-bookings.component.css'
})
export class MyBookingsComponent implements OnInit {
  bookings: any[] = [];

  constructor(private bookingService: BookingService) {}

  ngOnInit() {
    this.bookingService.getMyBookings().subscribe(res => (this.bookings = res as any[]));
  }
}

