// What is Components??
// -> Component is the building block of React application which describes the user interface.For example, if a simple website have 3 things header,body and footer,
// then these three things can be developed as a component in react.in a website there can be added as many components we need. one component can also host other component
// // for example, app.js host the different other components used in website design.
// // components is a basically a javascrpit file with javascrpit code in it.

// // Types of Components??
// // -->There are two types of components in the react, one is stateless functional component other is stateful class component.

//  import React from 'react' //importing react
// //function name should start with uppercase letter.
// //in uppercase starting react render it as jsx file but if we start with lowercase it will be rendered as basic html format which may cause problems.
// //This is javascript way to write function
// // function component1() { 
// //     return <h1>Hello Prashun!!</h1>;
// // }
// //This is arrow function way of writing function.
// const component1 = () => {
//     return <h1> Hello Prashun</h1>
// }


// export default component1; //This will export the function above written
//if we use default export then we can import function with any name in app.js
//else if it is not default export then import function with exact same name
//To use this function just write -->   import component1 from './component'
//write <component1 /> inside div tag to see result.
import React from 'react'
//USe function name starting with capital letter because
//for lowercase starting letter react render it in normal html format
//whereas in uppercase starting case react render it in jsx fromat
// function User1() { 
//     return <h1>Hello Prashun!!</h1>;
// }

const User1 = (props) => {
    return <h1> Hello {props.name}</h1>
}
