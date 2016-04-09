SingleRat = React.createClass({

	mixins: [ReactMeteorData],

	getMeteorData(){
		return {
			userId: Meteor.userId(),
			voters: this.props.rat.ratedBy
		}
	},

	addDali(){
		let ratId = this.props.rat._id,
				userId = this.data.userId;
		Meteor.call('addDali', ratId);
		Meteor.call('addRatedBy',ratId,userId);
	},
	addYes(){
		let ratId = this.props.rat._id,
				userId = this.data.userId;
		Meteor.call('addYes', ratId);
		Meteor.call('addRatedBy',ratId,userId);
	},
	addWtf(){
		let ratId = this.props.rat._id,
				userId = this.data.userId;
		Meteor.call('addWtf', ratId);
		Meteor.call('addRatedBy',ratId,userId);
	},
	addWMeh(){
		let ratId = this.props.rat._id,
				userId = this.data.userId;
		Meteor.call('addWMeh', ratId);
		Meteor.call('addRatedBy',ratId,userId);
	},
	addLol(){
		let ratId = this.props.rat._id,
				userId = this.data.userId;
		Meteor.call('addLol', ratId);
		Meteor.call('addRatedBy',ratId,userId);
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
			<div className="ui segment">
				<div className="ui cards">
				  <div className="card">
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
				      <div className="card-buttons ui small icon buttons" style={hideVoted}>
				        <button className="ui violet basic button" onClick={this.addDali}>DALÍ</button>
							  <button className="ui teal basic button" onClick={this.addYes}>.YesSir.</button>
							  <button className="ui orange basic button" onClick={this.addLol}>LOL</button>
							  <button className="ui olive basic button" onClick={this.addWMeh}>- meh -</button>
							  <button className="ui red basic button" onClick={this.addWtf}>WTF?!</button>
				      </div>
				      <div style={showOwnVote}>
				      	<i className="check icon"></i>121 Votes
				      </div>
				      
				    </div>
				  </div>
				</div>
				<div className="ui right attached rail">
			    <Chart rat={this.props.rat}/>
			  </div>
			</div>
			)
	}
});