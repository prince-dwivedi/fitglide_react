import React, { useState, useEffect } from 'react';
import '../../src/styles/signup.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = ({ fitCoinsEarned }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        password: ''
    });

    const navigate = useNavigate();

    useEffect(() => {
        console.log('Received fitCoinsEarned:', fitCoinsEarned);
    }, [fitCoinsEarned]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const dataToSubmit = {
            ...formData,
            fitCoins: fitCoinsEarned // Include fitCoinsEarned in the request
        };
        console.log('Submitting:', dataToSubmit);
        try {
            const response = await axios.post('http://localhost:5001/signup', dataToSubmit);
            console.log(response.data);
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                mobileNumber: '',
                password: ''
            });
            navigate('/home');
        } catch (error) {
            console.error('Signup failed:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className="container my-5">
            <h2 className="text-center">Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="mobileNumber" className="form-label">Mobile Number</label>
                    <input
                        type="tel"
                        className="form-control"
                        id="mobileNumber"
                        name="mobileNumber"
                        pattern="[0-9]{10}"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        minLength="8"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <input
                    type="hidden"
                    name="fitCoins"
                    value={fitCoinsEarned}
                />
                <button type="submit" className="btn btn-primary w-100">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
