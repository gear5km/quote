import { Component, OnInit, Input } from '@angular/core';
import { userQuote } from './userQuoteModel'
import { quoteVote } from '../user-quote-vote/quoteVoteModel';
@Component({
  selector: 'app-user-quote-input',
  templateUrl: './user-quote-input.component.html',
  styleUrls: ['./user-quote-input.component.css']
})
export class UserQuoteInputComponent {
  @Input() text1:''; text2:''; 

  text0="Hi testing";

  hello1 = quoteVote;

 
 // constructor(saying,sayer){
  //  this.saying=saying;
    //this.sayer=sayer;
  //}

  

    onSubmit() {
      alert("Function Running");
       hello1=new quoteVote [5] ('one', 'two' ,0);
    }

  }
  

  //userQuote0= new userQuote (input:saying, name:sayer)

  //userQuote1 = new quoteVote( this.saying , this.sayer, 0);

  

//}






