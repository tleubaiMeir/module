import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cardnum3Component } from './cardnum3.component';

describe('Cardnum3Component', () => {
  let component: Cardnum3Component;
  let fixture: ComponentFixture<Cardnum3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cardnum3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cardnum3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
