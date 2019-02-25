import React, {Component} from 'react';

import {quizzes, users} from './examples';
import {HTTP_SERVER_PORT_PICTURES} from './constants.js';
import {Link} from 'react-router-dom';


class Thumbnail extends Component {

    render() {
        return (
            <div>

                {this.props.quizz.name}
                <Link to={'./quizz/'+this.props.quizz._uid}><img src={HTTP_SERVER_PORT_PICTURES + this.props.quizz.icon} /></Link>
            </div>

        );
    }
}


class Home extends Component {

    render() {
        return (

                <div>
                    {quizzes.map(q=> <Thumbnail quizz={q}/>)}
                   </div>

        );
    }
}

export default Home;
