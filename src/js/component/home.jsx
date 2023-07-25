import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [selectRedColor, setSelectRedColor] = useState(false);
	const [selectYellowColor, setSelectYellowColor] = useState(false);
	const [selectGreenColor, setSelectGreenColor] = useState(false);

	return (
			<div>
				<div className="traffic-top container">h</div>
				<div className="container">
					<div className="traffic-body container">
						<div className={"glow" + (selectRedColor ? "lightred" : "")} onClick={() =>{setSelectRedColor(true); setSelectGreenColor(false); setSelectYellowColor(false)}}></div>
						<div className={"glow" + (selectYellowColor ? "lightyellow" : "")} onClick={() =>{setSelectYellowColor(true); setSelectGreenColor(false); setSelectRedColor(false)}}></div>
						<div className={"glow" + (selectGreenColor ? "lightgreen" : "")} onClick={() =>{setSelectGreenColor(true); setSelectRedColor(false); setSelectYellowColor(false)}}></div>
					</div>
				</div>
			</div>

		
	);
};

export default Home;
