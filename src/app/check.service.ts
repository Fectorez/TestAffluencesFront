import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Availability {
  available: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CheckService {
  private apiUrl = 'http://localhost:8081';

  constructor(private http: HttpClient) { }

  checkTimeSlot(date: string, time: string): Observable<Availability> {
    console.log(`${this.apiUrl}/availability?datetime=${date} ${time}&resourceId=1337`)
    return this.http.get<Availability>(`${this.apiUrl}/availability?datetime=${date} ${time}&resourceId=1337`);
  }
}
