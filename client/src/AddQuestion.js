import React, {Component} from 'react';
import axios from "axios";
import {HTTP_SERVER_PORT, test} from "./constants";
import Redirect from "react-router-dom/es/Redirect";

class TxtAnswer extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="quizTextAnswer1">Text answer 1</label>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input type="checkbox" id="checkbo1" className="checkboxes" aria-label="Checkbox for following text input"/>
                                    </div>
                                </div>
                                <input name="quizTextAnswer1" id="quizTextAnswer1"
                                       className="form-control input_txt"
                                       placeholder="" type="text" required/>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="quizTextAnswer2">Text answer 2</label>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input type="checkbox" id="checkbox2" className="checkboxes" aria-label="Checkbox for following text input"/>
                                    </div>
                                </div>
                                <input name="quizTextAnswer2" id="quizTextAnswer2"
                                       className="form-control input_txt"
                                       placeholder="" type="text" required/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="quizTextAnswer3">Text answer 3</label>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input type="checkbox" id="checkbo3" className="checkboxes" aria-label="Checkbox for following text input"/>
                                    </div>
                                </div>
                                <input  name="quizTextAnswer3" id="quizTextAnswer3"
                                       className="form-control input_txt"
                                       placeholder="" type="text" required/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="quizTextAnswer4">Text answer 4</label>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input type="checkbox" id="checkbo4" className="checkboxes" aria-label="Checkbox for following text input"/>
                                    </div>
                                </div>
                                <input  name="quizTextAnswer4" id="quizTextAnswer4"
                                       className="form-control input_txt"
                                       placeholder="" type="text" required/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <input type="button" onClick={e => this.addquestionTxt(e)} className="btn btn-primary"
                                   value="Next question"/>
                            <input type="submit" className="btn btn-primary " value="Finalize the quiz"/>
                        </div>

                    </div>

                </div>
            </div>

        )
    }
}

class ImgAnswer extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="quizpicture1">Answer picture 1:</label>

                            <input type="file"
                                   id="quizpicture1" name="quizpicture1"
                                   accept="image/png, image/jpeg" required/>

                        </div>

                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="quizpicture2">Answer picture 2:</label>

                            <input type="file"
                                   id="quizpicture2" name="quizpicture2"
                                   accept="image/png, image/jpeg" required/>

                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="quizpicture3">Answer picture 3:</label>

                            <input type="file"
                                   id="quizpicture3" name="quizpicture3"
                                   accept="image/png, image/jpeg" required/>

                        </div>

                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="quizpicture4">Answer picture 4:</label>

                            <input type="file"
                                   id="quizpicture4" name="quizpicture4"
                                   accept="image/png, image/jpeg" required/>

                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <input type="button" onClick={e => this.addquestionImg(e)} className="btn btn-primary"
                                   value="Next question"/>
                            <input type="submit" className="btn btn-primary " value="Finalize the quiz"/>
                        </div>

                    </div>

                </div>
            </div>
        )

    }
}

class AddQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: null,
            lastquizz: null,
            QuestionType: "txt"
        }
        this.loadData();
    }

    async loadData() {
        console.log(1);
        const lastquizz = (await axios.get('http://localhost:8081/getquizz/' + this.props.match.params.id)).data;
        console.log(2);
        this.setState({
            lastquizz: lastquizz
        });
        console.log(3);
        console.log(this.state.lastquizz);

    }

    addquestionTxt(e) {
        e.preventDefault();
        let txtAnswers = [];
        let imgAnswers = [];
        let solutions = [];
        let y = document.getElementsByClassName("input_txt");
        let yz = document.getElementsByClassName("checkboxes");
        console.log(y);
        for (let i = 0; i < y.length; i++) {

            txtAnswers.push(y[i].value);

            if(yz[i].checked){
                solutions.push(i);
            }
        }
        console.log(txtAnswers,imgAnswers,solutions);
        console.log(e.target.className);



        let question = {
            question:document.getElementById('question').value,
            video: null,
            txtAnswers: txtAnswers,
            imgAnswers: imgAnswers,
            solutions: solutions,
            points: 3
        };

        console.log(this.props.match.params.id);
        axios.patch(HTTP_SERVER_PORT + 'addquestion', {  // The json object to add in the collection
            quizId:this.props.match.params.id,
            question: question,
        }).then(res => {
            if (res.status === 200) {
                this.setState({current: 1});
                this.loadData();
            } else
                console.log("Failed to add questionTXT");
        }).catch(err => console.log("Error =>", err));
    }

    addquestionImg(e) {
        e.preventDefault();
        let question = document.getElementById('question').value;
        const selectedFile = e.target.quizpicture.files[0];
        const data = new FormData();
        data.append('file', selectedFile, selectedFile.name);

        console.log(selectedFile.name);
        console.log(data);

        axios.post(HTTP_SERVER_PORT + "upload", data).then(res => console.log("Res", res));
        axios.post(HTTP_SERVER_PORT + 'addquiz', {  // The json object to add in the collection
            question: question,
            video: null,
            txtAnswers: ["in the living room", "in the kitchen", "in the garden", "in the bathroom"],
            imgAnswers: [],
            solutions: [1, 2],
            points: 3
        }).then(res => {
            if (res.status === 200) {
                this.setState({current: 1});
                this.loadData();
            } else
                console.log("Failed to add quiz");
        }).catch(err => console.log("Error =>", err));
    }

    setType(e) {
        let newType = e.target.value;
        this.setState({
            QuestionType: newType
        });
    }

    render() {
        if (this.state.lastquizz == null) {
            return <p>Loading ...</p>
        }
        if (this.state.QuestionType === "txt") {
            var ShowAnswer = <TxtAnswer/>;
        } else if (this.state.QuestionType === "img") {
            var ShowAnswer = <ImgAnswer/>;
        }
        return (
            <div className="container">

                <form onSubmit={e => this.addquestionTxt(e)}>
                    <h4>Quiz name:{this.state.lastquizz.name}</h4>
                    <h2> ADD A QUESTION</h2>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="question">Question</label>
                                <input type="text" className="form-control" placeholder="" id="question"
                                       required/>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="quizAnswerType">Answers are :</label>
                                <div className="radio">
                                    <label>
                                        <input type="radio" onChange={e => this.setType(e)} name="quizAnswerType"
                                               id="quizAnswerType" value="img" />Images
                                    </label>
                                </div>
                                <div className="radio">
                                    <label>
                                        <input type="radio" onChange={e => this.setType(e)} name="quizAnswerType"
                                               id="quizAnswerType" value="txt"/>Text
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    {ShowAnswer}





                </form>
            </div>


        )
    }
}

export default AddQuestion;