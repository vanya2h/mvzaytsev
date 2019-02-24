import React from "react";

export const withPropsTransformer = transform => Enhanceable => {
	class ComponentWithTransformedProps extends React.PureComponent {
		render = () => <Enhanceable {...this.props} {...transform(this.props)} />;
	}

	return ComponentWithTransformedProps;
};

export default withPropsTransformer;
