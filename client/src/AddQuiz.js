import React, {Component} from 'react';

class AddQuiz extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state= {
            accounts: ['ala', 'mark', 'nngg', 'wweerr'],
            value: 'grapefruit',
            categoris: ['grapefruit','lime','coconut','mango'],
            name: undefined,
            questions:[],
            question:{name:undefined,answer1:{text:undefined,correct:undefined},answer2:{text:undefined,correct:undefined},answer3:{text:undefined,correct:undefined},answer4:{text:undefined,correct:undefined}}
        }
        ;


    }
    renderItem(index, key) {
        return (<div key={key}>{this.state.accounts[index]}</div>);
    }
    routeChange(e) {
        e.preventDefault();
        // let path = `http://localhost:3000`;
        // history.push(path);
        //console.log(e.target.elements.select);
        let j=-1;
        for(let i=0;i<e.target.elements.length+1;i++)
        {
            //console.log(this.state.categoris[i])
            if(this.state.value==this.state.categoris[i])
            {
                j=i;
            }
        }
        let table=e.target.elements;
        console.log(table[0].valueOf());
        console.log("Selected value is: "+j);
        console.log("quiz name is: "+this.state.name);
        // console.log(e.target.elements);
        // console.log(e.target.elements);

    }
    handleChange(event) {
        //console.log(event.target.value);
        this.setState({value: event.target.value});
    }
    updateInputValue(event)
    {
        //console.log(event.target.value);
        this.setState({name: event.target.value})
        //console.log(event.target.value);
    }
    setNameValue(e)
    {
        this.state.question.name=e.target.value;
        //this.setState({question:})
        console.log(this.state.question.name)
    }
    setq1Value(e)
    {
        console.log(this.state.question.answer1.text)
        this.state.question.answer1.text=e.target.value;
    }
    setq2Value(e)
    {
        console.log(this.state.question.answer2.text)
        this.state.question.answer2.text=e.target.value;
    }
    setq3Value(e)
    {
        console.log(this.state.question.answer3.text)
        this.state.question.answer3.text=e.target.value;
    }
    setq4Value(e)
    {
        console.log(this.state.question.answer4.text)
        this.state.question.answer4.text=e.target.value;
    }
    setq1Correction(e)
    {
        console.log(e.targete.target.value);
        this.state.question.answer1.correct=e.targete.target.value;
    }
    setq2Correction(e)
    {
        console.log(e.targete.target.value);
        this.state.question.answer2.correct=e.targete.target.value;
    }
    setq3Correction(e)
    {
        console.log(e.targete.target.value);
        this.state.question.answer3.correct=e.targete.target.value;
    }
    setq4Correction(e)
    {
        console.log(e.targete.target.value);
        this.state.question.answer4.correct=e.targete.target.value;
    }



    addQuestion(e)
    {
        e.preventDefault();
        console.log(this.state.question.answer2.text);
        this.state.questions.push(this.state.question);
    }



    render()
    {
        let alas=[1,2,3];
        return(
            <div>
                <ul>
                    <form onSubmit= {e=>{this.routeChange(e)}}>
                    Quiz name:<br/>
                    <input type='text' name='qName' onChange={e=>this.updateInputValue(e)}/>
                    <br/>
                    category:<br/>
                    <label htmlFor="categorys">category</label>
                        <select value={this.state.value} onChange={e=>this.handleChange(e)}>
                        <option defaultValue value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select><br/>
                    questions:<br/>
                    {/*showing all questions*/}
                    {this.state.accounts.map(a => <div key={a}>{a}</div>)}
                    <input type='submit' value='add quiz'/>
                    </form>
                    <form onSubmit={e=>this.addQuestion(e)}>
                        question name:<br/>
                        <input type='text' onChange={e=>this.setNameValue(e)}/><br/>
                        answer 1:<br/>
                        <input type='text' onChange={e=>this.setq1Value(e)}/><input type='checkbox' onChange={e=>this.setq1Correction(e)}/><br/>
                        answer 2:<br/>
                        <input type='text' onChange={e=>this.setq2Value(e)}/><input type='checkbox' onChange={e=>this.setq2Correction(e)}/><br/>
                        answer 3:<br/>
                        <input type='text' onChange={e=>this.setq3Value(e)}/><input type='checkbox' onChange={e=>this.setq3Correction(e)}/><br/>
                        answer 4:<br/>
                        <input type='text' onChange={e=>this.setq4Value(e)}/><input type='checkbox' onChange={e=>this.setq4Correction(e)}/><br/>
                        <input type='submit' value='add question' />
                    </form>
                </ul>
            </div>
        )
    }
}

export default AddQuiz;