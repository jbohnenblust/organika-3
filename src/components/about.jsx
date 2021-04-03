import React, { Component } from 'react';

class About extends Component {

    state = {
        infoVisible: false,
    }

    render() { 
        return ( 
            <div className="about-page">
                <div className="jumbotron">
                    <h1 className="display-4">Jeff Bohnenblust</h1>
                    <p className="lead">This is my FSDI project for SDGKU. Click on the button below for my contact information.</p>
                    <hr className="my-4"></hr>
                    <p className="lead">

                    {this.getPersonalInfo()}
                        <btn onClick={this.handleButtonClick} className="btn btn-primary btn-lg"  >Contact info</btn>
                    </p>
                    
                </div>

            </div>
         );
    }


    getPersonalInfo = () => {
        if(this.state.infoVisible){
            return (
                <div>
                    <label>Email: email@email.com</label>
                    <br/>
                    <label>Phone: 123 456 7890</label>
                </div>
            );
        }
     else {
        <label>Click here for contact info</label>
    }
}

    handleButtonClick = () => {
        console.log("more info");
        this.setState({infoVisible: true});
    }

}









export default About;