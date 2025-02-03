import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsVsObservablesComponent } from './subjects-vs-observables.component';

describe('SubjectsVsObservablesComponent', () => {
  let component: SubjectsVsObservablesComponent;
  let fixture: ComponentFixture<SubjectsVsObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubjectsVsObservablesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubjectsVsObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
