import React, { Component } from 'react';


class RowInput extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { label, type, name, value, onChange } = this.props
        return (
            <div className="rowInput">
                <label>{label}</label>
                <input type={type} name={name} value={value} onChange={onChange} />
            </div>
        );
    }
}

export default RowInput;