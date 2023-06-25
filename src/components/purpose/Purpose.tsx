import { FC, useEffect, useState } from "react";
import styles from "./Purpose.module.scss";
import Heading from "../../designSystem/heading/Heading";
import Text from "../../designSystem/text/Text";
import { client } from "../../useContentful";
import { titleUppercase } from "../../utils/title.utils";

interface IPurposeResponse {
  title: string;
  description: string;
}

const Purpose: FC = () => {
  const [purpose, setPurpose] = useState<IPurposeResponse[]>([]);

  const getPurpose = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "purpose",
      });
      const sanitizedEntries = entries.items.map((item) => {
        return { ...item.fields };
      });
      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching purpose ${error}`);
    }
  };

  useEffect(() => {
    getPurpose().then((response: any) => setPurpose(response));
  });

  const displayPurposeContent = purpose.map((item: IPurposeResponse) => {
    return (
      <div
        className={styles.content}
        aria-label={"purpose-content"}
        key={item.title}
      >
        <Heading type={"h2"} colour={"primary__dark"}>
          {titleUppercase(item.title)}
        </Heading>
        <Text type={"p1"}>{item.description}</Text>
      </div>
    );
  });

  return (
    <section className={styles.container} aria-label={"purpose-section"}>
      {displayPurposeContent}
    </section>
  );
};

export default Purpose;
