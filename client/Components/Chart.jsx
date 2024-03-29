Chart = React.createClass({
	
	svgDali(){
		let dali = this.props.rat.dali;
		if(dali!==undefined){ return Number((dali)*18); }else{return 0;}
	},
	svgYessir(){
		let yessir = this.props.rat.yessir;
		if(yessir!==undefined){ return Number((yessir)*18); }else{return 0;}
	},
	svgWtf(){
		let wtf = this.props.rat.wtf;
		if(wtf!==undefined){ return Number((wtf)*18); }else{return 0;}
	},
	svgMeh(){
		let meh = this.props.rat.meh;
		if(meh!==undefined){ return Number((meh)*18); }else{return 0;}
	},
	svgLol(){
		let lol = this.props.rat.lol;
		if(lol!==undefined){ return Number((lol)*18); }else{return 0;}
	},
	changeDali(){
		let dali = this.props.rat.dali;
		if(dali!==undefined){return {transform: "scale(1.3)",WebkitFilter:"initial",filter:"initial"}}
	},
	changeYes(){
		let yessir = this.props.rat.yessir;
		if(yessir!==undefined){return {transform: "scale(1.2)",WebkitFilter:"initial",filter:"initial"}}
	},
	changeLol(){
		let lol = this.props.rat.lol;
		if(lol!==undefined){return {transform: "scale(1.2)",WebkitFilter:"initial",filter:"initial"}}
	},
	changeMeh(){
		let meh = this.props.rat.meh;
		if(meh!==undefined){return {transform: "scale(1.3)",WebkitFilter:"initial",filter:"initial"}}
	},
	changeWtf(){
		let wtf = this.props.rat.wtf;
		if(wtf!==undefined){return {transform: "scale(1.3)",WebkitFilter:"initial",filter:"initial"}}
	},
	render(){
		return(
			<div className="ui segment chart">
				<div className="ui feed">
		      <h5><strong><img src="/images/dali.svg" style={this.changeDali()} alt=""/>
		      	<svg xmlns="http://www.w3.org/2000/svg" height="8px" width="228px">
							<rect x="5" y="0" height="10" width={this.svgDali()} fill="#5829bb" stroke="#5829bb" strokeWidth="10"></rect>
							</svg><span className="score">{this.props.rat.dali}</span></strong>
						</h5>
		      <h5><strong><img src="/images/hoyo.svg" style={this.changeYes()} alt=""/>
		      	<svg xmlns="http://www.w3.org/2000/svg" height="8px" width="227px">
							<rect x="5" y="0" height="10" width={this.svgYessir()} fill="#009c95" stroke="#009c95" strokeWidth="10"></rect>
							</svg><span className="score">{this.props.rat.yessir}</span></strong>
						</h5>
						<h5><strong><img src="/images/lol.svg" style={this.changeLol()} alt=""/>
		      	<svg xmlns="http://www.w3.org/2000/svg" height="8px" width="227px">
							<rect x="5" y="0" height="10" width={this.svgLol()} fill="#f26202" stroke="#f26202" strokeWidth="10"></rect>
							</svg><span className="score">{this.props.rat.lol}</span></strong>
						</h5>
		      <h5><strong><img src="/images/huevo.svg" style={this.changeMeh()} alt=""/>
		      	<svg xmlns="http://www.w3.org/2000/svg" height="8px" width="227px">
							<rect x="5" y="0" height="10" width={this.svgMeh()} fill="#b5cc18" stroke="#b5cc18" strokeWidth="10"></rect>
							</svg><span className="score">{this.props.rat.meh}</span></strong>
						</h5>
		      <h5><strong><img src="/images/wtf.svg" style={this.changeWtf()} alt=""/>
		      	<svg xmlns="http://www.w3.org/2000/svg" height="8px" width="227px">
							<rect x="5" y="0" height="10" width={this.svgWtf()} fill="#db2828" stroke="#db2828" strokeWidth="10"></rect>
							</svg><span className="score">{this.props.rat.wtf}</span></strong>
						</h5>
				</div>
	    </div>
			)
	}
});