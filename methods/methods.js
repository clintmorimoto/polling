/**
 * Created by Clint on 11/16/2015.
 */

Meteor.methods({
  addVote: function(pollID, voteID) {
    // create the incrementing object so we can add to the corresponding vote
    var voteString = 'choices.' + voteID + '.votes';
    var action = {};
    action[voteString] = 1;

    // increment the number of votes for this choice
    Polls.update(
        { _id: pollID },
        { $inc: action }
    );
  },

  addPoll: function(newPoll) {
    // create the new poll
    Polls.insert(newPoll);
  }

  //addTask: function (text) {
  //  // Make sure the user is logged in before inserting a task
  //  if (! Meteor.userId()) {
  //    throw new Meteor.Error("not-authorized");
  //  }
  //
  //  Tasks.insert({
  //    text: text,
  //    createdAt: new Date(),
  //    owner: Meteor.userId(),
  //    username: Meteor.user().username
  //  });
  //},
  //deleteTask: function (taskId) {
  //  Tasks.remove(taskId);
  //},
  //setChecked: function (taskId, setChecked) {
  //  Tasks.update(taskId, { $set: { checked: setChecked} });
  //}
});