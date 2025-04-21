import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { AccordionModule } from 'primeng/accordion'
import { AvatarModule } from 'primeng/avatar'
import { ChipModule } from 'primeng/chip'
import { DividerModule } from 'primeng/divider'
import { Technologie } from '../../interfaces/Technologie.interface'
@Component({
    selector: 'app-company-card',
    imports: [AccordionModule, DividerModule, ChipModule, AvatarModule],
    templateUrl: './company-card.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrl: './company-card.component.scss',
})
export class CompanyCardComponent {
    $headline = input.required<string>({ alias: 'headline' })
    $description = input.required<string>({ alias: 'description' })
    $image = input.required<string>({ alias: 'image' })
    $value = input<number>(-1, { alias: 'value' })
    $active = input.required<boolean>({ alias: 'active' })
    $usedTech = input<Technologie[]>([], { alias: 'technologies' })
    $imageBackgroundColor = input<string | undefined>(undefined, {
        alias: 'imageBackgroundColor',
    })
}
