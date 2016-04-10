SingleRat = React.createClass({
	
	render(){
		return(
			<div className="ui stackable centered grid">

				<div className="four wide column">
					<RatReports rat={this.props.rat} />
			 	</div>

			  <div className="four wide column">
			  	<RatCard rat={this.props.rat}/>
			  </div>

			  <div className="four wide column">
			  	<Chart rat={this.props.rat}/>
			  </div>

			</div>
			)
	}
});