var React = require('react');

var WForm = require('./WForm');
var WMsg = require('./WMsg');
var weatherMap = require('../../openWeatherApi');

var Weather = React.createClass({
	getInitialState(){
		return {
			isLoading: false
		}
	},
	handleSearch(loc){
		var that = this;
		this.setState({isLoading: true});
		weatherMap.getTemp(loc).then(temp => {
			that.setState({
				temp: temp,
				isLoading: false
			});
		}, err => {
			alert(err);
			that.setState({
				isLoading: false
			});
		});
		
	},
	render(){
		var renderMsg = () => {
			if(this.state.isLoading){
				return <h2>Feching Data</h2>
			}else{
				return <WMsg temp={this.state.temp}/>
			}
		}
		return(
			<div>
				<h2>Get Weater</h2>
				<WForm onSearch={this.handleSearch}/>
				{renderMsg()}
			</div>
			);
	}
});

module.exports = Weather;