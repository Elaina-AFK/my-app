import React, { Component } from 'react';
// import Example1 from './Example1';
// import Example2 from './Example2';
// import Example3 from './Example3';
import 'bootstrap/dist/css/bootstrap.min.css';
import data2 from "./data2"; 
import ExTable from './ExTable';


class App extends Component {
    render() {
        return (
            <div className="App">
				{/* <Example1></Example1>
				<Example2></Example2>
				<Example3></Example3> */}
                <ExTable data2={data2}></ExTable>
            </div>
        );
    }
}
 
export default App;
