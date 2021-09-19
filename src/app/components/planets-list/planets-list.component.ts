import { IPlanet } from './../../services/api/data/planet/Model/planet.interface';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PlanetDetailComponent } from '../planet-detail/planet-detail.component';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss'],
})
export class PlanetsListComponent {
  @Input() planets: IPlanet[] = [];

  constructor(private dialog: MatDialog) {}

  seeDetails(planet: IPlanet, index: number) {
    const dialogRef = this.dialog.open(PlanetDetailComponent, {
      panelClass: 'custom-dialog-container',
      data: {
        planet,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (!result) {
        return;
      }
      this.planets[index] = result;
    });
  }
}
