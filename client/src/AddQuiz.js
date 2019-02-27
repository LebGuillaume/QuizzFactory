import React, {Component} from 'react';
import axios from "axios";
import {HTTP_SERVER_PORT,test} from "./constants";
import Redirect from "react-router-dom/es/Redirect";

class AddQuiz extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            current: null
        }
    }

    addquiz(e){
             e.preventDefault();
        let qname=document.getElementById('quizname').value;
        let qkey=document.getElementById('quizkey').value.split(";");
        let Qdesc =  document.getElementById('textarea');
             const selectedFile = e.target.quizpicture.files[0];
             const data = new FormData();
             data.append('file', selectedFile, selectedFile.name);
             console.log(selectedFile.name);
             console.log(data);
             axios.post(HTTP_SERVER_PORT + "upload", data).then(res => console.log("Res", res));
            axios.post(HTTP_SERVER_PORT + 'addquiz', {  // The json object to add in the collection
            name:qname,
            description:Qdesc.value,
            published:true,
            keywords:qkey,
            icon:selectedFile.name

         }).then(res => {
           if (res.status === 200)
               this.setState({current:1});

     //        this.loadData();                     // If everything is ok, reload data in order to upadate the component
           else
             console.log("Failed to add quiz");
         }).catch(err => console.log("Error =>", err));
    }

/*
     addquiz(e) {
        e.preventDefault();
        console.log(1);
        let Qname = document.getElementById('prependedtext');
        let Qdesc =  document.getElementById('textarea');
        //let Qkeywords = document.getElementById('keywords').split(":");

        const  quizz = ( axios.post(HTTP_SERVER_PORT + 'addquiz', {  // The json object to add in the collection
            name: Qname.value,
            description : Qdesc.value,
            icon:selectedFile.name
       //     keywords:Qkeywords

        }).then(res => {
            if (res.status === 200)
           console.log('ok');                  // If everything is ok, reload data in order to upadate the component
            else
                console.log("Failed to add quizz");
        }).catch(err => console.log("Error =>", err)));
        if(e.target.quizpicture.files[0]!=null){
            this.addpicture(e);
         }
    }
    addpicture(e) {
        e.preventDefault();
        const selectedFile = e.target.quizpicture.files[0];
        console.log(selectedFile.name);
        const data = new FormData();
        data.append('toto','titi');
        data.append('file', selectedFile, selectedFile.name);
        console.log("data",data);
        for (var key of data.entries()) {
            console.log(key[0] + ', ' + key[1]);
        }
        axios.post(HTTP_SERVER_PORT + "upload", data).then(res => {
            if (res.status === 200)
                this.setState({current:1});         // If everything is ok, reload data in order to upadate the component
            else
                console.log("Failed to add quizz");
        }).catch(err => console.log("Error =>", err));
    }
*/

        render()
        {
        if(this.state.current==1){
            return <Redirect to="/"/>
        }
            return(
                <div className="container">
                    <form className="form-horizontal" onSubmit={e=>this.addquiz(e)}>
                        <fieldset>

                            <legend>Add a quiz form</legend>

                            <div className="form-group">

                                <div className="col-md-5">
                                    <div className="input-group">
                                        <span className="input-group-addon">Quiz title</span>
                                        <input id="prependedtext" name="prependedtext" id="quizname" className="form-control"
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

                                <label className="col-md-4 control-label" htmlFor="selectbasic">Select Basic</label>
                                <div className="col-md-2">
                                    <select id="selectbasic" name="selectbasic" className="form-control">
                                        <option value="1">Option one</option>
                                        <option value="2">Option two</option>
                                    </select>
                                    <input id="keywords" name="keywords" id="quizkey" className="form-control"
                                    placeholder="placeholder" type="text" required/>

                                </div>
                            </div>
                            <input type="submit"/>

                        </fieldset>
                    </form>
                </div>
        )
    }
}

export default AddQuiz;