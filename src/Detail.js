import React, { Component } from "react";
import { render } from "react-dom";

class Detail extends React.Component {h
ComponentDidMount(){
        const {location, history} = this.props;
        if (location.state === undefined){
            history.push('/');
        }
    }


render(){
   const {location} = this.props;
   if (location.state){
   return <span>{location.state.title}</span>
   }

   else{
       return null;
   }
}
}
export default Detail;