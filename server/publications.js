Meteor.publish('userRats', function(){
	/*var user = Meteor.users.findOne({_id:this.userId}),
			twitterId = user.services.twitter.id;*/
	return Rats.find({userId:'320046092'},{sort:{ratDate:-1},limit:11});
});

Meteor.publish('emojis', function() {
  // Here you can choose to publish a subset of all emojis
  // if you'd like to.
  return Emojis.find();
});