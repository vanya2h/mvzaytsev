import React from "react";
import classnames from "classnames";
import Head from "next/head";
import Attachment from "@components/Attachment";
import Heading from "@components/Heading";
import Text from "@components/Text";
import { resolveAttachmentUrl } from "@utils/resolveAttachmentUrl";
import styles from "./styles";

const LessonsPage = () => (
  <div className={styles.authPage}>
    <Head>
      <title>Планы уроков - Максим зайцев</title>
    </Head>
    <div className="mb3">
      <Heading size={3}>5 класс</Heading>
    </div>
    <div className={classnames(styles.list, "mt3")}>
      <Attachment
        type="zip"
        title="Деление десятичных чисел на натуральное число"
        url={resolveAttachmentUrl(
          "62f4862352ea079da2f854ee469bfe2f1549459228720.zip"
        )}
      />
      <Attachment
        type="zip"
        title="Понятие десятичной дроби"
        url={resolveAttachmentUrl(
          "153a3d10c92d5c5906049b6f02c2ab1e1549459259309.zip"
        )}
      />
      <Attachment
        type="zip"
        title="Числовые и буквенные выражения"
        url={resolveAttachmentUrl(
          "095001adef79c3cd6d94e761f3aeb4c31549459283064.zip"
        )}
      />
    </div>
    <div className="mt3">
      <Heading size={3}>6 класс</Heading>
    </div>
    <div className={classnames(styles.list, "mt3")}>
      <Attachment
        type="zip"
        title="Деление десятичных чисел на натуральное число"
        url={resolveAttachmentUrl(
          "a1a8783c2a657bdf888ffb047b3f95931563621851594.docx"
        )}
      />
    </div>
    <div className="mt3">
      <Heading size={3}>7 класс</Heading>
    </div>
    <div className={classnames(styles.list, "mt3")}>
      <Attachment
        type="docx"
        title="Одночлены"
        url={resolveAttachmentUrl(
          "fbec242d801f0c9a6462e3937a117fb21563621945829.docx"
        )}
      />
    </div>
    <div className="mt3">
      <Heading size={3}>8 класс</Heading>
    </div>
    <div className={classnames(styles.list, "mt3")}>
      <Attachment
        type="doc"
        title="Квадратные уравнения"
        url={resolveAttachmentUrl(
          "72b23cb766ccae5ef379527f10d3eff11563621977417.doc"
        )}
      />
    </div>
    <div className="mt3">
      <Heading size={3}>9 класс</Heading>
    </div>
    <div className={classnames(styles.list, "mt3")}>
      <Attachment
        type="zip"
        title="Статистика - дизайн информации"
        url={resolveAttachmentUrl(
          "6503cf45cddba08f38d3f0dd0e4072d71549459336444.zip"
        )}
      />
      <Attachment
        type="zip"
        title="Уравнения с двумя переменными"
        url={resolveAttachmentUrl(
          "0ea00e238ce9210d6a1e38f33e04c1b51549459358898.zip"
        )}
      />
    </div>
    <div className="mt3">
      <Text>
        После всех материалов добавить следующий текст: «Если вам понравились
        мои материалы, если у вас есть предложения по доработке каких-либо
        уроков, если вас интересует урок по теме, которую вы не нашли на сайте,
        то напишите мне на электронный адрес{" "}
        <a href="mailto:zaytsev-m@mail.ru">mailto:zaytsev-m@mail.ru</a>. Мне
        важно ваше мнение!»
      </Text>
    </div>
  </div>
);

LessonsPage.hero = {
  title: "Планы уроков",
  description:
    "Здесь представлены лишь некоторые наработанные мною материалы для проведения уроков. Надеюсь, они будут вам полезны"
};

export default LessonsPage;
