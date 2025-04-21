import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { AccordionModule } from 'primeng/accordion'
import { map } from 'rxjs'
import { CompanyCardComponent } from '../../components/company-card/company-card.component'
import { CompanyService } from '../../services/company.service'
@Component({
    selector: 'app-skills',
    imports: [CompanyCardComponent, AccordionModule],
    templateUrl: './skills.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
    private skillService = inject(CompanyService)
    public $data = toSignal(
        this.skillService
            .getCompanyData()
            .pipe(map((v) => v.sort((a, b) => a.sort - b.sort)))
    )
}
