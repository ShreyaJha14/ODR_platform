import React from "react";
import { Link } from "react-router-dom";
import './LoginForm.css'; // Reuse same styling

const Register = () => {
    return (
        <div className="wrapper">
            <form>
                <h1>Register</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required />
                </div>
                <div className="input-box">
                    <input type="email" placeholder="Email" required />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required />
                </div>
                <button type="submit">Register</button>
                <div className="register-link">
                    <p>Already have an account? <Link to="/">Login</Link></p>
                </div>
            </form>
        </div>
    );
};
export default Register;
