import {
    ChangeDetectionStrategy,
    Component,
    input,
    output,
} from '@angular/core'
import {
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms'
import { ButtonModule } from 'primeng/button'
import { FloatLabelModule } from 'primeng/floatlabel'
import { InputTextModule } from 'primeng/inputtext'
import { TextareaModule } from 'primeng/textarea'

@Component({
    selector: 'app-cta-form',
    imports: [
        FloatLabelModule,
        ReactiveFormsModule,
        FormsModule,
        InputTextModule,
        TextareaModule,
        ButtonModule,
    ],
    templateUrl: './cta-form.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtaFormComponent {
    $loading = input<boolean>(false, { alias: 'loading' })
    formChanged = output<
        Partial<{
            name: string | null
            email: string | null
            text: string | null
        }>
    >()

    contact = new FormGroup({
        name: new FormControl<string>('', [Validators.required]),
        email: new FormControl<string>('', [
            Validators.email,
            Validators.required,
        ]),
        message: new FormControl<string>('', [Validators.required]),
    })

    submitForm() {
        this.formChanged.emit(this.contact.value)
    }
}

interface ContactForm {
    name: string
    email: string
    message: string
}
