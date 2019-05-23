import { TestBed } from '@angular/core/testing';

import { QuestionModelService } from './question-model.service';

describe('QuestionModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestionModelService = TestBed.get(QuestionModelService);
    expect(service).toBeTruthy();
  });
});
