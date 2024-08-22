import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalPlaygroundComponent } from './signal-playground.component';

describe('SignalPlaygroundComponent', () => {
  let component: SignalPlaygroundComponent;
  let fixture: ComponentFixture<SignalPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalPlaygroundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
