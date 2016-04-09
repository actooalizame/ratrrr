const BlazeChart = BlazeToReact('getChart');

Chart = React.createClass({
	
	render(){
		return(
			<BlazeChart context={this.props.rat._id} />
			)
	}

});