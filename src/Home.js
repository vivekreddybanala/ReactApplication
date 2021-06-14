import Axios from 'axios';
import React, { Component } from 'react';
import './App.css';
import { Panel } from 'react-bootstrap';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { posts: [] };
    }

    componentDidMount() {
        this.setState({ name: 'vivek' });
        this.getPosts();
    }

    getPosts() {
        console.log('hit');
        Axios.get('https://jsonplaceholder.typicode.com/todos').then(data => {
            console.log(data.data);
            this.setState({ posts: data.data })
        })
    }

    render() {
        return (
            <div>

                {this.state.posts.map(element => {
                    return (
                        <Panel className="postsPanel" bsStyle="primary">
                            <Panel.Heading>
                                <Panel.Title componentClass="h3">{element.id}</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>{element.title}</Panel.Body>
                        </Panel>
                    )
                }).slice(0, 20)}

            </div>
        );
    }
}

export default Home;
