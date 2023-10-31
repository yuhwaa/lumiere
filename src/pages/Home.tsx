import data from "../data/homeslides.json";
import { CarouselComponent } from "../components/CarouselComponent";

export function Home(){
    return (
    <>
    <h1 className="text-center">Welcome to Lumière Pâtisserie</h1>
      <CarouselComponent data={data} />
    </>
    )
}