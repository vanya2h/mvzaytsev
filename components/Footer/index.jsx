import React from "react";
import Heading from "@components/Heading";
import Text from "@components/Text";
import styles from "./styles";

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.container}>
      <Heading size={4}>Сайт Зайцева Максима Викторовича</Heading>
      <Text className={styles.annotation}>
        Личный сайт школьного учителя. Любое копирование материалов только по
        разрешению правообладателя
      </Text>
    </div>
  </div>
);

export default Footer;
