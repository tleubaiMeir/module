import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNum4Component } from './card-num4.component';

describe('CardNum4Component', () => {
  let component: CardNum4Component;
  let fixture: ComponentFixture<CardNum4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardNum4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardNum4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
