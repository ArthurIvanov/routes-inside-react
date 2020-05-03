import React from "react";
import PropTypes from "prop-types";
import "./content.styles.scss";

const Content = ({ color }) => {
	return (
		<div className="content" style={{ backgroundColor: `${color}` }}></div>
	);
};

Content.propTypes = {
	color: PropTypes.string,
};

Content.defaultProps = {
	color: "#e9e9e9",
};

export default Content;
