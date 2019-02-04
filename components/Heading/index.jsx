import React from "react";
import cl from "classnames";
import PropTypes from "prop-types";
import styles from "./styles";

class Heading extends React.PureComponent {
  getTag = () => {
    const { size, as } = this.props;

    if (as) {
      return as;
    }

    if (size) {
      return `h${size}`;
    }
  };

  render = () => {
    const tag = this.getTag();
    const { className, ...rest } = this.props;

    return React.createElement(tag, {
      className: cl(
        { [className]: !!className },
        { [styles.h1]: size === 1 },
        { [styles.h2]: size === 2 },
        { [styles.h3]: size === 3 },
        { [styles.h4]: size === 4 },
        { [styles.h5]: size === 5 },
        { [styles.h6]: size === 6 }
      ),
      ...rest
    });
  };
}

Heading.propTypes = {
  children: PropTypes.any.isRequired,
  as: PropTypes.any,
  className: PropTypes.string,
  size: PropTypes.number
};

Heading.defaultProps = {
  size: 1,
  className: null
};

export default Heading;
