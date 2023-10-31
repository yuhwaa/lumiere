import data from "../data/homeslides.json";
import { CarouselComponent } from "../components/CarouselComponent";

export function Home(){
    return (
    <>
    {/* Carousel */}
    <h1 className="text-center">Welcome to Lumière Pâtisserie</h1>
      <CarouselComponent data={data} />
    {/* Menu */}
    {/* Reservation */}
    {/* Membership */}
    {/* Footer: location/phone/email + Social + hours + newsletter + all rights reserved*/}
    </>
    )
}