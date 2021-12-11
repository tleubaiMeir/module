import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondCardsComponent } from './second-cards.component';

describe('SecondCardsComponent', () => {
  let component: SecondCardsComponent;
  let fixture: ComponentFixture<SecondCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
