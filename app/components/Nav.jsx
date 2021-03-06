var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
	render(){
		return(
			<div>
				<h2>Nav Components</h2>
				<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
				<Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
				<Link to="/Example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Example</Link>
			</div>
			);
	}
});

module.exports = Nav;