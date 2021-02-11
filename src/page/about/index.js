import React, { Component } from 'react';


class About extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
<br/>
<center><h2>DAFTAR JENIS HEWAN</h2></center>
            <table border="1"  width="50%" align="center">

                <thead>
                    <tr bgcolor="#008CBA">
                        <th><font color="white">No</font></th>
                        <th width="1000"><font color="white">Nama Hewan</font></th>
                        <th width="500"><font color="white">Action</font></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.users.map((user, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{idx + 1}</td>
                                    <td>{user.username}</td>
                                    <td>
                                       <button onClick={() =>{this.props.editHewan(idx)} }>Edit</button>
                                       <button style={{ backgroundColor : "#DC143C" }} onClick={() =>{this.props.hapusHewan(idx)} }>Hapus</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            </>
        );
    }
}

export default About;