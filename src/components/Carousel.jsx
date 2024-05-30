import { Image } from "@chakra-ui/react";
import Carousel from "react-bootstrap/Carousel";

function ImageCarousel({ game }) {
  const screenShotsList = game.short_screenshots;
  const Screenshots = screenShotsList.map((screenshot) => (
    <Carousel.Item key={screenshot.id}>
      <Image src={screenshot.image} height={"300px"} width={'600px'} />
    </Carousel.Item>
  ));
  return <Carousel interval={null}>{Screenshots}</Carousel>;
}

export default ImageCarousel;
