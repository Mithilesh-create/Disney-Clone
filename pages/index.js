import Header from "../components/Header";
import Layout from "../components/Layout";
import Wrapper from "../components/Wrapper";
import Carousal from "../components/Carousal";
import LogoArea from "../components/LogoArea";
import DisplayArea from "../components/DisplayArea";
import Middleware from "../components/Middleware";
export default function Home() {
 
  return (
    <>
      <Middleware>
        <Wrapper>
          <Layout>
            <Header />
            <Carousal />
            <LogoArea />
            <DisplayArea />
          </Layout>
        </Wrapper>
      </Middleware>
    </>
  );
}
