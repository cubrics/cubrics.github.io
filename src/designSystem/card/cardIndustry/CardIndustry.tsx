import { FC } from "react";
import styles from "./CardIndustry.module.scss";
import Heading from "../../heading/Heading";

interface ICardIndustry extends React.HTMLAttributes<HTMLDivElement> {
  data: {
    industries_id: string;
    industries_title: string;
    industries_image: string;
    industries_alt: string;
  };
}

const CardIndustry: FC<ICardIndustry> = (props) => {
  return (
    <div
      className={styles.container}
      aria-label={"industries-content-individual"}
    >
      <div className={styles.image} aria-label={"industries-content-image"}>
        <img
          src={props.data.industries_image}
          alt={props.data.industries_alt}
        />
      </div>
      <div className={styles.title} aria-label={"industries-content-title"}>
        <Heading type={"h3"} colour={"base__light"}>
          {props.data.industries_title}
        </Heading>
      </div>
    </div>
  );
};

export default CardIndustry;