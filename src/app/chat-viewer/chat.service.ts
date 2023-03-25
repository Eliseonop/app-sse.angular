import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private eventSource: EventSource = new EventSource('http://localhost:3000/chat');

  constructor() { }

  start(): Observable<MessageEvent> {
    return new Observable<MessageEvent>(observer => {
      this.eventSource.addEventListener('message', (event: MessageEvent) => {
        observer.next(event);
      });
      this.eventSource.onerror = error => {
        observer.error(error);
      };
    });
  }

  sendMessage(message: string): void {
    fetch('/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message })
    });
  }

  stop(): void {
    if (this.eventSource) {
      this.eventSource.close();
    }
  }
}
