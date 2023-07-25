import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [selectColor, setSelectColor] = useState(false);
	
	return (
			<div>
				<div className="traffic-top container">h</div>
				<div className="container">
					<div className="traffic-body container">
						<div className={"lightred " + (selectColor === "red" ? "glow" : "")} onClick={() =>{setSelectColor("red");}}></div>
						<div className={"lightyellow " + (selectColor === "yellow" ? "glow" : "")} onClick={() =>{setSelectColor("yellow"); }}></div>
						<div className={"lightgreen " + (selectColor === "green" ? "glow" : "")} onClick={() =>{setSelectColor("green"); }}></div>
					</div>
				</div>
			</div>

		
	);
};

export default Home;
