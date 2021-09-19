import { IPlanet } from './../../services/api/data/planet/Model/planet.interface';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.scss'],
})
export class PlanetDetailComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  planetData: IPlanet;
  editMode: boolean;

  ngOnInit(): void {
    if (!this.data.planet) {
      this.editModeToggle();
    }
    this.planetData = this.data.planet;
  }
  editModeToggle() {
    this.editMode = !this.editMode;
  }

  OnEditAction(event: any) {
    if (event?.planet) {
      this.planetData = event.planet;
    }
    this.editModeToggle();
  }
}
