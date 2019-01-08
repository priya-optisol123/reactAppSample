import React,{Component} from 'react';
import {PostData} from '../services/PostData';

class Login extends Component { 

    constructor(props){
        super(props);

        this.state = {
            username : '',
            password : ''
        };

        this.onChange = this.onChange.bind(this);
        this.login = this.login.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name] : e.target.value});
    }

    login(){
        PostData('login',this.state)
        .then((result) => {
            console.log(result)
        });
    }

    render(){
        return (
            <div>
                <p>Login</p>
                <label>Username</label>
                <input type="text" name="username" placeholder="Enter your username here" onChange={this.onChange} />
                <br />
                <label>Password</label>
                <input type="text" name="password" placeholder="Enter your Password here" onChange={this.onChange} />
                <br />
                <input type="submit" value="Login" onClick={this.login} />
                <a href="/signup" className="button primary" >Sign Up</a>
            </div>
        );
    }
}

export default Login;