UserFeed = React.createClass({
	mixins: [ReactMeteorData],
	getMeteorData(){
	
		Meteor.subscribe('userRats');
		Meteor.subscribe('emojis');
		
		return {
			rats: Rats.find({},{sort:{ratDate:-1}}).fetch()
		}
	},

	getRats(){
		return this.data.rats.map((rat) =>{
      return <SingleRat key={rat._id} rat={rat} />
    });
	},

	render(){
		return(
			<div>
				<h1>Your Own Personal Rat</h1>
				{this.getRats()}
				<LoginWrap />
			</div>
			)
	}
});