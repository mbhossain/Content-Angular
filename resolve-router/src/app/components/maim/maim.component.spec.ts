import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaimComponent } from './maim.component';

describe('MaimComponent', () => {
  let component: MaimComponent;
  let fixture: ComponentFixture<MaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
