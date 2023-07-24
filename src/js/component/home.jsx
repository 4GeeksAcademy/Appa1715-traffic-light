import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [selectColor, SetSelectColor] = useState("");

	return (
			<div>
				<div className="traffic-top container">h</div>
				<div className="container">
					<div className="traffic-body container">
						<div onClick={() => SetSelectColor('red')} 
						className={'red' + (selectColor === 'red' ? "glow" : "")}>
						</div>
						<div onClick={() => SetSelectColor('yellow')} 
						className={(selectColor === 'yellow' ? "glow" : "")}>
						</div>
						<div onClick={() => SetSelectColor('green')} 
						className={'green' + (selectColor === 'green' ? "glow" : "")}>
						</div>
					</div>
				</div>
			</div>

		
	);
};

export default Home;
