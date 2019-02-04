import React from "react";
import cl from "classnames";
import PropTypes from "prop-types";

class Text extends React.PureComponent {
  render = () => {
    return React.createElement(as, this.props);
  };
}

Text.propTypes = {
  children: PropTypes.any.isRequired,
  as: PropTypes.any
};

Text.defaultProps = {
  as: "p"
};

export default Text;
