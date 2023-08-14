import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../models/Company.interface';

@Injectable({ providedIn: 'root' })
export class CompanyService {
  private readonly basePath = './mock/skill-data.json';

  constructor(private httpClient: HttpClient) {
    this.getCompanyData();
  }

  public getCompanyData() {
    return this.httpClient.get<Company[]>(this.basePath);
  }
}
