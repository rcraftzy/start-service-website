import Carousel from "./carousel";
import CarouselItem from "./carousel-item";
import Review from "./review";

const Testimonials: React.FC = () => <Carousel className="bg-black text-white py-10 lg:py-20">
  <CarouselItem index={0}>
    <Review by="Axel (Showtime)">
      Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
    </Review>
  </CarouselItem>
  <CarouselItem index={1}>
    <Review by="Axel (Showtime)">
      Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
    </Review>
  </CarouselItem>
  <CarouselItem index={2}>
    <Review by="Axel (Showtime)">
      Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
    </Review>
  </CarouselItem>
  <CarouselItem index={3}>
    <Review by="Axel (Showtime)">
      Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
    </Review>
  </CarouselItem>
  <CarouselItem index={4}>
    <Review by="Axel (Showtime)">
      Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
    </Review>
  </CarouselItem>
</Carousel>

export default Testimonials
