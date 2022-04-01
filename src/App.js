import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//React components
import Home from "navigation/Home";
import Chat from "navigation/Chat";
import Header from "components/organism/Header";
import Footer from "components/organism/Footer";

//React Constants
import { menuOptions, menuFooter } from "const/menu";

const Page = styled.div`
  height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Page>
      <Router>
        <Header options={menuOptions}></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/chat" element={<Chat />}></Route>
          {/* <Route path="/about" component={About} />
          <Route path="/events" component={Events} />
          <Route path="/annual" component={AnnualReport} />
          <Route path="/team" component={Teams} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/sign-up" component={SignUp} /> */}
        </Routes>
        <Footer options={menuFooter}></Footer>
      </Router>
    </Page>
  );
}

export default App;
