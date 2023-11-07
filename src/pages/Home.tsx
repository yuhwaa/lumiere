import data from "../data/homeslides.json";
import { CarouselComponent } from "../components/CarouselComponent";
import { TabsComponent } from "../components/TabsComponent";
import { Footer } from "../components/Footer";

export function Home(){
    return (
    <>
    {/* Carousel */}
    {/*<h1 className="text-center">Welcome to Lumière Pâtisserie</h1>*/}
      <CarouselComponent data={data} />
    {/* Menu */}
      <TabsComponent />
    {/* Reservation */}

    {/* Membership Promo*/}
    {/* Footer: location/phone/email + Social + hours + newsletter + all rights reserved*/}
      <Footer />
    </>
    )
}