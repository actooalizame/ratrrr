RatReports = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData(){
		let ratId = this.props.rat._id;
		Meteor.subscribe('ratReports',ratId);
		return {
			reports: Reports.find({ratId:ratId},{sort:{createdAt:-1}}).fetch(),
			userId: Meteor.userId()
		}
	},

	componentDidMount(){
		jQuery('.reports').perfectScrollbar();
	},

	getReports(){
		return this.data.reports.map((report) =>{
      return <SingleReport key={report._id} report={report} />
    });
	},

	render(){
		return(
	  	<div className="ui segment">
	      <div className="ui feed reports">
				  {this.getReports()}
				</div>
	    </div>
			)
	}
});

SingleReport = React.createClass({
	render(){
		let link = 'https://twitter.com/'+this.props.report.username;
		return(
			<div className="event">
		    <div className="label">
		      <img src={this.props.report.avatar} />
		    </div>
		    <div className="content">
		      <div className="summary">
		        <a className="user" href={link} target="_blank">
		          {this.props.report.username}
		        </a>: {this.props.report.msg}
		      </div>
		    </div>
		  </div>
			)
	}
});