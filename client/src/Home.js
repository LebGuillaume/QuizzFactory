import React, {Component} from 'react';

import {quizzes, users} from './examples';
import {HTTP_SERVER_PORT_PICTURES, HTTP_SERVER_PORT} from './constants.js';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Thumbnail extends Component {

    render() {
        return (


            <div className="col-lg-4 col-sm-6 mb-4">

                <div className="box-shadow card h-100">
                    <Link to={'./quizz/' + this.props.quizz._id}><img className="card-img-top"
                                                                      src={HTTP_SERVER_PORT_PICTURES + this.props.quizz.icon}/></Link>

                    <div className="card-body">
                        <h4 className="card-title">
                            <p>{this.props.quizz.name}</p>
                        </h4>
                        <p className="card-text">{this.props.quizz.description}</p>

                    </div>
                </div>
            </div>


        );
    }
}


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {quizzes: []};
        this.loadData();

    }


    async loadData() {
        console.log(1);

        const quizzes = (await axios.get(HTTP_SERVER_PORT + 'quizz')).data;  // We need to wait for the response.
        console.log(2);
        console.log(quizzes);
        this.setState({quizzes: quizzes});
    }


    render() {

        return (
            <div className="container">

                <div className="row">
                    {this.state.quizzes.map(q => <Thumbnail quizz={q}/>)}
                </div>

            </div>
        );
    }
}

export default Home;
