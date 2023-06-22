import { FC } from "react";
import styles from "./CardService.module.scss";
import Heading from "../../heading/Heading";
import Icon from "../../icon/Icon";
import Text from "../../text/Text";

export interface ICardService extends React.HTMLAttributes<HTMLDivElement> {
  data: {
    service_id: string;
    service_icon: string;
    service_title: string;
    service_intro: string;
    service_description: string;
  };
}

const CardService: FC<ICardService> = (props) => {
  return (
    <div
      className={styles.container}
      aria-label={"services-content-individual"}
    >
      <div
        className={styles.firstContainer}
        aria-label="services-content-firstContainer"
      >
        <div
          className={styles.firstContainer__iconTitle}
          aria-label="services-content-firstContainer-iconTitle"
        >
          <Icon name={props.data.service_icon} />
          <Heading type={"h3"} colour={"base__light"}>
            {props.data.service_title}
          </Heading>
        </div>
        <Text type={"p2"} colour={"base__light"}>
          {props.data.service_intro}
        </Text>
      </div>
      <div
        className={styles.secondContainer}
        aria-label="services-content-secondContainer"
      >
        <Text type={"p2"}>{props.data.service_description}</Text>
      </div>
    </div>
  );
};

export default CardService;