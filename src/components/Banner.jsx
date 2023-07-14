import banner from "../assets/Bannerweb.png";
import "../styles/banner.css";
import { ButtonIcon } from "../components/index";

const Banner = () => {
  return (
    // absolute top-0 -z-10
    <div className="">
      <div className="relative banner h-[100vh]">
        <img className="h-[100vh] w-[100vw]" src={banner} alt="banner" />
        <div className="banner-text w-[50%] px-[6rem]">
          <h1 className="text-[2.9rem] font-extrabold mb-4">
            Design is the silent <br /> ambassador of your brand
          </h1>
          <p className="text-sm mb-3">
            Alupak Industry is a leading company in the packaging industry,
            specializing in high-quality aluminum packaging solutions.
          </p>
          <ButtonIcon
            value={"Read more"}
            icon={<i class="fa fa-heart-o"></i>}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
