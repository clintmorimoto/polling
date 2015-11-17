/**
 * Created by Clint on 11/14/2015.
 */

// The reason we define this in a collections/ folder and not in the client/ or the server/ folder is that this
// collection will be needed on both the server (creating sample polls) and client (creating new polls).
Polls = new Mongo.Collection('polls');

