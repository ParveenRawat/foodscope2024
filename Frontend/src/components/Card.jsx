import React from "react";

const Card = ({ title, url, image }) => {
	return (
		<div className="h-70 w-96 flex flex-col justify-center">
			<div>
				<img src={image} />
			</div>
			<h2>{title}</h2>
		</div>
	);
};

export default Card;
