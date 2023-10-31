import CarouselComponent from "../components/CarouselComponent";
import data from "../data/homeslides.json";

export function Home(){
    return (
    <>
    <h1 className="text-center">Welcome to Lumière Pâtisserie</h1>
      {/* Use the CarouselComponent and pass the slide data as a prop */}
      <CarouselComponent data={data} />
    </>
    )
}z