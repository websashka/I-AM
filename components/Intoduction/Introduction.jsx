import Image from 'next/image'
import styles from "./Introduction.module.css"
import {useTranslation} from "next-i18next";

const Introduction = () => {
  const { t } = useTranslation()
  return(<section className={styles.container}>
    <div className={styles.container__text}>
      <span className={styles.position}>
        Full-stack web developer
      </span>
      <p className={styles.greetings}>
        {t("greetings")}
      </p>
    </div>

    <Image
      className={styles.photo}
      src="/images/Iam.png"
      width={650}
      height={650}
    />
  </section>)
};

export default Introduction;