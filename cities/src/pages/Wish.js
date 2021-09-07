import { React } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
// import Test from "./Test";

const WishList = () => {
//   const [val, setVal] = useState(1);
  return (
    <div>
      <Navigation />
      La page des souhaits
      {/* <div className="container-fluid">{val}</div>
      <Test val={val} setVal={setVal} /> */}
      <Footer />
    </div>
  );
};

export default WishList;
