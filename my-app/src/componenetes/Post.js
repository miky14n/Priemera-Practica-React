import React, { Component } from 'react';
import Axios from 'axios';
class Post extends Component {
    constructor (props){
        super(props)
        this.state={
            ci:'',
            name: '',
            lastName: '',
            birthdate:''
        }
        
      }
      changeHandler = (e)=>{
        this.setState({[e.target.name]: e.target.value})
      }
      submitHandler = e =>{
        e.preventDefault()
        console.log(this.state)
        
        Axios.post('https://ucb-tde-ninos-con-valor-api.herokuapp.com/api/kids').then(response =>{
            console.log(response)
        })
      }
    render() {
        const {ci,name,lastName,birthdate}= this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name='ci' value={ci} onChange={this.changeHandler}></input>
                    </div>
                    <div>
                        <input type="text" name='names' value={name} onChange={this.changeHandler}></input>
                    </div>
                    <div>
                        <input type="text" name='lastName' value={lastName} onChange={this.changeHandler}></input>
                    </div>
                    <div>
                        <input type="text" name='birthdate' value={birthdate} onChange={this.changeHandler}></input>
                    </div>
                    <button type='submit'>Guardar</button>
                </form>
            </div>
        );
    }
}

export default Post;