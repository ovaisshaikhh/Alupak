import banner from "../assets/Bannerweb.png";
import "../styles/banner.css";
import "../styles/font.css";
import "../styles/animate.css";
import { ButtonIcon } from "../components/index";

const Banner = () => {
  return (
    <div className="relative h-[100vh]">
      <img className="h-[100vh] w-[100vw]" src={banner} alt="banner" />
      <div className="banner-text absolute left-[-100%] top-[50%] text-white text-[24px] w-[60%] px-[6rem]">
        <h1 className="lg:text-[2rem] xm:text-[2.9rem] font-extrabold mb-4 fontBoldAlupak">
          Design is the silent <br /> ambassador of your brand
        </h1>
        <p className="text-sm mb-3">
          Alupak Industry is a leading company in the packaging industry,
          specializing in high-quality <br /> aluminum packaging solutions.
        </p>
        <ButtonIcon value={"Read more"} icon={<i class="fa fa-heart-o"></i>} />
      </div>
    </div>
  );
};

export default Banner;
