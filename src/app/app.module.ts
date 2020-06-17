import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserQuoteInputComponent } from './quote/user-quote-input/user-quote-input.component';
import { FormsModule } from '@angular/forms';
import { UserQuoteVoteComponent } from './quote/user-quote-vote/user-quote-vote.component';

@NgModule({
  declarations: [
    AppComponent,
    UserQuoteInputComponent,
    UserQuoteVoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
