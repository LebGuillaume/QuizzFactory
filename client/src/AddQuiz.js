import React, {Component} from 'react';
import axios from "axios";
import {HTTP_SERVER_PORT, test} from "./constants";
import Redirect from "react-router-dom/es/Redirect";

class AddQuiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: null,
            lastquizz: null
        }
    }

    addquiz(e) {
        e.preventDefault();
        let qname = document.getElementById('quizname').value;
        let qkey = document.getElementById('quizcategorie').value.split(";");
        let Qdesc = document.getElementById('quizdescription');
        const selectedFile = e.target.quizpicture.files[0];
        const data = new FormData();
        data.append('file', selectedFile, selectedFile.name);
        console.log(selectedFile.name);
        axios.post(HTTP_SERVER_PORT + "upload", data).then(res => console.log("Res ligne 24", res));
        axios.post(HTTP_SERVER_PORT + 'addquiz', {  // The json object to add in the collection
            name: qname,
            description: Qdesc.value,
            published: true,
            keywords: qkey,
            icon: selectedFile.name

        }).then(res => {
            if (res.status === 200) {

                this.setState({current: 1});
                this.loadData();
            } else
                console.log("Failed to add quiz");
        }).catch(err => console.log("Error =>", err));
    }

    async loadData() {
        console.log(1);
        const lastquizz = (await axios.get('http://localhost:8081/getlast/')).data[0];
        console.log(2);

        this.setState({
            lastquizz: lastquizz
        });
        console.log(3);
        console.log("Ligne 50 retour de l'id du dernier quizz en BD" + this.state.lastquizz._id);

    }


    render() {
        if (this.state.lastquizz != null) {
            return <Redirect to={"/AddQuestion/" + this.state.lastquizz._id}/>
        }
        return (
            <div className="container">

                <form onSubmit={e => this.addquiz(e)}>
                    <h2>ADD A QUIZ</h2>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="quizname">Quiz title</label>
                                <input type="text" className="form-control" placeholder="My super quiz !" id="quizname" required/>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="quizdescription">Quiz description</label>
                                <textarea className="form-control" id="textarea" name="textarea" id="quizdescription" placeholder="Type a short description of the quiz"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="quizcategorie">Categories</label>
                                <input id="keywords" name="keywords" id="quizcategorie" className="form-control"
                                       placeholder="Example: Sport:Cinema:History" type="text" required/>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="quizpicture">Choose a quiz picture:</label>

                                <input type="file"
                                       id="quizpicture" name="quizpicture"
                                       accept="image/png, image/jpeg" required/>

                            </div>
                        </div>
                    </div>




                    <input type="submit" className="btn btn-primary" value="Submit"/>
                </form>
            </div>


        /*
                        <form className="form-horizontal" onSubmit={e => this.addquiz(e)}>
                            <fieldset>

                                <legend>Add a quiz form</legend>

                                <div className="form-group">

                                    <div className="col-md-5">
                                        <div className="input-group">
                                            <span className="input-group-addon">Quiz title</span>
                                            <input id="prependedtext" name="prependedtext" id="quizname"
                                                   className="form-control"
                                                   placeholder="placeholder" type="text" required/>
                                        </div>

                                    </div>
                                </div>

                                <div className="form-group">

                                    <div className="col-md-4">
                                            <textarea className="form-control" id="textarea"
                                                      name="textarea"/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="avatar">Choose a profile picture:</label>

                                    <input type="file"
                                           id="quizpicture" name="quizpicture"
                                           accept="image/png, image/jpeg"/>


                                        <input id="keywords" name="keywords" id="quizkey" className="form-control"
                                               placeholder="placeholder" type="text" required/>


                                </div>
                                <input type="submit"/>

                            </fieldset>
                        </form>
                    </div>
                    */
    )
    }
    }

    export default AddQuiz;