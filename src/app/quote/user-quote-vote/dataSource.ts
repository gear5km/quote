/************************************************************
 *  Creating a list of Quotes from the Constructor Template
 *
 ***********************************************************/

/*************************************************
 * Import the Model with the constructor details
 *************************************************/

import { quoteVote } from './quoteVoteModel';

/*****************************************************************************************************
 * Create an array of Quotes with properties specified in the constructor for export to the component
 *****************************************************************************************************/

export const quotes: quoteVote[] = [
  { quote:"Victory belongs to the most perservering", authour:"Napoleon Bonaparte", rating:5},
  { quote: "History is written by the Victor", authour: "Winston Churchill", rating: 5 },
  { quote: "A single death is a tragedy, a million deaths is a statistic", authour: "Joseph Stalin", rating: 5 },
  { quote: "Give a man a fish, feed him for a day, teach a man to fish, feed him for a lifetime", authour: "unknown", rating: 5 }
  
]
  
/*
 * Access these arrays in the View by specifying their array number (0-n) and constructor attribute (.authour)
 * e.g {{quoteVote[0].author}}
 */
