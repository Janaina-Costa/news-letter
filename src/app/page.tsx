import style from "./page.module.css";
import iconList from "../../public/icon-list.svg";
import Image from "next/image";

import { Form } from "@/components/Form";

export default function Home() {
  return (
    <div className={style.container}>
      <div className={style.topImage}></div>
      <div className={style.wrapper}>
        <div className={style.wrapperTitle}>
          <h1>Stay updated!</h1>
        </div>
        <div className={style.wrapperSubTitle}>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
        </div>
        <ul className={style.listContent}>
          <li>
            <Image src={iconList} alt="icone de lista" /> Product discovery and
            building what matters
          </li>
          <li>
            <Image src={iconList} alt="icone de lista" /> Measuring to ensure
            updates are a success
          </li>
          <li>
            <Image src={iconList} alt="icone de lista" /> And much more!
          </li>
        </ul>
        <Form />
      </div>
    </div>
  );
}
