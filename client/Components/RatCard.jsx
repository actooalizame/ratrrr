RatCard = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData(){
		let ratId = this.props.rat._id,
				arroba = Meteor.user().services.twitter.screenName;
		Meteor.subscribe('ownReport',ratId,arroba);
		let report = Reports.find({ratId:ratId,username:arroba}).fetch(),
				msg = report.map(function(a) {return a.msg;});
		return {
			userId: Meteor.userId(),
			voters: this.props.rat.ratedBy,
			ownVote: msg
		}
	},

	addDali(){
		let ratId = this.props.rat._id,
				userId = this.data.userId,
				msg = '* kicks the sky *';
		Meteor.call('addRatedBy',ratId,userId);
		Meteor.call('addDali', ratId);
		Meteor.call('addReport', ratId, msg);
	},
	addYes(){
		let ratId = this.props.rat._id,
				userId = this.data.userId,
				msg = '* paddling out *';
		Meteor.call('addRatedBy',ratId,userId);
		Meteor.call('addYes', ratId);
		Meteor.call('addReport', ratId, msg);		
	},
	addWtf(){
		let ratId = this.props.rat._id,
				userId = this.data.userId,
				msg = '* lying bitch *';
		Meteor.call('addRatedBy',ratId,userId);
		Meteor.call('addWtf', ratId);
		Meteor.call('addReport', ratId, msg);
	},
	addWMeh(){
		let ratId = this.props.rat._id,
				userId = this.data.userId,
				msg = '* LAUGHS TOO HARD AT EVERYTHING *';
		Meteor.call('addRatedBy',ratId,userId);
		Meteor.call('addWMeh', ratId);
		Meteor.call('addReport', ratId, msg);
	},
	addLol(){
		let ratId = this.props.rat._id,
				userId = this.data.userId,
				msg = '* hUGO mOZART *';
		Meteor.call('addRatedBy',ratId,userId);
		Meteor.call('addLol', ratId);
		Meteor.call('addReport', ratId, msg);
	},


	hideVoted(){
		let userId = this.data.userId,
				voters = this.data.voters,
				array = jQuery.inArray(userId,voters);
		if(array>=0){
			return {display:'none'};
		}
	},

	showOwnVote(){
		let userId = this.data.userId,
				voters = this.data.voters,
				array = jQuery.inArray(userId,voters);
		if(array>=0){
			return {display:'block'};
		}
		else{
			return {display:'none'};
		}
	},
	render(){
		let link = 'https://twitter.com/Dig_it_Bitch_/status/'+this.props.rat.ratId,
				hideVoted = this.hideVoted(),
				showOwnVote = this.showOwnVote();
		return(
			<div className="ui cards">
			  <div className="card" id="ratCard">
			    <div className="content">
			      <img className="right floated mini ui image" src={this.props.rat.userImg} />
			      <div className="header">
			        {this.props.rat.userName}
			      </div>
			      <div className="meta">
			        <a href={link} target="_blank">&#64;{this.props.rat.userScreenName}</a>
			      </div>
			      <div className="description">
			        <h5>{this.props.rat.ratText}</h5>
			      </div>
			    </div>
			    <div className="extra content ui segment">
			    {this.data.userId ?
			    	<div>
				    	 <div className="card-buttons ui small icon buttons" style={hideVoted}>
				        <button className="ui violet basic button" onClick={this.addDali}>DALÍ</button>
							  <button className="ui teal basic button" onClick={this.addYes}>.YesSir.</button>
							  <button className="ui orange basic button" onClick={this.addLol}>LOL</button>
							  <button className="ui olive basic button" onClick={this.addWMeh}>- meh -</button>
							  <button className="ui red basic button" onClick={this.addWtf}>WTF?!</button>
				      </div>
				      <div style={showOwnVote}>
				      	<i className="check icon"></i>{this.data.ownVote}
				      	
				      </div>
				    </div>
			      :
			      <LoginBox />
			    }
			     
			    </div>
			  </div>
			</div>
			)
	}
});