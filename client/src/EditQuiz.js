import React, {Component} from 'react';
import {HTTP_SERVER_PORT_PICTURES} from './constants.js';
import {HTTP_SERVER_PORT, HTTP_SERVER_PORT_PICTURES_PUBLIC} from "./constants";
import axios from "axios";
import Redirect from "react-router-dom/es/Redirect";

class Options extends Component {
    render() {
        console.log(this.props);
        if (this.props.quiz.keywords == "Web") {
            return (
                <div>
                    <select id="keywords" name="keywords" id="quizcategorie" className="form-control"
                            required>
                        <option selected value="Web">Web</option>
                        <option value="Linux">Linux</option>
                        <option value="Math">Math</option>
                        <option value="Logic">Logic</option>
                        <option value="Languages">Languages
                        </option>
                    </select>
                </div>
            )
        } else if (this.props.quiz.keywords == "Linux") {
            return (
                <div>
                    <select id="keywords" name="keywords" id="quizcategorie" className="form-control"
                            required>
                        <option value="Web">Web</option>
                        <option selected value="Linux">Linux</option>
                        <option value="Math">Math</option>
                        <option value="Logic">Logic</option>
                        <option value="Languages">Languages
                        </option>
                    </select>
                </div>
            )
        } else if (this.props.quiz.keywords == "Math") {
            return (
                <div>
                    <select id="keywords" name="keywords" id="quizcategorie" className="form-control"
                            required>
                        <option value="Web">Web</option>
                        <option value="Linux">Linux</option>
                        <option selected value="Math">Math</option>
                        <option value="Logic">Logic</option>
                        <option value="Languages">Languages
                        </option>
                    </select>
                </div>
            )
        } else if (this.props.quiz.keywords == "Logic") {
            return (
                <div>
                    <select id="keywords" name="keywords" id="quizcategorie" className="form-control"
                            required>
                        <option value="Web">Web</option>
                        <option value="Linux">Linux</option>
                        <option value="Math">Math</option>
                        <option selected value="Logic">Logic</option>
                        <option value="Languages">Languages
                        </option>
                    </select>
                </div>
            )
        } else if (this.props.quiz.keywords == "Languages") {
            return (
                <div>
                    <select id="keywords" name="keywords" id="quizcategorie" className="form-control"
                            required>
                        <option value="Web">Web</option>
                        <option value="Linux">Linux</option>
                        <option value="Math">Math</option>
                        <option value="Logic">Logic</option>
                        <option selected value="Languages">Languages
                        </option>
                    </select>
                </div>
            )
        }
        return (
            <div>
                <select id="keywords" name="keywords" id="quizcategorie" className="form-control"
                        required>
                    <option value="Web">Web</option>
                    <option value="Linux">Linux</option>
                    <option value="Math">Math</option>
                    <option value="Logic">Logic</option>
                    <option value="Languages">Languages
                    </option>
                </select>
            </div>
        )

    }
}


class EditQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            quiz: null
        });
        this.loadData();
    }

    async loadData() {
        console.log(1, this.props.match.params.id);
        const quiz = (await axios.get('http://localhost:8081/getquizz/' + this.props.match.params.id)).data;
        console.log(2);

        this.setState({
            quiz: quiz
        });
        console.log(3);
        console.log(this.state.quiz);
        console.log("Ligne 50 retour de l'id du dernier quizz en BD" + this.state.quiz);

    }


    updateQuiz(e) {

        if (e.target.quizpicture.files[0].name.length > 0) {
            e.preventDefault();
            console.log(e.target.quizpicture.files);
            const selectedFile = e.target.quizpicture.files[0];
            const data = new FormData();
            data.append('file', selectedFile, selectedFile.name);
            console.log(selectedFile.name);
            axios.post(HTTP_SERVER_PORT + "upload", data).then(res => console.log("Res ligne 24", res));
        }
        e.preventDefault();
        console.log(e.target.quizcategorie.options[e.target.quizcategorie.selectedIndex].value);
        axios.patch(HTTP_SERVER_PORT + 'updatequiz', {  // The json object to add in the collection
            quizId: this.props.match.params.id,
            name: e.target.quizname.value,
            description: e.target.quizname.value,
            published: true,
            keywords: e.target.quizcategorie.options[e.target.quizcategorie.selectedIndex].value,
            icon: e.target.quizpicture.files[0].name

        }).then(res => {
            if (res.status === 200) {
               return <Redirect to={"/"}/>
            } else
                console.log("Failed to add quiz");
        }).catch(err => console.log("Error =>", err));
        console.log('Sent');
    }



    deletequiz(e) {
        e.preventDefault();
        axios.delete(HTTP_SERVER_PORT + 'deletequiz', {  // The json object to add in the collection
            data:{quizId: this.props.match.params.id}
        }).then(res => {

            if (res.status === 200) {
                console.log('ok');
                this.loadData();
            } else
                console.log("Failed to add quiz");
        }).catch(err => console.log("Error =>", err));
        console.log('Sent');




    }

    render() {


        if (this.state.quiz == null) {
            return <p>Loading...</p>
        }
        console.log(this.state.quiz.keywords);
        return (
            <div className="container">

                <form className="FormAddQuizz" onSubmit={e => this.updateQuiz(e)}>
                    <h2>EDIT A QUIZZ</h2>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="quizname">Quiz title</label>
                                <input type="text" className="form-control" placeholder="My super quiz !" id="quizname"
                                       defaultValue={this.state.quiz.name} required/>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="quizdescription">Quiz description</label>
                                <textarea className="form-control" id="textarea" name="textarea" id="quizdescription"
                                          placeholder="Type a short description of the quiz"
                                          defaultValue={this.state.quiz.description}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group bootstrap-tagsinput">
                                <label htmlFor="quizcategorie">Categories</label>

                                <Options quiz={this.state.quiz}/>


                            </div>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="quizpicture">Change the quiz picture:</label>

                                <input type="file"
                                       id="quizpicture" name="quizpicture"
                                       accept="image/png, image/jpeg"/>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">

                                <img src={HTTP_SERVER_PORT_PICTURES + this.state.quiz.icon}/>
                            </div>
                        </div>
                    </div>


                    <input type="submit" className="btn btn-primary" value="Submit"/>
                    <input type="button" onClick={e=>this.deletequiz(e)} className="btn btn-danger" value="Delete"/>
                </form>
            </div>
        );
    }


}

export default EditQuiz;
