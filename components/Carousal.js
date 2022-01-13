import Image from "next/image";
import Slider from "react-slick";
import styled from "styled-components";
function Carousal() {
  const WrapItems = ({ height, src }) => {
    return (
      <div className="bg-gray-700 flex items-center justify-center rounded-xl p-2 md:p-8 border-4 border-transparent hover:border-white cursor-pointer">
        <Image
          src={src}
          width="2000"
          height={height}
          objectFit="cover"
          className="w-full h-full rounded-xl"
        />
      </div>
    );
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
  };
  return (
    <>
      <div
        className="w-full rounded-lg shadow-2xl mt-10 hidden lg:block"
        style={{ height: "40vh" }}
      >
        <CarousalArea {...settings} className="h-full w-full">
          <WrapItems
            height={580}
            src={"https://wallpaperaccess.com/full/6790561.jpg"}
          />
          <WrapItems
            height={580}
            src={"https://wallpaperaccess.com/full/6790388.jpg"}
          />
          <WrapItems
            height={580}
            src={"https://wallpapercave.com/wp/wp4503466.jpg"}
          />
        </CarousalArea>
      </div>

      <div
        className="w-full rounded-lg shadow-2xl mt-10 lg:hidden"
        style={{ height: "40vh" }}
      >
        <CarousalArea {...settings} className="h-full w-full">
          <WrapItems
            height={1150}
            src={"https://wallpaperaccess.com/full/6790561.jpg"}
          />
          <WrapItems
            height={1150}
            src={"https://wallpaperaccess.com/full/6790379.jpg"}
          />
          <WrapItems
            height={1150}
            src={
              "https://images.thedirect.com/media/article_full/DS2_dVDTuje.jpg"
            }
          />
        </CarousalArea>
      </div>
    </>
  );
}
const CarousalArea = styled(Slider)`
  /* .slick-list {
    overflow: visible;
  } */
  ul li button {
    &:before {
      font-size: 10px;
      color: white;
    }
  }
  li.slick-active button:before {
    color: white;
  }
  button {
    z-index: 1;
  }
`;

export default Carousal;
