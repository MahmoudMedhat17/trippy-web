/* eslint-disable react/prop-types */
import { Component } from "react";


class DestinationData extends Component{
    render(){
        return(
            <div className={this.props.className}>
                <div className='desc-text'>
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>
                <div className='desc-images'>
                    <img src={this.props.img1}/>
                    <img src={this.props.img2}/>
                </div>
            </div>
        )
    }
}

export default DestinationData;