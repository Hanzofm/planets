import { PlanetService } from './services/api/data/planet/planet/planet.service';

import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { PlanetsListComponent } from './components/planets-list/planets-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { PlanetDetailComponent } from './components/planet-detail/planet-detail.component';
import { PlanetRegisterComponent } from './components/planet-register/planet-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    PlanetsListComponent,
    PlanetDetailComponent,
    PlanetRegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatRippleModule,
    MatDialogModule,
    MatInputModule,
    MatProgressSpinnerModule,
  ],
  providers: [PlanetService, { provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
