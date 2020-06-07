import React, { Component } from 'react';
import axios from 'axios';
import Post from '../Components/Post/Post';
import FullPost from '../Components/FullPost/FullPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedId: null,
        error: false,
    }
    componentDidMount(){
        
        axios.get('http://jsonplaceholder.typicode.com/photos')
        .then(res => {
            const postes = res.data.slice(0, 6);
            const updatedPost = postes.map(post =>{
            return {
                ...post,
            }
        });
            this.setState({posts: updatedPost});
        })
        .catch( error => {
            this.setState({error: true});
        });
    }
    selectedPostHandler=(id)=>{
        this.setState({selectedId: id})
    }

    render () {
        let posts = <h1 style={{textAlign :'center'}}>Oops, Something went wrong!!!</h1>
        if(!this.state.error){
            posts = this.state.posts.map(post => {
            return <Post 
            key={post.id} 
            title={post.title} 
            photo={post.url}
            clicked={()=>this.selectedPostHandler(post.id)}/> 
        });
    }
        return (
            <div>
                <section>
                    <FullPost id={this.state.selectedId}/>
                </section>
                <section className="Posts">
                    {posts}
                </section>
            </div>
        );
    }
}

export default Blog;