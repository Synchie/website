import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/components/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { heroArrowTopRightOnSquare } from '@ng-icons/heroicons/outline';
import { provideIcons } from '@ng-icons/core';
import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, AppRoutingModule, HttpClientModule),
    provideIcons({ heroArrowTopRightOnSquare }),
    provideAnimations(),
  ],
}).catch((err) => console.error(err));
