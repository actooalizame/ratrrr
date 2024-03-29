RatCard = React.createClass({
	mixins: [ReactMeteorData],
	

	getMeteorData(){
		let userId = Meteor.userId()
				ratId = this.props.rat._id,
				userName = this.props.rat.userName;
		Meteor.subscribe('ownReport',ratId);
		let report = Reports.find({ratId:ratId,userId:userId}).fetch(),
				msg = report.map(function(a) {return a.msg;});
		return {
			userId: userId,
			voters: this.props.rat.ratedBy,
			ownVote: msg
		}
	},

	cardColor(){
		let msg = this.data.ownVote;
		if(msg == 'DALI, Salvador: Dalí') {return {boxShadow: "0px 0px 0px 1px #d4d4d5, 0px 2px 6px 0px #5829bb, 0px 1px 3px 0px #d4d4d5"}}
		if(msg == 'Yes Sir!'){return {boxShadow: "0px 0px 0px 1px #d4d4d5, 0px 2px 6px 0px #009c95, 0px 1px 3px 0px #d4d4d5"}}
		if(msg == 'LOL MThFcK, lol'){return {boxShadow: "0px 0px 0px 1px #d4d4d5, 0px 2px 6px 0px #f26202, 0px 1px 3px 0px #d4d4d5"}}
		if(msg == '...meh...'){return {boxShadow: "0px 0px 0px 1px #d4d4d5, 0px 2px 6px 0px #b5cc18, 0px 1px 3px 0px #d4d4d5"}}
		if(msg == 'WTFuckk?!'){return {boxShadow: "0px 0px 0px 1px #d4d4d5, 0px 2px 6px 0px #db2828, 0px 1px 3px 0px #d4d4d5"}}
	},

	addRat(elem,msg){
		let ratId = this.props.rat._id,
				userId = this.data.userId;
		Meteor.call('addRat',ratId,elem);
		Meteor.call('addRatedBy',ratId,userId);
		Meteor.call('addReport', ratId,userId,msg); 
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
				showOwnVote = this.showOwnVote(),
				cardColor = this.cardColor();
		return(
			<div className="ui cards">
			  <div className="card" id="ratCard" style={cardColor}>
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
				        <button className="ui violet basic button" onClick={()=>this.addRat('dali','DALI, Salvador: Dalí')}>DALÍ</button>
							  <button className="ui teal basic button" onClick={()=>this.addRat('yessir','Yes Sir!')}>.YesSir.</button>
							  <button className="ui orange basic button" onClick={()=>this.addRat('lol','LOL MThFcK, lol')}>LOL</button>
							  <button className="ui olive basic button" onClick={()=>this.addRat('meh','...meh...')}>- meh -</button>
							  <button className="ui red basic button" onClick={()=>this.addRat('wtf','WTFuckk?!')}>WTF?!</button>
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