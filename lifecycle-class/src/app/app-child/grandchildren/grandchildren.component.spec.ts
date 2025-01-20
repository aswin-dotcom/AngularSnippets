import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandchildrenComponent } from './grandchildren.component';

describe('GrandchildrenComponent', () => {
  let component: GrandchildrenComponent;
  let fixture: ComponentFixture<GrandchildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GrandchildrenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrandchildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
