
Meteor.methods({
	'insertRat': function(rat){
		var T = new Twit({
	    consumer_key:         'KCVXdPs0h7Sa4QGjgAprxyYvo',
	    consumer_secret:      'wSBuNzIJaaHgDH7uilHUGFda7hJ8jmAhE8Xc3BGkMdfu2xUnPH',
	    access_token:         '2791089516-0T8sfHRZseXdyTR1DWxNKDkHH9fUjSR3pdHgwI2',
	    access_token_secret:  '9LWjc8miiwl8Cd0Mhsl4A6yMSGOIUUtoBvb29Tw3Mf2fo'
		});
		T.post('statuses/update', { status: rat }, function(err, data, response) {
	  	console.log(data)
		});
	},
	'getRat': function(){
		var T = new Twit({
	    consumer_key:         'KCVXdPs0h7Sa4QGjgAprxyYvo',
	    consumer_secret:      'wSBuNzIJaaHgDH7uilHUGFda7hJ8jmAhE8Xc3BGkMdfu2xUnPH',
	    access_token:         '2791089516-0T8sfHRZseXdyTR1DWxNKDkHH9fUjSR3pdHgwI2',
	    access_token_secret:  '9LWjc8miiwl8Cd0Mhsl4A6yMSGOIUUtoBvb29Tw3Mf2fo'
		});
		T.get('statuses/user_timeline', { screen_name: 'Dig_it_Bitch_' ,count: 2, include_rts: false, exclude_replies: true }, function(err, data, response) {
		  console.log(data[0].text);
		})
	},
	'streamRat': function(data){
		Rats.insert({
			userId: data.userId,
			userName: data.userName,
			userScreenName: data.userScreenName,
			userImg: data.userImg,
			ratId: data.ratId,
			ratText: data.ratText,
			ratDate: data.ratDate,
			ratedBy: []
		});
	},
	'addDali': function(ratId){
		Rats.update(
			{ _id: ratId },
			{$inc: {dali: 1}}
		);
	},
	addYes: function(ratId){
		Rats.update(
			{ _id: ratId },
			{$inc: {yessir: 1}}
		);
	},
	addWtf: function(ratId){
		Rats.update(
			{ _id: ratId },
			{$inc: {wtf: 1}}
		);
	},
	addWMeh: function(ratId){
		Rats.update(
			{ _id: ratId },
			{$inc: {meh: 1}}
		);
	},
	addLol: function(ratId){
		Rats.update(
			{ _id: ratId },
			{$inc: {lol: 1}}
		);
	},
	'addRatedBy': function(ratId, userId){
		Rats.update(
			{	_id: ratId },
			{$push: {ratedBy: userId} }
		);
	},

});

