import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "./animation";
import Rounded from "../../common/RoundedButton";
export default function index() {
  const phrase =
    "Bahadır Hoca, 12 yıllık tecrübesi ve KGSL ile Sakarya Üniversitesi Konservatuvarı’ndan aldığı sağlam eğitimle müzik alanında size rehberlik ediyor. İzmir’de sunduğu özel derslerle, piyano, yan flüt, kanun gibi enstrümanların yanı sıra Güzel Sanatlar Lisesi (GSL) ve Konservatuvar sınavlarına hazırlık eğitimi veriyor.";
  const description = useRef(null);
  const isInView = useInView(description);
  return (
    <div ref={description} className={styles.description}>
      <div className={styles.body}>
        <p>
          {phrase.split(" ").map((word, index) => {
            return (
              <span key={index} className={styles.mask}>
                <motion.span
                  variants={slideUp}
                  custom={index}
                  animate={isInView ? "open" : "closed"}
                  key={index}>
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
        <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
          Müzikal yolculuğunuzda bir adım öne çıkmak için doğru adrestesiniz.
        </motion.p>
        <div data-scroll data-scroll-speed={0.1}>
          <Rounded className={styles.button}>
            <p>Hakkımda</p>
          </Rounded>
        </div>
      </div>
    </div>
  );
}
