import React, {Component} from 'react';
import Home from "./Home.js";
import {quizzes} from "./examples";
import {HTTP_SERVER_PORT_PICTURES} from "./constants";

import axios from 'axios';


class Question extends Component {





    render() {
    console.log(this.props.q.txtAnswers);
    if(this.props.q.video == null){
        return(
            <div>
            <form onSubmit={e => this.props.nextQuestion(e)}>

                <h3>{this.props.q.question}</h3>
                <ul className="question_list">
                    {this.props.q.txtAnswers.map(x => {
                        return <li><input className='realInput' type='checkbox' id={x} name={x}/> <label
                            className='realLabel' htmlFor={x}>{x}</label></li>

                    })}
                    {this.props.q.imgAnswers.map(x => {
                        return <li><input type='checkbox' id={x} name={x}/> <label label htmlFor={x}>


                            <img
                                src={HTTP_SERVER_PORT_PICTURES + x}/></label></li>

                    })}
                </ul>
                <input id="button" type="submit" value="Next question"/>
            </form>
        </div>
        )


    }else if(this.props.q.video !== null){
        return(
            <div>
            <form onSubmit={e => this.props.nextQuestion(e)}>

                <h3>{this.props.q.question}</h3>
                <video width="1040" height="680" controls={false} autoPlay muted>
                    <source src={HTTP_SERVER_PORT_PICTURES+this.props.q.video} type="video/mp4"/>

                </video>

                <ul className="question_list">
                    {this.props.q.txtAnswers.map(x => {
                        return <li><input className='realInput' type='checkbox' id={x} name={x}/> <label
                            className='realLabel' htmlFor={x}>{x}</label></li>

                    })}
                    {this.props.q.imgAnswers.map(x => {
                        return <li><input type='checkbox' id={x} name={x}/> <label label htmlFor={x}>


                            <img src={HTTP_SERVER_PORT_PICTURES + x}/></label></li>

                    })}
                </ul>
                <input id="button" type="submit" value="Next question"/>
            </form>
        </div>
        )
    }
        return (

                <div>
                    <form onSubmit={e => this.props.nextQuestion(e)}>

                        <h3>{this.props.q.question}</h3>
                        <ul className="question_list">
                            {this.props.q.txtAnswers.map(x => {
                                return <li><input className='realInput' type='checkbox' id={x} name={x}/> <label
                                    className='realLabel' for={x}>{x}</label></li>

                            })}
                            {this.props.q.imgAnswers.map(x => {
                                return <li><input type='checkbox' id={x} name={x}/>  <label label for={x}>



                                    <img
                                        src={HTTP_SERVER_PORT_PICTURES + x}/></label></li>

                            })}
                        </ul>
                        <input id="button" type="submit" value="Next question"/>
                    </form>
                </div>

        );
    }

}

class Quizz extends Component {
    constructor(props) {
        super(props);


        this.state = {
            current : 0,
            score : 0,
            quizz : null,

        };
        this.NextQuestion = this.NextQuestion.bind(this);
        this.loadData();
    }

    async loadData() {
        console.log(1);
        const  quizz = (await axios.get('http://localhost:8081/getquizz/'+this.props.match.params.id)).data;
        console.log(2);

        console.log(quizz);
        this.setState({
                quizz :quizz
            });
        console.log(3);
        console.log(this.state.quizz);

    }





    isEquivalent(a, b) {
        // Create arrays of property names
        if (a.length != b.length) {
            return false;
        }

        for (var i = 0; i < a.length; i++) {

            if (a[i] !== b[i]) {
                return false;
            }
        }

        // If we made it this far, objects
        // are considered equivalent
        return true;
    }


    NextQuestion(e) {
        e.preventDefault();
        let choices = [];


        for (let i = 0; i < e.target.elements.length; i++) {
            if (e.target.elements[i].checked) {
                choices.push(i);
            }


        }
        if (choices.length == 0) {
            alert("You must check at least one checkbox.");
            return false;
        }

        if(this.isEquivalent(choices,this.state.quizz.questions[this.state.current].solutions)){
                let newScore = parseInt(this.state.score + this.state.quizz.questions[this.state.current].points);
                console.log(newScore);
                this.setState({score : newScore});


            console.log(newScore);

        }
        let Newcurr = this.state.current + 1;

        this.setState({current: Newcurr});
        console.log(choices);


    }


    render(){
        if(this.state.quizz == null) {

            console.log(this.state.quizz);
            return <p>Loading ...</p>;
        }


        if(this.state.current == this.state.quizz.questions.length){


            return (
                <div>
                    Fin du quizz : score : {this.state.score}
                </div>
            )
        }
        return (

            <div className="container">
                <div className="QuizzName">
                    {this.state.quizz.name}
                    <Question q={this.state.quizz.questions[this.state.current]} nextQuestion={this.NextQuestion}/>
                </div>
            </div>





        )
    }

}

export default Quizz;



