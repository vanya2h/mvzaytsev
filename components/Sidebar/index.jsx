import React from "react";
import PropTypes from "prop-types";
import cl from "classnames";
import Link from "next/link";
import { connect } from "react-redux";
import { userLogout } from "@store/actions/user";
import * as userSelectors from "@store/selectors/user";
import { Menu, MenuItem } from "@components/Menu";
import Heading from "@components/Heading";
import Text from "@components/Text";
import styles from "./styles";

class Sidebar extends React.PureComponent {
  render = () => {
    const { isAuthed, isAdmin, logout } = this.props;

    return (
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <Heading size={4}>
            <Link href="/">
              <a>Максим Зайцев</a>
            </Link>
          </Heading>
          <Text className={cl("m0", styles.description)}>
            Персональный сайт
          </Text>
          <div className="mt3">
            <Menu className={styles.menu}>
              <MenuItem link="/">Главная</MenuItem>
              <MenuItem link="/blog">Мой блог</MenuItem>
              <MenuItem link="/kostroma">Кострома - душа России</MenuItem>
              <MenuItem
                sub={
                  <React.Fragment>
                    <MenuItem link="/parents/law">Законодательство</MenuItem>
                    <MenuItem link="/parents/health">Здоровье ребенка</MenuItem>
                    <MenuItem link="/parents/psychologyst">
                      Советы психологов
                    </MenuItem>
                  </React.Fragment>
                }
              >
                Родителям
              </MenuItem>
              <MenuItem
                sub={
                  <React.Fragment>
                    <MenuItem link="/teacher/health">Здоровье учителя</MenuItem>
                    <MenuItem link="/teacher/links">Полезные ссылки</MenuItem>
                    <MenuItem link="/teacher/class">Классные часы</MenuItem>
                    <MenuItem link="/lessons">Планы уроков</MenuItem>
                    <MenuItem link="/blog/5c7c1ee5ed95d671c4b29536">
                      Общественная экспертиза
                    </MenuItem>
                  </React.Fragment>
                }
              >
                Учителям
              </MenuItem>
              <MenuItem
                sub={
                  <React.Fragment>
                    <MenuItem link="/students/gia">Подготовка к ГИА</MenuItem>
                    <MenuItem link="/students/think">Думай, решай</MenuItem>

                    <MenuItem link="/students/lessons">
                      Фрагменты уроков
                    </MenuItem>
                    <MenuItem link="/students/links">Полезные ссылки</MenuItem>
                    <MenuItem link="/students/phone">Телефон доверия</MenuItem>
                    <MenuItem link="/students/remember">
                      Памятки для учащихся
                    </MenuItem>
                    <MenuItem link="/students/football">
                      Футбольная секция
                    </MenuItem>
                  </React.Fragment>
                }
              >
                Ученикам
              </MenuItem>
              <MenuItem link="/diary">Эл. дневник</MenuItem>

              <MenuItem link="/work">Портфолио</MenuItem>
              <MenuItem link="/teacherofyear">Учитель года 2019</MenuItem>
              <MenuItem link="/poll">Пройти опрос</MenuItem>
            </Menu>
          </div>
        </div>
        <div className={styles.bottom}>
          <Menu className={styles.menu}>
            {!isAuthed ? (
              <MenuItem link="/auth">Войти</MenuItem>
            ) : isAdmin ? (
              <MenuItem link="/admin">Админка</MenuItem>
            ) : (
              <MenuItem onClick={logout} clickable>
                Выйти
              </MenuItem>
            )}
            <MenuItem href="https://vk.com/id238880585">Я в vk.com</MenuItem>
          </Menu>
        </div>
      </div>
    );
  };
}

Sidebar.propTypes = {
  isAuthed: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  logout: PropTypes.bool.isRequired
};

export default connect(
  store => ({
    isAuthed: userSelectors.selectIsAuthed(store),
    isAdmin: userSelectors.selectUserField(store, {
      field: "isAdmin"
    })
  }),
  dispatch => ({
    logout: () => dispatch(userLogout())
  })
)(Sidebar);
