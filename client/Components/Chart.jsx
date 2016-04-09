Chart = React.createClass({
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
		return(
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
			)
	}
});