import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Budget} from './budget';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  private url = 'http://localhost:8080/rest/budgets';

  constructor(private http: HttpClient) { }

  public findAll(): Observable<Array<Budget>> {
    return this.http.get<Array<Budget>>(this.url);
  }

  public findById(id: number): Observable<Budget> {
    return this.http.get<Budget>(this.url + '/' + id);
  }

  public save(budget: Budget): Observable<Budget> {
    return this.http.post<Budget>(this.url + '/save', budget);
  }

  public update(budget: Budget): Observable<Budget> {
    return this.http.put<Budget>(this.url + '/update', budget);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(this.url + '/delete/' + id);
  }
}
