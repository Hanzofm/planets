import { environment } from './../environments/environment';
import { IPlanet } from './services/api/data/planet/Model/planet.interface';
import { PlanetService } from './services/api/data/planet/planet/planet.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PlanetDetailComponent } from './components/planet-detail/planet-detail.component';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Planets';
  planets: IPlanet[] = [];
  loadingData: boolean;

  constructor(
    private planetsService: PlanetService,
    private dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.getPlanetsData();
  }

  getPlanetsData() {
    this.loadingData = true;
    const planets$ = this.planetsService.getPlanets(100);

    planets$
      .pipe(
        finalize(() => {
          this.loadingData = false;
        })
      )
      .subscribe((response: IPlanet[]) => {
        this.planets = response.map((planet) => {
          if (planet.media_type === 'video') {
            planet.url = environment.default_planet_image;
            planet.hdurl = environment.default_planet_image;
          }
          return planet;
        });
      });
  }

  onOptionSelected(event: any) {
    if (event?.option === 'refresh') {
      this.getPlanetsData();
    } else {
      this.newPlanet();
    }
  }

  newPlanet() {
    const dialogRef = this.dialog.open(PlanetDetailComponent, {
      panelClass: 'custom-dialog-container',
      data: {
        planet: null,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (!result) {
        return;
      }
      this.planets.unshift(result);
    });
  }
}
