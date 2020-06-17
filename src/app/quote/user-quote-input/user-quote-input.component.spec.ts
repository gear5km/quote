import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserQuoteInputComponent } from './user-quote-input.component';

describe('UserQuoteInputComponent', () => {
  let component: UserQuoteInputComponent;
  let fixture: ComponentFixture<UserQuoteInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserQuoteInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserQuoteInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
