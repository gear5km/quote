import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserQuoteVoteComponent } from './user-quote-vote.component';

describe('UserQuoteVoteComponent', () => {
  let component: UserQuoteVoteComponent;
  let fixture: ComponentFixture<UserQuoteVoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserQuoteVoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserQuoteVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
