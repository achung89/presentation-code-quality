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
import timeVProductivity from "./img/productivity-vs-time.png";
const theme = createTheme();
export default class App extends Component {
  render() {
    return (
      <Deck theme={theme}>
        <Slide>
          <Heading>Code Quality</Heading>
        </Slide>
        <Slide>
          <Heading>Good Code</Heading>
        </Slide>
        <Slide>
          <img src={timeVProductivity} />
        </Slide>
        <Slide>
          <Heading>Good code...</Heading>
          <List>
            <ListItem>Increases productivity</ListItem>
            <ListItem>Decreases bugs</ListItem>
            <ListItem>Makes life easier for programmers</ListItem>
            <ListItem>Good for everyone!</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading>Quantifying code quality</Heading>
          <img src={require('./img/wtfm.jpg')} />
        </Slide>
        <Slide>
          <Heading>
            Code is communication
          </Heading>
          <List>
            <ListItem>
              "Code is not for the computer, it's for other human beings" - Kyle Simpson
            </ListItem>
          </List>
        </Slide>
        "If you go after easy, you usually end up with complex, but if you go after simple you can also achieve easy." - Kyle Simpson

      </Deck>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#main"));
