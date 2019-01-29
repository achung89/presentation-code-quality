// index.js

import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Code,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";
import createTheme from "spectacle-theme-nova";

const theme = createTheme();
export default class App extends Component {
  render() {
    return (
      <Deck theme={theme}>
        <Slide>
          <Heading>Code Quality (the basics)</Heading>
        </Slide>
        <Slide>
          <Heading>What is Code Quality</Heading>
        </Slide>
        <Slide>
          <Heading>Definitions of code quality</Heading>
          <List>
            <ListItem>
              Code quality is a measure of how easy it is to add to or edit a piece of code without breaking anything
            </ListItem>
            <ListItem>
              Code quality is a measure of how long a piece of code will last before becoming unmaintainable
            </ListItem>
          </List>
        </Slide>

      </Deck>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#main"));
