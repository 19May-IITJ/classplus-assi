import { Layout } from "antd";
import SearchPage from "../SearchPage/SearchPage";
import "./App.css";
const { Content } = Layout;

function App() {
  return (
    <Layout>
      <Content>
        <SearchPage />
      </Content>
    </Layout>
  );
}

export default App;
