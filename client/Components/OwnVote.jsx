OwnVote = React.createClass({
	getMeteorData(){
		/*let ratId = this.props.rat._id,
				arroba = Meteor.user().services.twitter.screenName;
		Meteor.subscribe('ownReport',ratId,arroba);
		let report = Reports.findOne({ratId:ratId,username:arroba});
		console.log(report);*/
		return {
			username: this.props.rat 
		}
	},
	render(){
		return(
			<div>
				<i className="check icon"></i>{this.data.username}
			</div>
			)
	}
});