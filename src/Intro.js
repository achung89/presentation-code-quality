import React from "react";

import timeVProductivity from "./img/productivity-vs-time.png";
import {
  Slide,
  Heading,
  List,
  ListItem,
  Quote,
  SlideSet,
  Cite
} from "spectacle";

export default () => (
  <SlideSet>
        <Slide>
      <Heading>
        Code Quality
      </Heading>
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
        <ListItem>Makes programming and debugging easier</ListItem>
      </List>
    </Slide>
    <Slide>
      <Heading>Measuring quality</Heading>
      <img src={require("./img/wtfm.jpg")} />
    </Slide>
    <Slide>
      <Quote>
        "Code is not for the computer, it's for other human beings"{" "}
        <Cite> Kyle Simpson</Cite>
      </Quote>
    </Slide>
    <Slide>
      <Heading>5 components</Heading>
      <List>
        <ListItem>Clean: readable, clear, concise, easy to reason</ListItem>
        <ListItem>
          Maintainable: easy to edit, add on to, delete, and refactor
        </ListItem>
        <ListItem>
          No Bugs/Errors: free of and resistant to bugs and errors
        </ListItem>
        <ListItem>Secure</ListItem>
        <ListItem>Performant</ListItem>
      </List>
    </Slide>
  </SlideSet>
);
