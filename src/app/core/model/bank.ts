export class Bank {
    constructor(
      public bank_name: string,
      public bank_address: string,
      public bank_city: string,
      public bank_state: string,
      public bank_zip_code: number,
      public bank_lng: number,
      public bank_lat: number
    ) {}
  }