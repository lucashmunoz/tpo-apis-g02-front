import ComoFunciona from "components/organisms/ComoFunciona";
import QuickSearch from "components/organisms/QuickSearch";
import ServiciosPopulares from "components/organisms/ServiciosPopulares";

const Home = () => {
  return (
    <>
      <QuickSearch />
      <ComoFunciona />
      <ServiciosPopulares />
    </>
  );
};

export default Home;
