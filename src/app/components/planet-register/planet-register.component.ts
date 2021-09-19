import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IPlanet } from 'src/app/services/api/data/planet/Model/planet.interface';

@Component({
  selector: 'app-planet-register',
  templateUrl: './planet-register.component.html',
  styleUrls: ['./planet-register.component.scss'],
})
export class PlanetRegisterComponent implements OnInit {
  @Input() planet: IPlanet;
  @Output() action = new EventEmitter();

  planetData: IPlanet;
  register: boolean;

  form = new FormGroup({
    date: new FormControl('', Validators.required),
    copyright: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    hdurl: new FormControl('', Validators.required),
  });
  constructor() {}

  ngOnInit(): void {
    if (!this.planet) {
      this.register = true;
    }
    this.planetData = { ...this.planet };
  }

  save() {
    const result = { ...this.planetData, ...{ url: this.planetData.hdurl } };
    this.action.emit({
      planet: this.planetData,
    });
  }

  get newPlanet() {
    return { ...this.planetData, ...{ url: this.planetData.hdurl } };
  }

  cancel() {
    this.action.emit();
  }
}
