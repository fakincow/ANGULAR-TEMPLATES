import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheelRotateComponent } from './wheel-rotate.component';

describe('WheelRotateComponent', () => {
  let component: WheelRotateComponent;
  let fixture: ComponentFixture<WheelRotateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WheelRotateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WheelRotateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
