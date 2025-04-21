import { Technologie } from './Technologie.interface'

export interface Company {
    companyTitle: string
    companyHomepage: string
    companyLogo: string
    companySummary: string
    usedTechnologie: Technologie[]
    sort: number
}
