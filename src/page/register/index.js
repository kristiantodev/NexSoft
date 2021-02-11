import React, { Component } from 'react';

import { RowInput } from "../../component"
import "./style.css"

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            bop: "",
            hobby: []
        }
    }

    setValue = el => {
        this.setState({
            [el.target.name]: el.target.value
        })
    }

    setValueCheckbox = el => {
        const stat = el.target.checked;
        const value = el.target.value
        let hobbies = this.state.hobby
        if (stat) {
            hobbies.push(el.target.value)
        } else {
            hobbies = hobbies.filter(hobby => hobby !== value)
        }

        this.setState({
            hobby: hobbies
        })
    }

    render() {
        console.log(this.state.hobby);
        const { username, password, bop, hobby } = this.state
        return (
            <div>
                <RowInput label="Username" type="text" name="username" onChange={this.setValue} />
                <RowInput label="Password" type="password" name="password" onChange={this.setValue} />
                <RowInput label="BOP" type="text" name="bop" onChange={this.setValue} />
                <div className="rowInput">
                    <label>Hobby</label>
                    <input type="checkbox" value="A" name="hobby" onChange={this.setValueCheckbox} /> A
                    <input type="checkbox" value="B" name="hobby" onChange={this.setValueCheckbox} /> B
                    <input type="checkbox" value="C" name="hobby" onChange={this.setValueCheckbox} /> C
                </div>
                <div>
                    <button onClick={() => this.props.save({ username, password, bop, hobby })}>Simpan</button>
                </div>
            </div>
        );
    }
}

export default Register;