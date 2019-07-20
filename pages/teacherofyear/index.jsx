import React from "react";
import Head from "next/head";
import Attachment from "@components/Attachment";
import { resolveAttachmentUrl } from "@utils/resolveAttachmentUrl";
import styles from "./styles";

const TeacherOfYearPage = () => (
  <div className={styles.authPage}>
    <Head>
      <title>Учитель года 2019 - Максим зайцев</title>
    </Head>
    <div className={styles.videos}>
      <div className={styles.video}>
        <iframe
          className={styles.iframe}
          src="https://www.youtube.com/embed/lHN_Dn_krZM"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className={styles.video}>
        <video
          src="http://rus.rus-kostroma.ru/news/2019/04/11/07_00977.mp4"
          className={styles.iframe}
          controls
        />
      </div>
    </div>
    <div className={styles.list}>
      <Attachment
        type="docx"
        title="Эссе на тему 'Каждый выбирает для себя..'"
        description="Работа Зайцева Максима для конкурса"
        url={resolveAttachmentUrl(
          "ce8c87588c3af7eb0f5986779b8c1c851549446497016.docx"
        )}
      />
    </div>
  </div>
);

TeacherOfYearPage.hero = {
  title: "Конкурс « Учитель года 2019 »",
  description: "Конкурс педагогического мастерства. Номинация « Учитель »"
};

export default TeacherOfYearPage;
