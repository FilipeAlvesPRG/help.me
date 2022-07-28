import React from "react";
import './style.css'
import img from '../../assets/connecting_teams.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavbarComponent } from '../../components/NavbarComponent/index.js'
import { FeatureComponent } from "../../components/FeatureComponent/index.js";
import { CardPlansComponents } from "../../components/CardPlansComponents";
import { FooterComponent } from "../../components/FooterComponent";
import ceo_image from '../../assets/ceo-image.jpg';
import { BsCheck2 } from "react-icons/bs";


export function Home() {
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
                    <CardPlansComponents titleCard="Essential" subtitleCard="subtitle" />
                    <CardPlansComponents titleCard="Potential" subtitleCard="subtitle" />
                </div>
            </div>

            <div className="container">
                <div className="question-form">
                    <p className="title-form">Talk to us</p>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label for="inputPassword" className="form-label">Name</label>
                            <input type="text" className="form-control" id="inputName" placeholder="John " />
                        </div>
                        <div className="col-md-6">
                            <label for="inputEmail" className="form-label">Email</label>
                            <input type="email" className="form-control" id="inputEmail" placeholder="name@example.com" />
                        </div>
                        <div className="col-12">
                            <label for="inputAddress" className="form-label">Address</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
                        </div>
                        <div className="col-12 button-container">
                            <button type="submit" className="btn btn-primary"> Submit <BsCheck2 className="submit-button-icon"/></button>
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