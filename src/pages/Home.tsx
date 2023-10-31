import Carousel from "../components/Carousel";
import homeSlides from "../data/homeslides.json";

export function Home(){
    return (
    <>
    <Carousel slidedata={homeSlides}/>
    </>
    )
}