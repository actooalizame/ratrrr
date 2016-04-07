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
			<div>
				<h1>Your Own Personal Rat</h1>
				<LoginWrap />
				{this.getRats()}
			</div>
			)
	}
});

SingleRat = React.createClass({
	render(){
		return(
			<div>
				

				<div className="ui cards">
				  <div className="card">
				    <div className="content">
				      <img className="right floated mini ui image" src={this.props.rat.userImg} />
				      <div className="header">
				        {this.props.rat.userName}
				      </div>
				      <div className="meta">
				        &#64;{this.props.rat.userScreenName}
				      </div>
				      <div className="description">
				        {this.props.rat.ratText}
				      </div>
				    </div>
				    <div className="extra content">
				      <div className="ui small icon buttons">
				        <button className="ui red basic tiny button">Genio</button>
							  <button className="ui blue basic button">Bue...</button>
							  <button className="ui green basic button">Afloja con elFa</button>
							  <button className="ui red basic button">Zzzzzz</button>
				      </div>
				    </div>
				  </div>
				</div>
			</div>
			)
	}
});