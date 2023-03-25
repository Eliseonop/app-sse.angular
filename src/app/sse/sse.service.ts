import { UserModel } from './models/userModel';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

export interface Room {
  id: number;
  name: string;
  users: UserModel[];
  empresa: number;
}

@Injectable({
  providedIn: 'root',
})
export class SseService {
  myData = new BehaviorSubject<any>(null);
  users = new BehaviorSubject<UserModel[]>([
    {
      id: 1,
      name: 'Kyle',
      empresa: 1,
    },
    {
      id: 2,
      name: 'Kyle',
      empresa: 1,
    },
  ]);

  constructor(private http: HttpClient) {}

  conect(empresa: number, user: number): Observable<MessageEvent> {
    const eventSource = new EventSource(
      'http://localhost:3000/api/eventos?empresa=' + empresa
    );
    return new Observable((observer) => {
      eventSource.onmessage = (event) => {
        console.log(event);
      };

      eventSource.onerror = (error) => {
        observer.error(error);
      };
    });
  }

  async createTask(data: string , empresa: number) {
    fetch('http://localhost:3000/api/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: data,
        empresa: empresa,
      }),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
