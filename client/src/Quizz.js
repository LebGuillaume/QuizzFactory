import React, {Component} from 'react';
import Home from "./Home.js";
import {quizzes} from "./examples";
import {HTTP_SERVER_PORT_PICTURES} from "./constants";

class Question extends Component{


    render(){


        return (
            <div>
                <h3>{this.props.q.question}</h3>
                <ul>
                {this.props.q.txtAnswers.map( x =>{
                   return <li> <input type='checkbox' id={x} name={x}/>  <label for={x}>{x}</label></li>

                })}
                {this.props.q.imgAnswers.map( x =>{
                        return <li> <input type='checkbox' id={x} name={x}/>  <label for={x}><img src={HTTP_SERVER_PORT_PICTURES + x} /></label></li>

                })}
                </ul>
            </div>
        );
    }

}
class Quizz extends Component{
    constructor(props) {
        super(props);
        this.quizz = quizzes.filter(q=> q._uid == this.props.match.params.id)[0];
        this.state = {current : 1};
    }
    render(){
        return (
        <div>
            {this.quizz.name}
            <Question q={this.quizz.questions[this.state.current]} />
        </div>
        )
    }

}

export default Quizz;



