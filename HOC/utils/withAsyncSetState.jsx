import { getDisplayName } from "@utils/getDisplayName";
import { isClassComponent } from "@utils/isReactComponent";
import { isFunction } from "@utils/isFunction";

export const withAsyncSetState = Component => {
	if (isClassComponent(Component)) {
		class AsyncComponent extends Component {
			asyncSetState = a => {
				if (isFunction(a)) {
					return new Promise(resolve => {
						this.setState(a(this.state), (...args) => {
							resolve(args);
						});
					});
				}

				return new Promise(resolve => {
					this.setState(a, (...args) => {
						resolve(args);
					});
				});
			};
		}

		AsyncComponent.displayName = `AsyncComponent(${getDisplayName(Component)})`;
		return AsyncComponent;
	}
	return Component;
};

export default withAsyncSetState;
