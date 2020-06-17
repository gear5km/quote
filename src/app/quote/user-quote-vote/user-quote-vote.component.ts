import { Component, OnInit } from '@angular/core';
import { quoteVote } from './quoteVoteModel';
import { quotes } from './dataSource';
@Component({
  selector: 'app-user-quote-vote',
  templateUrl: './user-quote-vote.component.html',
  styleUrls: ['./user-quote-vote.component.css']
})
export class UserQuoteVoteComponent {

  quote1 = quotes;

  Like() {
    alert("Clicked");
    quotes[0].rating = 10;
  }

  Dislike() {
    alert("Clicked");
    quotes[0].rating = 0;
  }

}
