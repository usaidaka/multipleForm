import { useSelector } from "react-redux";
import ButtonNav from "../../components/ButtonNav";
import CardForm from "../../components/CardForm";
import CardContentOne from "./components/CardContent1";
import CardContentTwo from "./components/CardContent2";
import CardContentThree from "./components/CardContent3";
import CardContentFour from "./components/CardContent4";
import CardContentFive from "./components/CardContent5";

const Home = () => {
  const currentStep = useSelector((state) => state.homeReducer.step);

  const renderComponent = () => {
    switch (currentStep) {
      case 1:
        return <CardContentOne />;
      case 2:
        return <CardContentTwo />;
      case 3:
        return <CardContentThree />;
      case 4:
        return <CardContentFour />;
      case 5:
        return <CardContentFive />;

      default:
        return <CardContentOne />;
    }
  };

  return (
    <>
      <CardForm>{renderComponent()}</CardForm>
    </>
  );
};

export default Home;
