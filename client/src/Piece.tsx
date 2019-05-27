import React from "react";

export default class Piece extends React.Component {
    private onClick() {
        // alert("hi");
        fetch("/api/test")
            .then(response=>{
                console.log(JSON.stringify(response));
                return response.json();
            })
            .then(data=>alert(JSON.stringify(data)));
    }
    public render(){
        return (
            <button onClick={this.onClick}>
                click me!
            </button>
        );
    }
}