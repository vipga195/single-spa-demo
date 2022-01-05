
import {
  Header,
  Content
} from './component';
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Root = (props) => {
  return <div className="main">
    <Header />
    <Content />
  </div>
}

export default Root;