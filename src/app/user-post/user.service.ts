import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUserService() {
    return [
      {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+1-202-555-0143',
        address: {
          street: '123 Main St',
          city: 'New York',
          state: 'NY',
          zip: '10001',
        },
        role: 'user',
        isActive: true,
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        phone: '+1-303-555-0193',
        address: {
          street: '456 Elm St',
          city: 'Los Angeles',
          state: 'CA',
          zip: '90001',
        },
        role: 'admin',
        isActive: true,
      },
      {
        id: 3,
        name: 'Alice Johnson',
        email: 'alice.johnson@example.com',
        phone: '+1-404-555-0127',
        address: {
          street: '789 Pine St',
          city: 'Chicago',
          state: 'IL',
          zip: '60601',
        },
        role: 'superAdmin',
        isActive: false,
      },
      {
        id: 4,
        name: 'Bob Brown',
        email: 'bob.brown@example.com',
        phone: '+1-505-555-0159',
        address: {
          street: '321 Oak St',
          city: 'Houston',
          state: 'TX',
          zip: '77001',
        },
        role: 'user',
        isActive: true,
      },
      {
        id: 5,
        name: 'Emily Davis',
        email: 'emily.davis@example.com',
        phone: '+1-606-555-0174',
        address: {
          street: '654 Cedar St',
          city: 'Phoenix',
          state: 'AZ',
          zip: '85001',
        },
        role: 'admin',
        isActive: false,
      },
    ];
  }
  // constructor() { }
}
