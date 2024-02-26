// imports
import IntroCard from "../components/generics/IntroCard";
import GalleryNav from "../components/navs/GalleryNav";
import DisplayImg from "../components/generics/DisplayImg";
import introParameter from "../assets/parameters/parameterCardIntro.json";
import imgClient from "../assets/parameters/parameterGallery.json";

const fetchImage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const images = Object.values(imgClient.GalleryImg.Customers);
  return images;
};

const Gallery = () => {
  const { title, txt } = introParameter.cardIntro.gallery;
  return (
    <>
      <IntroCard title={title} txt={txt} />
      <GalleryNav />
      <DisplayImg library={fetchImage} />
    </>
  );
};

export default Gallery;
