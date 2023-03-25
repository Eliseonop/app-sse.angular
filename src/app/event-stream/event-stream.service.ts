import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventStreamService {
  constructor() {}

  getEvents(): Observable<MessageEvent> {
    const url = 'http://localhost:3000/stream';
    const eventSource = new EventSource(url);

    return new Observable((observer) => {
      eventSource.onmessage = (event: MessageEvent) => {
        observer.next(event);
      };

      eventSource.onerror = () => {
        observer.error('EventSource error');
      };
    });
  }
}
