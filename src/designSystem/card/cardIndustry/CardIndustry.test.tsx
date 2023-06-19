import { render, screen } from "@testing-library/react";
import CardIndustry from "./CardIndustry";
import Consumer from "../../../components/industries/industriesImages/consumer.jpg";

const consumerData = {
  industries_id: "consumer",
  industries_title: "Consumer",
  industries_image: Consumer,
  industries_alt: "person walking with bag",
};

describe("card industry", () => {
  test("should render a card industry", () => {
    render(<CardIndustry data={consumerData} />);
    const cardIndustryElement = screen.getByLabelText(
      "industries-content-individual"
    );
    expect(cardIndustryElement.tagName).toBe("DIV");
    expect(cardIndustryElement).toHaveClass("container", { exact: true });
  });
  test("should render a card industry image", () => {
    render(<CardIndustry data={consumerData} />);
    const cardIndustryImageContainerElement = screen.getByLabelText(
      "industries-content-image"
    );
    expect(cardIndustryImageContainerElement).toHaveClass("image");
    const cardIndustryImageElement = screen.getByRole(
      "img"
    ) as HTMLImageElement;
    expect(cardIndustryImageElement.src).toBe("http://localhost/consumer.jpg");
    expect(cardIndustryImageElement.alt).toBe("person walking with bag");
  });
  test("should render a card industry title", () => {
    render(<CardIndustry data={consumerData} />);
    const cardIndustryTitleContainerElement = screen.getByLabelText(
      "industries-content-title"
    );
    expect(cardIndustryTitleContainerElement).toHaveClass("title", {
      exact: true,
    });
    const cardIndustryTitleElement = screen.getByRole("heading", { level: 3 });
    expect(cardIndustryTitleElement.textContent).toBe("Consumer");
  });
});
