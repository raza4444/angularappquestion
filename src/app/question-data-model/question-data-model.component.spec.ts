import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionDataModelComponent } from './question-data-model.component';

describe('QuestionDataModelComponent', () => {
  let component: QuestionDataModelComponent;
  let fixture: ComponentFixture<QuestionDataModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionDataModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionDataModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
