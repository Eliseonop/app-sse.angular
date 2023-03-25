import { Component, OnInit } from '@angular/core';
import { EventStreamService } from './event-stream.service';

@Component({
  selector: 'app-event-stream',
  templateUrl: './event-stream.component.html',
  styleUrls: ['./event-stream.component.scss']
})
export class EventStreamComponent implements OnInit {
  messages: MessageEvent[] = [];

  constructor(private eventStreamService: EventStreamService) {}

  ngOnInit() {
    this.eventStreamService.getEvents().subscribe((event) => {
      this.messages.push(event);
    });
  }
}
