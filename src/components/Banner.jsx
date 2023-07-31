import { Button } from "../components/index";
import banner2 from "../assets/home/bannerHome.png";
import mobBanner from "../assets/home/Mask Group 44@2x.png";
import "../styles/banner.css";
import "../styles/font.css";
import "../styles/animate.css";

const Banner = () => {
  return (
    <div className="relative">
      <img
        className="w-[100vw] xs:hidden md:block h-[95vh]"
        src={banner2}
        alt="banner"
      />
      <img className="md:hidden xs:block" src={mobBanner} />
      <div className="banner-text absolute left-[-100%] top-[50%] text-white text-[24px] md:w-[70%] lg:w-[60%] xs:px-[2rem] md:px-[6rem] xs:text-center md:text-left ">
        <h1 className="lg:text-[2rem] xm:text-[2.9rem] font-extrabold mb-4 fontBoldAlupak tracking-[.01rem]">
          Keeping your product’s <br /> quality untapped and intact
        </h1>
        <p className="text-[.9rem] xs:mb-12 md:mb-3">
          Our packaging materials are manufactured to keep your products safe,
          secure and as they <br className="md:hidden xsm:block" /> have been
          packed.
        </p>
        <div className="text-black">
          <Button value={"Read More"} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
