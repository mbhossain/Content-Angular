import { TestBed } from '@angular/core/testing';

import { SubjectBehaviorSubjectService } from './subject-behavior-subject.service';

describe('SubjectBehaviorSubjectService', () => {
  let service: SubjectBehaviorSubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectBehaviorSubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
