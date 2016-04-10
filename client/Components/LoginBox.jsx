LoginBox = React.createClass({
	componentDidMount(){
		jQuery('.blurring').dimmer('show',{closable: true});
		/*Tracker.autorun(function () {  
		  if (!Meteor.userId()) {
		    jQuery('.blurring').dimmer('show');
		  }
		});*/
	},

	render(){
		let icon = {fontSize:24};
		return(
			<div className="ui blurring segment">
			  <div className="ui inverted active dimmer">
			  	<div className="content">
			      <div className="center">
			        <p className="ui icon header">
			          <i className="unlock icon" style={icon}></i>
			          SignInToVote!
			        </p>
			      </div>
			    </div>
			  </div>
			  <div className="card-buttons-unlogged ui tiny icon buttons">
	        <button className="ui violet disabled button">DALÍ</button>
				  <button className="ui teal disabled button" >.YesSir.</button>
				  <button className="ui orange disabled button">LOL</button>
				  <button className="ui olive disabled button">- meh -</button>
				  <button className="ui red disabled button">WTF?!</button>
	      </div>
			</div>
			)
	}
});