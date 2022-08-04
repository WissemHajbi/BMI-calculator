import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

export default function Calculator(props) {
    const Navigate = useNavigate()
    const [form, setForm] = useState({
        height: 180,
        weight: 75,
        age: 25,
        male: true,
        female: false,
    });
    
    const [Bmi, setBmi] = useState({
        bmi: 45,
        weight: "Normal",
        healthy: false,
    });

    function calculateBmi({ height, weight, age, male, female},e) {
        e.preventDefault();
        const bmi_ = Math.floor((weight / (height * height)) * 100_000) / 10;
        let weight_ = "Normal";
        let healthy_ = false;

        if (age <= 18) {
            if (bmi_ <= 5) {
                weight_ = "Severe Thinness";
            } else if (bmi_ <= 7) {
                weight_ = "Moderate Thinness";
            } else if (bmi_ <= 9) {
                weight_ = "Mild Thinness";
            } else if (bmi_ <= 12) {
                weight_ = "Normal";
            } else if (bmi_ <= 14) {
                weight_ = "Overweight";
            } else if (bmi_ <= 16) {
                weight_ = "Obese Class I";
            }
        } else {
            if (bmi_ <= 16) {
                weight_ = "Severe Thinness";
            } else if (bmi_ <= 17) {
                weight_ = "Moderate Thinness";
            } else if (bmi_ <= 18.5) {
                weight_ = "Mild Thinness";
            } else if (bmi_ <= 25) {
                weight_ = "Normal";
            } else if (bmi_ <= 30) {
                weight_ = "Overweight";
            } else if (bmi_ <= 35) {
                weight_ = "Obese Class I";
            } else if (bmi_ <= 40) {
                weight_ = "Obese Class II";
            } else if (bmi_ > 40) {
                weight_ = "Obese Class III";
            }
        }

        if ((bmi_) => 18.5 && bmi_ <= 25) {
            healthy_ = true;
        }

        setBmi({
            bmi: bmi_,
            weight: weight_,
            healthy: healthy_,
        });

        const gender = male ? "male" : "female" 

        Navigate(`/result/${bmi_}/${weight_}/${healthy_}/${gender}`);
    }


    function handleChange(e) {
        const { name, type, value, checked } = e.target;
        setForm((prev) => {
            return { ...prev, [name]: type === "checkbox" ? checked : value };
        });
        
    }

    return (
        <div className="container">
            <div className="card" style={{ width: "20rem" }}>
                <div className="card-body">
                    <h5 className="card-title"> 
                        The Body Mass Index (BMI) Calculator
                    </h5>
                    <p className="card-text">
                        The Body Mass Index (BMI) Calculator can be used to
                        calculate BMI value and corresponding weight status
                        while taking age into consideration.
                    </p>
                    <form onSubmit={(e) =>calculateBmi(form,e)}>
                        <input
                            placeholder="Enter your height in cm..."
                            className="form-control mt-2"
                            type="text"
                            name="height"
                            onChange={(e) =>handleChange(e)}
                            value={form.height}
                        />
                        <input
                            placeholder="Enter your weight in kg..."
                            className="form-control mt-2"
                            type="text"
                            name="weight"
                            onChange={(e) =>handleChange(e)}
                            value={form.weight}
                        />
                        <input
                            placeholder="Enter your age..."
                            className="form-control mt-2"
                            type="text"
                            name="age"
                            onChange={(e) =>handleChange(e)}
                            value={form.age}
                        />
                        <span className="form-text">ages: 2 - 120</span>

                        <div className="form-check mt-3">
                            <label className="form-check-label">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="male"
                                    onChange={(e) =>handleChange(e)}
                                    checked={form.male}
                                />
                                male
                            </label>
                        </div>
                        <div className="form-check">
                            <label className="form-check-label">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="female"
                                    onChange={(e) =>handleChange(e)}
                                    checked={form.female}
                                />
                                female
                            </label>
                        </div>

                        <button className="btn btn-primary mt-4">
                            Calculate
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
