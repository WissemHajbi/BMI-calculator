import React, { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import femaleimage1 from "./images/female1.jpg";
import femaleimage2 from "./images/female2.jpg";
import femaleimage3 from "./images/female3.jpg";
import femaleimage4 from "./images/female4.jpg";
import femaleimage5 from "./images/female5.jpg";
import maleimage1 from "./images/male1.jpg";
import maleimage2 from "./images/male2.jpg";
import maleimage3 from "./images/male3.jpg";
import maleimage4 from "./images/male4.jpg";
import maleimage5 from "./images/male5.jpg";

export default function Result(props) {
    let { bmi, weight, healthy, gender } = useParams();
    let underp;
    if (
        weight === "Overweight" ||
        weight === "Obese Class I" ||
        weight === "Obese Class II" ||
        weight === "Obese Class III"
    ) {
        underp = (
            <div>
                <p className="card-text">
                    Being overweight increases the risk of a number of serious
                    diseases and health conditions. Below is a list of said
                    risks, according to the Centers for Disease Control and
                    Prevention (CDC):
                </p>
                <ul>
                    <li>High blood pressure</li>
                    <li>Coronary heart disease</li>
                    <li>
                        Osteoarthritis, a type of joint disease caused by
                        breakdown of joint cartilage
                    </li>
                    <li>
                        Certain cancers (endometrial, breast, colon, kidney,
                        gallbladder, liver)
                    </li>
                    <li>Low quality of life</li>
                </ul>
            </div>
        );
    } else if (
        weight === "Severe Thinness" ||
        weight === "Moderate Thinness" ||
        weight === "Mild Thinness"
    ) {
        underp = (
            <div>
                <p className="card-text">
                    Being underweight has its own associated risks, listed
                    below:
                </p>
                <ul>
                    <li>
                        Malnutrition, vitamin deficiencies, anemia (lowered
                        ability to carry blood vessels)
                    </li>
                    <li>
                        Osteoporosis, a disease that causes bone weakness,
                        increasing the risk of breaking a bone
                    </li>
                    <li>
                        Growth and development issues, particularly in children
                        and teenagers
                    </li>
                    <li>Potential complications as a result of surgery</li>
                    <li>
                        Generally, an increased risk of mortality compared to
                        those with a healthy BMI
                    </li>
                </ul>
            </div>
        );
    } else {
        underp = (
            <ul>
                <li>Healthy BMI range: 18.5 kg/m2 - 25 kg/m2</li>
                <li>Healthy weight for the height: 38.9 kgs - 52.6 kgs</li>
                <li>Lose 24.4 kgs to reach a BMI of 25 kg/m2.</li>
                <li>Ponderal Index: 25.3 kg/m3</li>
            </ul>
        );
    }
    let image;
    if (gender === "male") {
        console.log(weight)
        switch (weight) {
            case "Severe Thinness":
                image = maleimage1;
                break;
            case "Moderate Thinness":
                image = maleimage1;
                break;
            case "Mild Thinness":
                image = maleimage2;
                break;
            case "Normal":
                image = maleimage3;
                break;
            case "Overweight":
                image = maleimage4;
                break;
            default:
                image = maleimage5;
        }
    } else {
        switch (weight) {
            case "Severe Thinness":
                image = femaleimage1;
                break;
            case "Moderate Thinness":
                image = femaleimage1;
                break;
            case "Mild Thinness":
                image = femaleimage2;
                break;
            case "Normal":
                image = femaleimage3;
                break;
            case "Overweight":
                image = femaleimage4;
                break;
            default:
                image = femaleimage5;
        }
    }

    return (
        <div>
            <div className=" container card mb-3" style={{ width: "20rem" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img
                            src={image}
                            className="img-fluid rounded-start"
                        ></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <Link to="/calculator" className="">
                                <BsArrowLeft />
                            </Link>
                            <h5 className="card-title">{bmi}</h5>
                            <h5 className="card-title">{weight}</h5>
                            <h5 className="card-title">{healthy}</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="card" style={{ width: "20rem" }}>
                    <div className="card-body">{underp}</div>
                </div>
            </div>
        </div>
    );
}
