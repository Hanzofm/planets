import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {
  @Output() option = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  newPlanet() {
    this.option.emit({ option: 'newPlanet' });
  }

  refresh() {
    this.option.emit({ option: 'refresh' });
  }
}
