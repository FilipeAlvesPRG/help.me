import React, { useState } from "react";
import './style.css'
import img from '../../assets/connecting_teams.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavbarComponent } from '../../components/NavbarComponent/index.js'
import { FeatureComponent } from "../../components/FeatureComponent/index.js";
import { CardPlansComponents } from "../../components/CardPlansComponents";
import { FooterComponent } from "../../components/FooterComponent";
import ceo_image from '../../assets/ceo-image.jpg';
import { BsCheck2 } from "react-icons/bs";
import axios from "axios";


export function Home() {
    const [values, setValues] = useState();

    const handleChangeValues = (value) => {
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
    }

    const handleClickButton = () => {
        if (!values?.username) {
            console.log("Is empty")
        } else if (!values?.email) {
            console.log("Is empty")
        } else if (!values?.doubt) {
            console.log("Is empty")
        } else if (document.forms[0].email.value.indexOf('@') === -1) {
            console.log("testando aqui")
        } else if (document.forms[0].email.value.indexOf('.') === -1) {
            console.log("testando aqui 2")
        } else {
            console.log("TUDO ESTA PREENCHIDO");
            axios.post("URI-HERE", values).then(response => {
                console.log(response);
                alert("Sucesso! Seus dados foram enviados!")
            });
        }

    }

    return (
        <div>
            <NavbarComponent />
            <div className="apresentation">
                <div className="container text-center">
                    <div className="row">
                        <div className="col">
                            <p className="title-apresentation"><em>Here we have<strong className="strong-text"> support</strong> for you</em></p>

                            <button className="btn btn-primary button-get-started" type="submit">Get started</button>
                        </div>

                        <div className="col">
                            <img src={img} className="img-fluid img-apresentation" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-features">
                <div className="container marketing">
                    <p className="title-features">How we work</p>
                    <div className="row">
                        <div className="col">
                            <FeatureComponent feature="Customer" details="Top priority for customer" />
                        </div>
                        <div className="col">
                            <FeatureComponent feature="
                        Quality" details="Maximum quality in the delivery of our services" />
                        </div>

                        <div className="col">
                            <FeatureComponent feature="Flexibility" details="Full flexibility!" />
                        </div>
                        <div className="col">
                            <FeatureComponent feature="Teamwork" details="The best team ever!" />
                        </div>
                    </div>
                </div>
            </div>

            <div id="ceo">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col">
                            <img className="img-fluid ceo-image" src={ceo_image} />
                        </div>
                        <div class="col-md-8 all-citation">
                            <p className="citation-title">Lorem ipsum</p>

                            <p className="citation-p"><em>"And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content. And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content."</em></p>
                            <p className="citation-p"><em>"And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content. And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content."</em></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div id="container-cards" className="row">
                    <div className="container-title-plans"><p className="title-plans">Our plans</p></div>
                    <CardPlansComponents titleCard="Essential" subtitleCard="subtitle" />
                    <CardPlansComponents titleCard="Potential" subtitleCard="subtitle" />
                </div>
            </div>

            <div className="container">
                <div className="question-form">
                    <p className="title-form">Talk to us</p>
                    <form className="row g-3">
                        <div className="col-md">
                            <label for="validationDefault01" className="form-label">Name</label>
                            <input type="text" name="username" onChange={handleChangeValues} className="form-control" id="validationDefault01" required />
                        </div>
                        <div className="col">
                            <label for="validationDefault02" className="form-label">Email</label>
                            <input type="email" name="email" onChange={handleChangeValues} className="form-control" id="validationDefault02" required />
                        </div>
                        <div className="mb-3">
                            <label for="validationTextarea" className="form-label">Textarea</label>
                            <textarea className="form-control" name="doubt" onChange={handleChangeValues} id="validationTextarea" placeholder="Leave your doubt here" required></textarea>
                            <div className="invalid-feedback">
                                Required field
                            </div>
                        </div>
                        <div className="container-button-form">
                            <button onClick={() => handleClickButton()} type="submit" className="btn btn-primary" > Submit <BsCheck2 className="submit-button-icon" /></button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="container-footer">
                <FooterComponent />
            </div>
        </div>
    );
}