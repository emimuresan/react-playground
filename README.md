# React Playground

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Day 1

### Rendering
* JSX (not HTML but a syntax extension to JavaScript)
* Embedding expressions in JSX
* Rendering an Element into the DOM
  * React element has to return only one element
* Exploring React DOM updates

### Components
* Functional and Class components 
* Working with components (composition, extraction)
* Managing data
  * props (read-only, can be considered parameter for components)
  * state (private and fully controlled by the component)

## Day 2

### State and Lifecycle
* Components lifecycle hooks
* Using state correctly
  * state shouldn't be modified directly (except in the constructor)
  * setState is asynchronous
  * state updates are merged

### Handling Events
* React events are named using camelCase
* Class methods are not bound by default (best practice: bind them in the constructor)

## Day 3

### Data Fetching
* Fetching data from the server and displaying it
* Conditional Rendering
* Lists and Keys

## Day 4

### More about Props
* Props shorthand
* Props.children
* Typechecking with PropTypes
