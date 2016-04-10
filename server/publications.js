Meteor.publish('userRats', function(){
	/*var user = Meteor.users.findOne({_id:this.userId}),
			twitterId = user.services.twitter.id;*/
	return Rats.find({userId:'320046092'},{sort:{ratDate:-1},limit:11});
});

Meteor.publish('ratReports', function(ratId){
	/*var user = Meteor.users.findOne({_id:this.userId}),
			twitterId = user.services.twitter.id;*/
	return Reports.find({ratId:ratId},{sort:{createdAt:-1},limit:7});
});

Meteor.publish('ownReport', function(ratId,arroba){
	/*var user = Meteor.users.findOne({_id:this.userId}),
			username = user.services.twitter.screenName;*/
	return Reports.find({ratId:ratId,username:arroba},{limit:1});
});

Meteor.publish('userArroba', function() {
    return Meteor.users.find({}, {fields: {'services.twitter.screenName': 1}});
});


