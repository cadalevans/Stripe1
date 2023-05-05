import { TestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { MenuService } from './menu.service';
interface Position {
  coords: {
    latitude: number,
    longitude: number
  }
}

describe('MenuService', () => {
  let service: MenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
/*@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  getCurrentPosition(): Observable<Position> {
    return new Observable((observer) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => observer.next(position),
          (error) => observer.error(error)
        );
      } else {
        observer.error('Geolocation not supported');
      }
    });
  }
}*/
