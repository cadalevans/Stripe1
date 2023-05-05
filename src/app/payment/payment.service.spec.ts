import { TestBed } from '@angular/core/testing';

import { PaymentService } from './payment.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


describe('PaymentService', () => {
  let service: PaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});



