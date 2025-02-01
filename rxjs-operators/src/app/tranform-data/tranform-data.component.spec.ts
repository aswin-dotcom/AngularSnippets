import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranformDataComponent } from './tranform-data.component';

describe('TranformDataComponent', () => {
  let component: TranformDataComponent;
  let fixture: ComponentFixture<TranformDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TranformDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TranformDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
