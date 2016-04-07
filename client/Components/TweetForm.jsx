TweetForm = React.createClass({

	mixins: [ReactMeteorData],

	getMeteorData(){
		
		return {
			textSession: Session.get('text')
		}
	},

	insertRat(e){
		e.preventDefault();
		let rat = e.target.rat.value;
		Meteor.call('insertRat',rat);
	},

	getRat(){
		Meteor.call('getRat');
	},

	ratter(e){
		let text = jQuery('.tweet').val();
		Session.set('text', text);
	},

	renderIntent(e){
		let text = this.data.textSession,
				formated = text.replace(/ /g, '+');
		return 'https://twitter.com/intent/tweet?text='+formated;
	},

	render(){
		return(
			<div className="ui grid container">
			  <div className="six column centered row">
			  	<button className="ui red animated button" onClick={this.getRat}>
			  		<div className="visible content">Get Rat!</div>
						  <div className="hidden content">
						    <i className="right arrow icon"></i>
						  </div>
			  	</button>
				  <form className="ui form" onSubmit={this.insertRat}>
				  	<div className="field">
					    <label>Text</label>
					    <textarea name="rat" className="tweet" rows="4" onChange={this.ratter}></textarea>
					  </div>
					  <button className="ui blue basic button">Insert Rat!</button>
					  <a href={this.renderIntent()} className="ui orange basic button">jeje</a>
				  </form>
				  <LoginWrap/>
				  <a className="twitter-timeline"
					  data-widget-id="600720083413962752"
					  href="https://twitter.com/fabric"
					  data-screen-name="fabric">
					Tweets by @fabric
					</a>
			  </div>
			</div>
			)
	}
});