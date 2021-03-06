import React, { Component } from 'react';

class  Counter extends Component {
    state = { 
        count:0,
     };

   handleIncrement =product => {
         console.log(product)
        this.setState({ count: this.state.count +1 }) 

     };

    render() {         
        return ( 
            <div>
                <span className={this.getBadgeClasses()}> { this.formatCounter() }</span> 
                <button onClick={() => this.handleIncrement()}
                className = "btn btn-secondary btn-sm"> Increment</button> 
            </div>
         );
    }

    formatCounter() {
        const {count} = this.state;
        return count === 0 ? "Zero" : count
    }
    getBadgeClasses() {
       let classes = "badge m-2 badge-";
       classes += (this.state.count === 0) ? "warning" : "primary";
       return classes;
   }

}

export default Counter;