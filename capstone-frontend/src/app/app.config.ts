import { ApplicationConfig } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
// Angular Material Components
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient()
    // Add any additional providers here
  ]
};

// Bootstrap the application using the standalone AppComponent
bootstrapApplication(AppComponent, {
  providers: [
    appConfig.providers,
    FormsModule, // Include FormsModule here
    HttpClientModule, // Include HttpClientModule here
    BrowserAnimationsModule, // Include BrowserAnimationsModule here
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule
  ]
});