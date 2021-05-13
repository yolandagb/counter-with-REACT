import React from "react";
import ReactDOM from "react-dom";
import { PropTypes } from "prop-types";
import "../../styles/home.scss";

//create your first component
export function Home(props) {
	return (
		<div className="simple-counter-container">
			<div className="clock">
				<i className="far fa-clock"></i>
			</div>
			<div className="five">{props.digitFive % 10}</div>
			<div className="four">{props.digitFour % 10}</div>
			<div className="three">{props.digitTree % 10}</div>
			<div className="two">{props.digitTwo % 10}</div>
			<div className="one">{props.digitOne % 10}</div>
		</div>
	);
}
Home.propTypes = {
	digitFive: PropTypes.number,
	digitFour: PropTypes.number,
	digitTree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number
};

let counter = 0;
setInterval(function() {
	const five = Math.floor(counter / 10000);
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	console.log(five, four, three, two, one);

	counter++;
	ReactDOM.render(
		<Home
			digitOne={one}
			digitTwo={two}
			digitTree={three}
			digitFour={four}
			digitFive={five}
		/>,
		document.querySelector("#app")
	);
}, 1000);
