const BlazeChart = BlazeToReact('getChart');

HighChart = React.createClass({
	
	render(){
		return(
			<BlazeChart context={this.props.rat._id} />
			)
	}

});