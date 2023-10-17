// frontend/src/components/UserPost.js
import React from "react";
// import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: "",
        };
    }
    handleSubmit(e) {
        e.preventDefault();
        axios({
            method: "POST",
            url: "http://localhost:3002/send",
            data: this.state,
        }).then((response) => {
            if (response.data.status === "success") {
                alert("Message Sent.");
                this.resetForm();
            } else if (response.data.status === "fail") {
                alert("Message failed to send.");
            }
        });
    }
    resetForm() {
        this.setState({ name: "", email: "", message: "" });
    }
    render() {
        return (
            <div className="Contact" id="about">
                <div className="container mt-5" style={{ minHeight: "90vh" }}>
                    <div className="row mb-5 d-flex justify-content-center">
                        <div className="col-12">
                            <h1 className="f-1">Contact me</h1>
                        </div>
                        <div className="col-9 m-5 p-5">
                            <form
                                id="contact-form"
                                onSubmit={this.handleSubmit.bind(this)}
                                method="POST"
                            >
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        value={this.state.name}
                                        onChange={this.onNameChange.bind(this)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        aria-describedby="emailHelp"
                                        value={this.state.email}
                                        onChange={this.onEmailChange.bind(this)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        className="form-control"
                                        rows="5"
                                        id="message"
                                        value={this.state.message}
                                        onChange={this.onMessageChange.bind(
                                            this
                                        )}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    onNameChange(event) {
        this.setState({ name: event.target.value });
    }
    onEmailChange(event) {
        this.setState({ email: event.target.value });
    }
    onMessageChange(event) {
        this.setState({ message: event.target.value });
    }
}
export default Contact;

{
    /* const Contact = () => {
    return (
        <div className="App" id="about">
            <div className="container mt-5" style={{ minHeight: "90vh" }}>
                <div className="row mb-5 d-flex justify-content-center">
                    <div className="col-12">
                        <h1 className="f-1">Contact me</h1>
                    </div>
                    <div className="col-9 m-5 p-5">
                        <form
                            id="contact-form"
                            onSubmit={this.handleSubmit.bind(this)}
                            method="POST"
                        >
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    aria-describedby="emailHelp"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    className="form-control"
                                    rows="5"
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Contact; */
}
