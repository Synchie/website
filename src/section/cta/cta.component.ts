import { HttpClient } from '@angular/common/http'
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    ResourceStatus,
    signal,
} from '@angular/core'
import { rxResource } from '@angular/core/rxjs-interop'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MessageService } from 'primeng/api'
import { ButtonModule } from 'primeng/button'
import { FloatLabelModule } from 'primeng/floatlabel'
import { InputTextModule } from 'primeng/inputtext'
import { TextareaModule } from 'primeng/textarea'
import { Toast } from 'primeng/toast'
import { of, tap } from 'rxjs'
import { CtaFormComponent } from '../../components/cta-form/cta-form.component'

@Component({
    selector: 'app-cta',
    imports: [
        FloatLabelModule,
        ReactiveFormsModule,
        FormsModule,
        InputTextModule,
        TextareaModule,
        ButtonModule,
        Toast,
        CtaFormComponent,
    ],
    providers: [MessageService],
    templateUrl: './cta.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtaComponent {
    private httpClient = inject(HttpClient)
    private messageService = inject(MessageService)
    readonly baseUrl =
        'https://formsubmit.co/ajax/a86bcee5123221ea067fcb31e864a18f'

    ctaForm = signal<
        | Partial<{
              name: string | null
              email: string | null
              text: string | null
          }>
        | undefined
    >(undefined)

    email = rxResource({
        request: () => ({ ...this.ctaForm() }),
        loader: (params) => {
            if (params.previous.status === ResourceStatus.Idle) {
                return of({})
            }

            return this.httpClient
                .post<FormSuccess>(this.baseUrl, {
                    ...params.request,
                })
                .pipe(
                    tap({
                        next: () => this.showMessage('success', 'test', 'test'),
                        error: (e) =>
                            this.showMessage(
                                'error',
                                'Es gab ein problem 😢',
                                e
                            ),
                    })
                )
        },
    })

    loading = this.email.isLoading
    data = this.email.value
    error = this.email.error

    showMessage(
        severity: 'success' | 'error',
        summary: string,
        detail: string
    ) {
        this.messageService.add({ severity, summary, detail, sticky: true })
    }
}

interface FormSuccess {
    success: boolean
    message: string
}
