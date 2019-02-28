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
                            <input type="button" onClick={e => this.addquestion(e)} className="btn btn-primary"
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
                            <label htmlFor="quizpicture1">Answer picture 1</label>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input type="checkbox"  className="checkboxes_File_Input" aria-label="Checkbox for following text input"/>
                                    </div>
                                </div>
                                <input type="file"
                                       id="quizpicture1" name="quizpicture1"
                                       accept="image/png, image/jpeg" className="File_Inupt" />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="quizpicture2">Answer picture 2</label>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input type="checkbox"  className="checkboxes_File_Input" aria-label="Checkbox for following text input"/>
                                    </div>
                                </div>
                                <input type="file"
                                       id="quizpicture1" name="quizpicture2"
                                       accept="image/png, image/jpeg" className="File_Inupt" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="quizpicture3">Answer picture 3</label>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input type="checkbox"  className="checkboxes_File_Input" aria-label="Checkbox for following text input"/>
                                    </div>
                                </div>
                                <input type="file"
                                       id="quizpicture3" name="quizpicture3"
                                       accept="image/png, image/jpeg" className="File_Inupt" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="quizpicture4">Answer picture 4</label>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input type="checkbox"  className="checkboxes_File_Input" aria-label="Checkbox for following text input"/>
                                    </div>
                                </div>
                                <input type="file"
                                       id="quizpicture4" name="quizpicture4"
                                       accept="image/png, image/jpeg" className="File_Inupt" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <input type="button" onClick={e => this.addquestion(e)} className="btn btn-primary"
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

    addquestion(e) {
        e.preventDefault();
        if(this.state.QuestionType==="txt"){
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
        }else {

                let txtAnswers = [];
                let imgAnswers = [];
                let solutions = [];
                let y = document.getElementsByClassName("File_Inupt");
                let yz = document.getElementsByClassName("checkboxes_File_Input");
                let question = document.getElementById('question').value;
                let NewImgAnswer = [];
                console.log(y);

                for (let i = 0; i < y.length; i++) {
                    if( y[i].files.length !== 0 ){
                        imgAnswers.push(y[i].getAttribute('name'));
                    }

                    if (yz[i].checked) {
                        solutions.push(i);
                    }
                }
                console.log(txtAnswers, imgAnswers, solutions);
                console.log(imgAnswers);

                for (let i = 0; i < imgAnswers.length; i++) {
                    let x = y[i];
                    console.log("x ="+ x);
                    const selectedFile = x.files[0];
                    const data = new FormData();
                    data.append('file', selectedFile, selectedFile.name);
                    console.log(selectedFile.name);
                    NewImgAnswer.push(selectedFile.name);
                    console.log(data);
                    axios.post(HTTP_SERVER_PORT + "upload", data).then(res => console.log("Res", res));
                    console.log('Fin dupload');
                };


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

                <form onSubmit={e => this.addquestion(e)}>
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