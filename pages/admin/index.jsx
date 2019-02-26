import React from "react";
// import Text from "@components/Text";
// import Heading from "@components/Heading";
import SystemOverview from "@components/SystemOverview";
import styles from "./styles";

const AdminPage = () => (
	<div className={styles.authPage}>
		<div className="mt2">
			<SystemOverview />
		</div>
	</div>
);

export default AdminPage;
