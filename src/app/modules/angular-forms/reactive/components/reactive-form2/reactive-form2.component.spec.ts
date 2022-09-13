import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveForm2Component } from './reactive-form2.component';

describe('ReactiveForm2Component', () => {
  let component: ReactiveForm2Component;
  let fixture: ComponentFixture<ReactiveForm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveForm2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
