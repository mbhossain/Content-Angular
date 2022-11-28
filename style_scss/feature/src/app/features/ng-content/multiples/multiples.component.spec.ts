import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplesComponent } from './multiples.component';

describe('MultiplesComponent', () => {
  let component: MultiplesComponent;
  let fixture: ComponentFixture<MultiplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
