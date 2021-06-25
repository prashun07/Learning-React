//This code show how to write function which class components method.

// import React, { Component } from 'react';

// class Welcome extends Component{
//     render() {
//         return <h1>Welcome here</h1>;
//     }
// }
// export default Welcome;
//Using props
import React, { Component } from 'react';

class Welcome extends Component{
    render() {
        return <h1>Welcome {this.props.name}</h1>;
    }
}
export default Welcome;
