/*
 * Create Data Models to define Objects and their Properties
 */

/****************************************************************************************************************
 * Classes are objects in angular that can be used across the component or applicaiton, depending on user needs
 * Export them for use, then import them wherever you would like their definitions to be used 
 ****************************************************************************************************************/

export class quoteVote {
  quote;
  authour;
  rating;
  voteCount;

  constructor(quote,authour,rating) {

    this.quote =  quote;
    this.authour = authour;
    this.rating = rating;
    this.voteCount = 1 ;

  }
}
