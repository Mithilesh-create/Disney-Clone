import Disney from "../assets/Disney.png";
import Marvel from "../assets/MarvelJPG.png";
import Pixar from "../assets/Pixar.png";
import Starwars from "../assets/Starwars.png";
import NatGeo from "../assets/NatGeo.png";
import SmallCardLogo from "./SmallCardLogo";
function LogoArea() {
    return (
        <>
          <div
            className="w-full  overflow-x-scroll flex items-center flex-shrink-0 mt-10 md:mt-20  no-scrollbar "
            style={{ height: "25vh" }}
          >
            <SmallCardLogo Image={Disney} className={"hover:bg-disney"} />
            <SmallCardLogo Image={Marvel} className={"hover:bg-marvel"} />
            <SmallCardLogo Image={Pixar} className={"hover:bg-pixar"} />
            <SmallCardLogo Image={Starwars} className={"hover:bg-starwars"} />
            <SmallCardLogo Image={NatGeo} className={"hover:bg-natgeo"} />
          </div>  
        </>
    )
}

export default LogoArea
