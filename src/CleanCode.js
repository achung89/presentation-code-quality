import React from "react";
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
  Text,
  ComponentPlayground,
  SlideSet
} from "spectacle";
export default () => (
  <SlideSet>
    <Slide>
      <Heading>Clean Code</Heading>
    </Slide>
    <Slide>
      <Heading>What is clean code?</Heading>
      <Quote>
        "You know you are working with clean code when each [function] you read
        is pretty much what you expected" <Cite> Ward Cunningham</Cite>
      </Quote>
    </Slide>
    <Slide>
      <Heading>Principles of clean code</Heading>
      <List>
        <ListItem>Good naming of variables and functions</ListItem>
        <ListItem>Single responsibility principle</ListItem>
        <ListItem>DRY (Don't repeat yourself)</ListItem>
        <ListItem>KISS (Keep it simple stupid)</ListItem>
        <ListItem>YAGNI (You ain't gonna need it)</ListItem>
      </List>
    </Slide>

    <Slide>
      <Heading>Naming</Heading>
    </Slide>
    <Slide>
      {/* <Co
            code ={
             `if ( a % 2 === 0 ) {
              // ...  
             }
            if ( a % 2 === 1) {
              // ...
            }
            `
            }
          /> */}
    </Slide>
  </SlideSet>
);
