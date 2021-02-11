import React, { Component } from 'react';
import { Link } from "react-router-dom"

import { Menu } from "../../component"
import "./style.css"

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        console.log("nav:", this.props.page);
        const { changePage } = this.props
        return (
            <div>
                <Link to="/">
                    <Menu redirect={() => changePage("home")}>Home</Menu>
                </Link>
                <Link to="/about">
                    <Menu redirect={() => changePage("about")}>Hewan</Menu>
                </Link>
                <Link to="/hewan">
                    <Menu redirect={() => changePage("hewan")}>Form Hewan</Menu>
                </Link>
                <Link to="/lokasi">
                    <Menu redirect={() => changePage("lokasi")}>Lokasi</Menu>
                </Link>
                <Link to="/formlokasi">
                    <Menu redirect={() => changePage("formlokasi")}>Form Lokasi</Menu>
                </Link>
                <Link to="/customer">
                    <Menu redirect={() => changePage("customer")}>Customer</Menu>
                </Link>
                <Link to="/formcustomer">
                    <Menu redirect={() => changePage("formcustomer")}>Form Customer</Menu>
                </Link>
                <Link to="/transaksi">
                    <Menu redirect={() => changePage("transaksi")}>Transaksi Penjagalan</Menu>
                </Link>
                <Link to="/formtransaksi">
                    <Menu redirect={() => changePage("formtransaksi")}>Form Transaksi Penjagalan</Menu>
                </Link>
                <Link to="/login">
                    <Menu redirect={() => changePage("login")}>Login</Menu>
                </Link>
            </div>
        );
    }
}

export default Nav;