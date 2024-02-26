// imports
import GalleryNav from "../components/navs/GalleryNav";
import IntroCard from "../components/generics/IntroCard";
import Caroussel from "../components/generics/Caroussel";
import introParameter from "../assets/parameters/parameterCardIntro.json";

const Destinations = () => {
  const { title, txt } = introParameter.cardIntro.destinations;
  return (
    <>
      <IntroCard title={title} txt={txt} />
      <GalleryNav />
      <Caroussel />
    </>
  );
};

export default Destinations;
