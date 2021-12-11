import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNum5Component } from './card-num5.component';

describe('CardNum5Component', () => {
  let component: CardNum5Component;
  let fixture: ComponentFixture<CardNum5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardNum5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardNum5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
