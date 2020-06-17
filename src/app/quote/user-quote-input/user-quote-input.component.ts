import { Component, OnInit } from '@angular/core';
import { quoteVote } from '../user-quote-vote/quoteVoteModel';
@Component({
  selector: 'app-user-quote-input',
  templateUrl: './user-quote-input.component.html',
  styleUrls: ['./user-quote-input.component.css']
})
export class UserQuoteInputComponent  {
   userQuoteInput = '';
   userQuoteName = '';

  userQuote1 = new quoteVote( 'userQuoteInput',  "Napoleon Bonaparte",  5 )
  }


