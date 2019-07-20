import React from "react";
import Text from "@components/Text";
import Heading from "@components/Heading";
import { Menu, MenuItem } from "@components/Menu";
import styles from "./styles.less";

const Footer = () => {
  return (
    <div className={styles.root}>
      <Heading size={3}>Полезные ссылки на информационные ресурсы</Heading>
      <Text>Образование в РФ, в Костромской области и в Костроме</Text>
      <Menu horizontal>
        <MenuItem href="https://edu.gov.ru/">
          Министерство просвещения РФ
        </MenuItem>
        <MenuItem href="https://minobrnauki.gov.ru/">
          Министерство науки и высшего образования РФ
        </MenuItem>
        <MenuItem
          href="http://www.eduportal44.ru/deko/SitePages/%D0%9E%D1%84%D0%B8%D1%86%D0
%B8%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9%20%D1%81%D0
%B0%D0%B9%D1%82.aspx"
        >
          Департамент образования и науки Костромской области
        </MenuItem>
        <MenuItem href="http://www.eduportal44.ru/koiro/default.aspx">
          Костромской областной институт развития образования
        </MenuItem>
        <MenuItem href="http://www.eduportal44.ru/Kostroma_EDU/default.aspx">
          Комитет образования, культуры и работы с молодежью
        </MenuItem>
        <MenuItem href="http://www.eduportal44.ru/Kostroma_EDU/gcoko/default.aspx">
          Городской центр обеспечения качества образования
        </MenuItem>
        <MenuItem href="http://www.eduportal44.ru/Kostroma_EDU/upolnomochenniy/_layouts/15/start.aspx#">
          Уполномоченный по правам ребенка
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Footer;
