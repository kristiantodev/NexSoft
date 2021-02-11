import React, { Component } from 'react';

import { RowInput } from "../../component"

class Hewan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            update : false
        }
    }

    setValue = el => {
        this.setState({
            [el.target.name]: el.target.value
        })
    }

    render() {
        if("username" in this.props.hewanEdit){
            this.setState({
            username : this.props.hewanEdit.username
                
            })

            this.props.reset();
        }
        console.log(this.props.hewanEdit)
        const { username} = this.state
        return (
            <div>
                <center><h2>FORM JENIS HEWAN</h2></center>
                <RowInput label="Hewan" type="text" name="username" onChange={this.setValue} value={username}/>
                <div>
                    <button className="button" onClick={() => this.props.save({ username})}>Simpan</button>
                </div>
            </div>
        );
    }
}

export default Hewan;