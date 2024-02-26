// imports
import DestinationIntroCard from "../components/generics/DestinationIntroCard";
import DestinationNav from "../components/navs/DestinationNav";
import DisplayImg from "../components/generics/DisplayImg";
import "./_destinations.scss";
import parametersDestination from "../assets/parameters/parameterDestination.json";
import parametersPicDestination from "../assets/parameters/parameterPicDestination.json";

const fetchImage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const destImages = Object.values(
    parametersPicDestination.PicDestinations.Destination_6
  );
  return destImages;
};

const Dest_AgathiGoldenSandBeach = () => {
  const { title, intro, paragraph1, paragraph2, to1, to2, back, forward } =
    parametersDestination.destinations.agathi_golden_sand_beach;

  return (
    <>
      <DestinationIntroCard
        title={title}
        intro={intro}
        p1={paragraph1}
        p2={paragraph2}
      />
      <DisplayImg library={fetchImage} />

      <DestinationNav to1={to1} back={back} to2={to2} forth={forward} />
    </>
  );
};

export default Dest_AgathiGoldenSandBeach;
