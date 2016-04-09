SingleRat = React.createClass({

	addDali(){
		let ratId = this.props.rat._id;
		Meteor.call('addDali', ratId);
		Session.set('currentId', ratId);
	},
	addYes(){
		let ratId = this.props.rat._id;
		Meteor.call('addYes', ratId);
		Session.set('currentId', ratId);
	},
	addWtf(){
		let ratId = this.props.rat._id;
		Meteor.call('addWtf', ratId);
		Session.set('currentId', ratId);
	},
	addWMeh(){
		let ratId = this.props.rat._id;
		Meteor.call('addWMeh', ratId);
		Session.set('currentId', ratId);
	},
	addLol(){
		let ratId = this.props.rat._id;
		Meteor.call('addLol', ratId);
		Session.set('currentId', ratId);
	},

	svgDali(){
		return parseInt((this.props.rat.dali)*18);
	},
	svgYessir(){
		return parseInt((this.props.rat.yessir)*18);
	},
	svgWtf(){
		return parseInt((this.props.rat.wtf)*18);
	},
	svgMeh(){
		return parseInt((this.props.rat.meh)*18);
	},
	svgLol(){
		return parseInt((this.props.rat.lol)*18);
	},

	render(){
		let link = 'https://twitter.com/Dig_it_Bitch_/status/'+this.props.rat.ratId,
				negMargin = {marginLeft:-1.6};
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
				    <div className="extra content ui">
				      <div className="card-buttons ui small icon buttons" style={negMargin}>
				        <button className="ui violet basic button" onClick={this.addDali}>DALÍ</button>
							  <button className="ui teal basic button" onClick={this.addYes}>.YesSir.</button>
							  <button className="ui orange basic button" onClick={this.addLol}>LOL</button>
							  <button className="ui olive basic button" onClick={this.addWMeh}>- meh -</button>
							  <button className="ui red basic button" onClick={this.addWtf}>WTF?!</button>
				      </div>
				    </div>
				  </div>
				</div>
				<div className="ui right attached rail">
			    <div className="ui segment">
			      <h5><strong><img src="/images/levitation.png" alt=""/>
			      	<svg xmlns="http://www.w3.org/2000/svg" height="8px" width="228px">
								<rect x="5" y="0" height="10" width={this.svgDali()} fill="#5829bb" stroke="#5829bb" strokeWidth="10"></rect>
 							</svg><span className="score">{this.props.rat.dali}</span></strong>
 						</h5>
			      <h5><strong><img src="/images/yes.png" alt=""/>
			      	<svg xmlns="http://www.w3.org/2000/svg" height="8px" width="227px">
								<rect x="5" y="0" height="10" width={this.svgYessir()} fill="#009c95" stroke="#009c95" strokeWidth="10"></rect>
 							</svg><span className="score">{this.props.rat.yessir}</span></strong>
 						</h5>
 						<h5><strong><img src="/images/lol.png" alt=""/>
			      	<svg xmlns="http://www.w3.org/2000/svg" height="8px" width="227px">
								<rect x="5" y="0" height="10" width={this.svgLol()} fill="#f26202" stroke="#f26202" strokeWidth="10"></rect>
 							</svg><span className="score">{this.props.rat.lol}</span></strong>
 						</h5>
			      <h5><strong><img src="/images/meh.png" alt=""/>
			      	<svg xmlns="http://www.w3.org/2000/svg" height="8px" width="227px">
								<rect x="5" y="0" height="10" width={this.svgMeh()} fill="#b5cc18" stroke="#b5cc18" strokeWidth="10"></rect>
 							</svg><span className="score">{this.props.rat.meh}</span></strong>
 						</h5>
			      <h5><strong><img src="/images/devil.png" alt=""/>
			      	<svg xmlns="http://www.w3.org/2000/svg" height="8px" width="227px">
								<rect x="5" y="0" height="10" width={this.svgWtf()} fill="#db2828" stroke="#db2828" strokeWidth="10"></rect>
 							</svg><span className="score">{this.props.rat.wtf}</span></strong>
 						</h5>
			    </div>
			  </div>
			</div>
			)
	}
});