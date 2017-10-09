import React from "react";
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Image,
  Slide,
  Text,
  Code,
  CodePane
} from "spectacle";

import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

preloader(images);

const theme = createTheme(
  {
    primary: "white",
    secondary: "#00BDEB",
    tertiary: "#eb7f00",
    text: "#012832",
    light: "#aaa"
  },
  {
    primary: "Muli"
  }
);

const code = {
  appSketch: require("!!raw-loader!../assets/codesnippets/appSketch.js"),
  index: require("!!raw-loader!../assets/codesnippets/index.js"),
  basicQuery: require("!!raw-loader!../assets/codesnippets/basicQuery.js")
};

const images = {
  techknowDay: require("../assets/images/techknowday.png"),
  trainers: require("../assets/images/trainers/trainers.jpg"),
  youareawesome: require("../assets/images/youareawesome.gif"),
  rest: require("../assets/images/graphql/rest.jpg"),
  graphql: require("../assets/images/graphql/graphql.jpg"),
  graphiql: require("../assets/images/graphql/graphiql.jpg"),
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        {/* Waiting / Starting slide */}
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} lineHeight={1.1} textColor="secondary">
            Introduction to GraphQL
          </Heading>

          <Image width="100%" src={images.techknowDay} />
        </Slide>

        {/* Meet your trainers */}
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} lineHeight={1.5} textColor="secondary">
            Trainers
          </Heading>
          <Image width="100%" src={images.trainers} />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} lineHeight={1.5} textColor="secondary">
            What we will do today
          </Heading>
          <List>

            <ListItem textColor="text" bold>
              Short intro to GraphQL
            </ListItem>
            <ListItem textColor="text" bold>
              Pokepedia with GraphQL
            </ListItem>
          </List>
        </Slide>

        {/* What is GraphQL*/}
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} lineHeight={1.5} textColor="secondary">
            GraphQL
          </Heading>
          <List>

            <ListItem textColor="text" bold>
              Query language for APIs
            </ListItem>
            <ListItem textColor="text" bold>
              Alternative to REST
            </ListItem>
            <ListItem textColor="text" bold>
              2012 - Facebook implementation
            </ListItem>
            <ListItem textColor="text" bold>
              2015 - Facebook open sourced
            </ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} lineHeight={1.5} textColor="secondary">
            REST - Pokemon Evolutions
          </Heading>
          <Image width="100%" src={images.rest} />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} lineHeight={1.5} textColor="secondary">
            GraphQL - Pokemon Evolutions
          </Heading>
          <Image width="100%" src={images.graphql} />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} lineHeight={1.5} textColor="secondary">
            bit.ly/graphql-pokemon
          </Heading>
          <Image width="100%" src={images.graphiql} />
        </Slide>

        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={code.appSketch}
          ranges={[
            { loc: [0, 15], title: "App sketch" },
            { loc: [0, 15], title: "App sketch" },
          ]}
        />

        {/* What is GraphQL*/}
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} lineHeight={1.5} textColor="secondary">
            CodeSandBox
          </Heading>
          <Heading size={5} lineHeight={1.5} textColor="text">
            bit.ly/graphql-sb
          </Heading>
        </Slide>

        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={code.index}
          ranges={[
            { loc: [0, 4], title: "import from react-apollo" },
            { loc: [5, 8], title: "Create network interface" },
            { loc: [9, 10], title: "Create Apollo client" },
            { loc: [11, 16], title: "ApolloProvider" },
          ]}
        />

        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={code.basicQuery}
          ranges={[
            { loc: [0, 7], title: "Create a query" },
            { loc: [8, 12], title: "Access data via props" },
            { loc: [13, 33], title: "" },
          ]}
        />

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} lineHeight={1.5} textColor="secondary">
            Task for you
          </Heading>
          <List>
            <ListItem textColor="text" bold>
              Create a query for Pokemon.js
            </ListItem>
            <ListItem textColor="text" bold>
              It should include 'evolutions'
            </ListItem>
            <ListItem textColor="text" bold>
              Use the pokemon :id from the router
            </ListItem>
            <ListItem textColor="text" bold>
              Display Pokemon with Evolutions
            </ListItem>
          </List>
        </Slide>

        {/* Thank you! */}
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="secondary" fontWeight="bold">
            Thank You! You are ✨✨✨ awesome ✨✨✨
          </Heading>
          <Image width="40%" src={images.youareawesome} />
        </Slide>
      </Deck>
    );
  }
}
