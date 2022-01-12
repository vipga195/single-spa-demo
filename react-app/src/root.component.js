import { Content } from "./component";
// import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";

const Root = (props) => {
  return (
    <Router>
      <div className="main">
        <Content />
      </div>
    </Router>
  );
};

export default Root;
