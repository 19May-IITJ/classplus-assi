import { Layout } from "antd";
import SearchPage from "../SearchPage/SearchPage";
import "./App.css";
const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout>
      <Content>
        <SearchPage />
      </Content>
      {/* <Footer>
        Created by <b> Mayank Singh</b>
      </Footer> */}
    </Layout>
  );
}

export default App;
