import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  url = 'http://localhost:3000/events';

  eventSource: EventSource = new EventSource(this.url);


  notification = new BehaviorSubject<any>([]);
  constructor(private http: HttpClient) {}


  connect(): Observable<any> {
    return new Observable((observer) => {
      this.eventSource.onmessage = (event: MessageEvent) => {
        observer.next([event.data]);
        this.notification.next([event.data]);
        console.log('EventSource message: ', [event.data])
      };
      this.eventSource.onerror = (e) => {
        console.log('EventSource error: ', e);
        observer.error('EventSource error');
      };
    });
  }

  enviarNotificacion(mensaje: string): Observable<any> {
    const url = 'http://localhost:3000/data';
    const data = [
      {
        id: 1,
        mensaje,
      },
    ]
    return this.http.post(url, data);
  }

  disconnect() {
    if (this.eventSource) {
      this.eventSource.close();
    }
  }
}
