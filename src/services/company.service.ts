import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { Company } from '../interfaces/Company.interface'

@Injectable({ providedIn: 'root' })
export class CompanyService {
    private readonly basePath = './mock/skill-data.json'

    private httpClient = inject(HttpClient)

    public getCompanyData() {
        return this.httpClient.get<Company[]>(this.basePath)
    }
}
