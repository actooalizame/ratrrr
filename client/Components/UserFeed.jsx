UserFeed = React.createClass({
	mixins: [ReactMeteorData],
	getMeteorData(){
	
		Meteor.subscribe('userRats');		
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
			<div id="wrapper">
				<header className="ui inverted clearing segment">
					<span className="ui right floated header"><LoginWrap /></span>
					<h2 className="ui grey inverted left floated header">DigIT</h2>
				</header>
				<div>
					{this.getRats()}
					
				</div>
			</div>
			)
	}
});