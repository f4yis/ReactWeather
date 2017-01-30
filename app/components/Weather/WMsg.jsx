var React = require('react');

var WMsg = React.createClass({
	render(){
		return(
			<h3>{this.props.temp}</h3>
			);
	}
});

module.exports = WMsg;