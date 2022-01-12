import { Header, Content } from "./component";
import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";

const Root = (props) => {
  return (
    <Router>
      <div >
        <Header />
        {/* <Content /> */}
      </div>
    </Router>
  );
};

export default Root;
