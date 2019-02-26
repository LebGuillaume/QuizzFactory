import React, {Component} from 'react';

import {quizzes, users} from './examples';
import {HTTP_SERVER_PORT_PICTURES} from './constants.js';
import {Link} from 'react-router-dom';


class Thumbnail extends Component {

    render() {
        return (
            <div className="col-lg-4 col-sm-6 mb-4">
                <div className="card h-100">
                    <Link to={'./quizz/'+this.props.quizz._uid}><img className="card-img-top" src={HTTP_SERVER_PORT_PICTURES + this.props.quizz.icon} /></Link>
                    <div className="card-body">
                        <h4 className="card-title">
                            <a href="#">{this.props.quizz.name}</a>
                        </h4>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam
                            aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt,
                            dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>
                    </div>
                </div>
            </div>

        );
    }
}


class Home extends Component {

    render() {
        return (
            <div  className="row">
                {quizzes.map(q=> <Thumbnail quizz={q}/>)}
             </div>

        );
    }
}

export default Home;
