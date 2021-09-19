import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetRegisterComponent } from './planet-register.component';

describe('PlanetRegisterComponent', () => {
  let component: PlanetRegisterComponent;
  let fixture: ComponentFixture<PlanetRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
