var React = require('react');

var WForm = React.createClass({
	onWeatherSubmit(e){
		e.preventDefault();

		var loc = this.refs.location.value;

		if(loc.length > 0){
			this.refs.location.value = '';
			this.props.onSearch(loc);
		}
	},
	render(){
		return(
			<form onSubmit={this.onWeatherSubmit}>
				<div>
					<input type="text" ref="location" placeholder="Location"/>
				</div>
				<div>
					<button>Submit</button>
				</div>
			</form>
			);
	}
});

module.exports = WForm;