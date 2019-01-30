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
            <ListItem>Makes life easy for programmers</ListItem>
            <ListItem>Good for everyone!</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading>Measuring quality</Heading>
          <img src={require('./img/wtfm.jpg')} />
        </Slide>
        <Slide>
          <Quote>
              "Code is not for the computer, it's for other human beings" <Cite> Kyle Simpson</Cite>
          </Quote>
        </Slide>
        <Slide>
          <Heading>
            Criteria
          </Heading>
          <List>
            <ListItem>
              Clean: readable, clear, concise, easy to reason
            </ListItem>
            <ListItem>
              Maintainable: easy to edit, add on to, delete, and refactor
            </ListItem>
            <ListItem>
              No Bugs/Errors: free of and resistant to bugs and errors
            </ListItem>
            <ListItem>
              Secure
            </ListItem>
            <ListItem>
              Performant
            </ListItem>
          </List>
        </Slide>
        
        <Slide>
          <Heading>
            Clean Code
          </Heading>
        </Slide>
        <Slide>
          <Heading>
            What is clean code?
          </Heading>
          <Quote>
            "You know you are working with clean code when each [function] you read is pretty much what you expected" <Cite> Ward Cunningham</Cite>
          </Quote>
        </Slide>
        <Slide>
          <Heading>
            Principles of clean code
          </Heading>
          <List>
            <ListItem>
              Proper naming of variables and functions
            </ListItem>
            <ListItem>
              Single responsibility principle
            </ListItem>
            <ListItem>
              DRY (Don't repeat yourself)
            </ListItem>
            <ListItem>
              KISS (Keep it simple stupid)
            </ListItem>
            <ListItem>
              YAGNI (You ain't gonna need it)
            </ListItem>

          </List>
        </Slide>

        <Slide>
          <Heading>
            Naming
          </Heading>

        </Slide>
        <Slide>
          <Heading>Example</Heading>
          <Code>
            {`function() {
              
            }`}
          </Code>
        </Slide>
        <Slide>
          <Heading>Maintainable Code</Heading>
        </Slide>
        <Slide>
          <Heading>
            What is maintainable code?
          </Heading>
          <List>
            <ListItem>
              Code that is easy to edit
            </ListItem>
            <ListItem>
              Code that is easy to add to
            </ListItem>
            <ListItem>
              Code that is easy to refactor
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Text>Maintainable code is achieved through proper code design</Text>
        </Slide>
        <Slide>
          <Heading>
            Designing code
          </Heading>
          <List>
            <ListItem>
              Avoiding footguns
            </ListItem>
            <ListItem>
              Separation of concerns (decoupling)
            </ListItem>
          </List>
        </Slide>
        <Slide>
          
        </Slide>
        {/* "If you go after easy, you usually end up with complex, but if you go after simple you can also achieve easy." - Kyle Simpson */}

      </Deck>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#main"));
