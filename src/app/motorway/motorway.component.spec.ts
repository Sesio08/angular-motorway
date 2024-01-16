import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorwayComponent } from './motorway.component';

describe('MotorwayComponent', () => {
  let component: MotorwayComponent;
  let fixture: ComponentFixture<MotorwayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MotorwayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MotorwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
