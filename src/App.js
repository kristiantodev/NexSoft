import React, { Component } from 'react';

import { Header, Footer, Content, ContentTable } from "./template"
import "./App.css"

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Content />
        <ContentTable />
        <Footer />
      </>
    );
  }
}

export default App;