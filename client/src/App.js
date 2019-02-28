import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Link} from 'react-router-dom';
import Home from "./Home.js";
import About from "./About.js";
import Quizz from "./Quizz.js";
import AddQuiz from"./AddQuiz.js"
import AddQuestion from"./AddQuestion.js"

import {quizzes, users} from './examples';
import {HTTP_SERVER_PORT_PICTURES} from './constants.js';
import {HTTP_SERVER_PORT_PICTURES_PUBLIC} from "./constants";


class App extends Component {

    render() {

        return (
            <BrowserRouter>

                <div>


                    <nav className='nav_bar'>

                        <ul className="menu_deco">
                            <li><Link to={'/'}>Home page</Link></li>
                            <li><Link to={'/about'}>About page</Link></li>

                            <li><Link  to={'/AddQuiz'}>Add a quizz</Link>  </li>


                        </ul>
                    </nav>

                    <Switch>
                        <Route exact={true} path="/" component={Home}/>
                        <Route exact={true} path="/about" component={About}/>
                        <Route exact={true} path="/quizz/:id" component={Quizz}/>
                        <Route exact={true} path="/AddQuiz" component={AddQuiz}/>
                        <Route exact={true} path="/AddQuestion" component={AddQuestion}/>
                        <Route path="*" component={() => <p>Page Not Found</p>}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );

    }
}

export default App;
