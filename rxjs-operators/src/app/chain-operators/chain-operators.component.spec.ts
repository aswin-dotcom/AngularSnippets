import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChainOperatorsComponent } from './chain-operators.component';

describe('ChainOperatorsComponent', () => {
  let component: ChainOperatorsComponent;
  let fixture: ComponentFixture<ChainOperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChainOperatorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChainOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
