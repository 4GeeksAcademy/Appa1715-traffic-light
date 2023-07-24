import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [selectColor, SetSelectColor] = useState("green");

	return (
			<div>
				<div className="traffic-top container">h</div>
				<div className="container">
					<div className="traffic-body container">
						<div onClick={() => SetSelectColor('red')} 
						className={'red' + (selectColor === 'red' ? "redglow" : "")}>
						</div>
						<div onClick={() => SetSelectColor = ('yellow')} 
						className={'yellow' + (selectColor === 'yellow' ? "yellowglow" : "")}>
						</div>
						<div onClick={() => SetSelectColor = ('green')} 
						className={'green' + (selectColor === 'green' ? "greenglow" : "")}>
						</div>
					</div>
				</div>
			</div>

		
	);
};

export default Home;
