import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSendComponent } from './card-send.component';

describe('CardSendComponent', () => {
  let component: CardSendComponent;
  let fixture: ComponentFixture<CardSendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
