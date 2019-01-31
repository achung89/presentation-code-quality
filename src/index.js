// index.js
import "spectacle-theme-nova/syntax/prism.nova.css";

import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
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
  ComponentPlayground
} from "spectacle";
import Code from "./Code.js";
import createTheme from "spectacle-theme-nova";
const theme = createTheme();
import "spectacle-theme-nova/syntax/prism-javascript";
import CodeVennDiagram from './CodeVennDiagram';
import timeVProductivity from "./img/productivity-vs-time.png";

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
          <Heading>Technical Debt</Heading>
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

        <Slide>
          <Heading>1) Clean Code</Heading>
        </Slide>
        <Slide>
          <Heading>What is clean code?</Heading>
          <Quote>
            "You know you are working with clean code when each [function] you
            read is pretty much what you expected" <Cite> Ward Cunningham</Cite>
          </Quote>
        </Slide>
        <Slide>
          <Heading>Principles of clean code</Heading>
          <List>
            <ListItem>Good naming of variables and functions</ListItem>
            <ListItem>Single responsibility principle</ListItem>
            <ListItem>DRY (Don't repeat yourself)</ListItem>
            <ListItem>KISS (Keep it stupid simple)</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading>Naming</Heading>
        </Slide>
        <Slide>
          <Code
            width="200px"
            code={`if ( a % 2 === 0 ) {
  // ...
}

if ( a % 2 === 1 ) {
  // ...
}
`}
          />
        </Slide>
        <Slide>
          <Code
                      width="300px"

            code={`let isEven = a % 2 === 0;
if ( isEven ) {
  // ...
}

let isOdd = a % 2 === 1;
if ( isOdd ) {
  // ...
}
`}
          />
        </Slide>
        {/* <Slide>
        <code style={{display:'block', textAlign:'left', width:'400px', margin:'auto', whiteSpace:'pre-wrap'}}
           dangerouslySetInnerHTML={{__html: Prism.highlight(
`
switch 
`, Prism.languages.javascript, 'javascript')}} />
        </Slide> */}
        <Slide>
          <Heading>Conventions</Heading>
          <List>
            <ListItem>
              functions and booleans should start with verbs (setState, createElement, isEven)
            </ListItem>
            <ListItem>values should be nouns</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading>Conventions</Heading>
          <List>
            <ListItem>Arrays are plural ("fruits", "states", "words")</ListItem>
            <ListItem>
              Avoid putting data type in name ("data" instead of "dataObj")
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading>Conventions</Heading>
          <List>
            <ListItem>Prefer explicit over implicit</ListItem>
            <Code
              code={`
function (arr) {
  let data = arr.map( entry => entry.name);
  // ...
}

`}
            />
            <Code
              code={`function (people) {
  let names = people.map( person => person.name);
  // ...
}
`}
            />
          </List>
        </Slide>
        <Slide>
          <Heading>Single Responsibility Principle</Heading>
        </Slide>
        <Slide>
          <Quote>
            "Functions should do one thing. They should do it well. They should
            do it only." <Cite> Robert C. Martin </Cite>
          </Quote>
        </Slide>
        <Slide>
          <Code
            code={`
let name = "Justin";
let age = 29;
let location;

if (age < 20) {
  location = "twitter";
}

if (age >= 20 ) {
  location = "facebook";
}

switch ( location ) {
  case: 'twitter':
    axios.post( 
      "https://twitter.com"
      , { name }
      , { headers: { 'auth': "twitter:login"} }
    );
  break;
  case: 'facebook':
    axiox.post(
      "https://facebook.com"
      , { name } 
      , { headers: { 'auth': "facebook:login"}}
    )
  break;
}
`}
          />
        </Slide>

        <Slide>
          <Code
            code={`// __helpers__
function getEndpoint( age ) {
  if ( age < 20 ) {
    return "twitter";
  }

  if ( age >= 20 ) {
    return "facebook";
  }
}
function sendToTwitter( name ) {
  axios.post( 
    "https://twitter.com"
    , { name }
    , { headers: { 'auth': "twitter:login"} }
  );
}
function sendToFacebook( name ) {
  axiox.post(
    "https://facebook.com"
    , { name } 
    , { headers: { 'auth': "facebook:login"}}
  )
}

// __main__
let name = "Justin";
let age = 29;
let location = getEndpoint( age );

switch ( location ) {
  case: 'twitter':
    sendToTwitter( name );
  break;
  case: 'facebook':
    sendToFacebook( name );
  break;
}
`}
          />
        </Slide>
        <Slide>
          <Heading>Avoid making many many small functions</Heading>
        </Slide>
        <Slide>
          <Heading>DRY (Don't repeat yourself)</Heading>
        </Slide>
        <Slide>
          <Code code={
`
function complexStuff( a, b, c, d ) {
  const x = Math.sqrt( Math.pow( a, 2 ) + Math.pow( b, 2 ) );
  const y = Math.sqrt( Math.pow( c, 2 ) + Math.pow( d, 2 ) );
  const z = Math.sqrt( Math.pow( x, 2 ) + Math.pow( y, 2 ) );
  return z;
}
`
          } />
        </Slide>
        <Slide>
          <Code code={
`function complexStuff( a, b, c, d ) {
  const pythagorean = ( a, b ) => Math.sqrt( 
    Math.pow( a, 2 )
    , Math.pow( b, 2 ) 
  )
  const x = pythagorean( a, b );
  const y = pythagorean( c, d );
  const z = pythgorean( x, y );
  return z;
}
`
          } width="450px" />
        </Slide>
        <Slide>
          <Code code={
`function complexStuff( a, b, c, d ) {
  const square = a => Math.pow( a, 2 );
  const pythagorean = ( a, b ) => Math.sqrt( square( a ), square( b ) )
  const x = pythagorean( a, b );
  const y = pythagorean( c, d );
  const z = pythgorean( x, y );
  return z;
}
` } 
width="800px" />
        </Slide>
        <Slide>
          <Heading>
            KISS (Keep it stupid simple)
          </Heading>
        </Slide>
        <Slide>
          <Code code={`fs.readdir(source, function (err, files) {
  if (err) {
    console.log('Error finding files: ' + err)
  } else {
    files.forEach(function (filename, fileIndex) {
      console.log(filename)
      gm(source + filename).size(function (err, values) {
        if (err) {
          console.log('Error identifying file size: ' + err)
        } else {
          console.log(filename + ' : ' + values)
          aspect = (values.width / values.height)
          widths.forEach(function (width, widthIndex) {
            height = Math.round(width / aspect)
            console.log('resizing ' + filename + 'to ' + height + 'x' + height)
            this.resize(width, height).write(dest + 'w' + width + '_' + filename, function(err) {
              if (err) console.log('Error writing file: ' + err)
            })
          }.bind(this))
        }
      })
    })
  }
})`} /> <Text style={{fontSize: '12px'}}>
  source: https://dev.to/nijeesh4all/kiss-the-java-script-298
  </Text></Slide>
        <Slide>
          <Code width={'300px'} code={`awesome_function()
  .then(do_this)
  .then(do_this_too)
  .then(here_is_one_more)
  .error(oh_crap)
    
    
    
    
    `} />
    <Text style={{fontSize: '12px'}}>
      https://dev.to/nijeesh4all/kiss-the-java-script-298
    </Text>
        </Slide>
        <Slide>
          <Heading>2) Maintainable Code</Heading>
        </Slide>
        <Slide>
          <Heading>What is maintainable code?</Heading>
          <List>
            <ListItem>Code that is easy to edit</ListItem>
            <ListItem>Code that is easy to add to</ListItem>
            <ListItem>Code that is easy to refactor</ListItem>
          </List>
        </Slide>
        <Slide>
          <Text>
            A coder spends 80% of his/her time maintaining code
          </Text>
        </Slide>
        <Slide>
          <Text>Maintainable code is achieved through code design</Text>
        </Slide>
        <Slide>
          <Heading>Designing code</Heading>
          <List>
            <ListItem>Follow best practices (Avoid footguns)</ListItem>
            <ListItem>Architecture</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading>
            Best practices
          </Heading>
          <List>
            <ListItem>
              many are specific to the language ( ex. avoid object type checking in javascript )
            </ListItem>
            <ListItem>
              some apply to all languages ( ex. separation of concerns )
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading>
             Architecture 
          </Heading>
        </Slide>
        <Slide>
          <CodeVennDiagram count={2} />
        </Slide>
        <Slide>
          <Heading>
            3) Bug and Error free code
          </Heading>
        </Slide>
        <Slide>
          
        </Slide>
      </Deck>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#main"));
