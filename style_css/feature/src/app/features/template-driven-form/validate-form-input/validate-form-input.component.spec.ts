import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateFormInputComponent } from './validate-form-input.component';

describe('ValidateFormInputComponent', () => {
  let component: ValidateFormInputComponent;
  let fixture: ComponentFixture<ValidateFormInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidateFormInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidateFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
