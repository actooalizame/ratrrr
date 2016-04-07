AppLayout = React.createClass({
	render(){
		return(
			<div className="app-wrapper">
					
					<div className="ui grid container">
						{this.props.content}
					</div>
      		
			</div>
			)
	}
});