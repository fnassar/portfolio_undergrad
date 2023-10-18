import React, { useState } from "react";

const Contact = () => {
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };
    return (
        <div className="App" id="about">
            <div
                className="container mt-5"
                style={{
                    minHeight: "90vh",
                    maxHeight: "90vh",
                    overflow: "hidden",
                }}
            >
                <div className="row mb-5 d-flex justify-content-center">
                    <div className="col-12">
                        <h1 className="f-1">Contact me</h1>
                    </div>
                    <div className="col-9 m-5 p-5">
                        <div className="elfsight-app-3b8a99eb-dfd5-499d-ae3d-7b8fdeb18a3b"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
