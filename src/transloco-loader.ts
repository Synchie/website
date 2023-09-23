import { inject, Injectable, isDevMode } from '@angular/core';
import { Translation, TranslocoLoader } from '@ngneat/transloco';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  private http = inject(HttpClient);

  getTranslation(lang: string) {
    let translationPath = !isDevMode()
      ? `wesbite/assets/i18n/${lang}.json`
      : `/assets/i18n/${lang}.json`;

    return this.http.get<Translation>(translationPath);
  }
}
