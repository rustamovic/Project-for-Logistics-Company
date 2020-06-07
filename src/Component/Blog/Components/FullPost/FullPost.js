import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
    state={
        loaded: null
    }
    componentDidUpdate(){
        if(this.props.id){
            if(!this.state.loaded || (this.state.loaded && this.state.loaded.id !== this.props.id)){
                axios.get('http://jsonplaceholder.typicode.com/photos/'+this.props.id)
            .then(res=>{
                this.setState({loaded: res.data});
            })}}}
    render(){
        let post = <p style={{textAlign:'center'}}>Please select a Post!</p>;
        if(this.props.id){
            post = 
            <p style={{textAlign:'center'}}>Loading...</p>;
        }
        if(this.state.loaded){
        post = (
            <div className="FullPost">
            <img id='imge' alt='' src={this.state.loaded.url}/>
                <h4>{this.state.loaded.title}</h4>
            </div>
        );
    }
        return post;
    };
}
export default FullPost;