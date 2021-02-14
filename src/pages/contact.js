import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Contact(props) {
    return (
        <div style={{color: 'blue'}}>
            <Link to="/">Home</Link>
            <Header headerText="Contact" />
            <p>Contact me</p>
        </div>
    );
}