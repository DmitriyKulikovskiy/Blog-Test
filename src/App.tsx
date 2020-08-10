import React from "react";
import PostsContainer from "./containers/posts-container";
import Header from "./components/header";
import { Route } from "react-router-dom";
import About from "./components/about";
import Navigation from "./components/nav";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Navigation />
      <Route path={["/", "/blog"]} exact render={() => <PostsContainer />} />
      <Route path="/about" render={() => <About />} />
    </>
  );
};

export default App;
