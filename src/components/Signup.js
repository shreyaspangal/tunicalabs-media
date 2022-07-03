import React from 'react';
import {
    Stack, TextField, Button, FormGroup,
    FormControlLabel, Checkbox
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom'
import './Signup.css'


export default function Signup() {

    const emailStored = localStorage.getItem("email");
    const passwordStored = localStorage.getItem("password");

    let navigate = useNavigate();

    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
        confirmpassword: ""
    });

    let handleInput = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (data) => {
        const { email, password } = data;
        // If account already exists, then redirect to viewstudent page
        if (emailStored === email && passwordStored === password) {
            //Redirect to viewstudent page
            navigate("/viewstudent");
        } else {
            // If account does not exist, then redirect to signin page 
            // after saving credentials to localstorage
            // --> Local storage
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);
            // --> Redirect to signin page
            navigate("/signin");
        }

    }

    return (
        <Stack spacing={2} className="signup-form">
            <h2 className="title">Sign Up Now</h2>
            <TextField
                id="email"
                label="Your Email"
                variant="outlined"
                title="email"
                name="email"
                placeholder="Your Email"
                fullWidth
                required
                value={formData.email}
                onChange={(e) => handleInput(e)}
            />
            <TextField
                id="password"
                variant="outlined"
                label="Your Password"
                name="password"
                type="password"
                fullWidth
                placeholder="Your password"
                required
                value={formData.password}
                onChange={(e) => handleInput(e)}
            />
            <TextField
                id="confirm-password"
                variant="outlined"
                label="Confirm Password"
                name="confirmpassword"
                type="password"
                fullWidth
                placeholder="Confirm password"
                required
                value={formData.confirmpassword}
                onChange={(e) => handleInput(e)}
            />
            <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked size="small" sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} />} label="I agree to the Terms Of Service" />
            </FormGroup>
            <Button
                className="button"
                variant="contained"
                onClick={() => handleSubmit(formData)}
            >
                Sign Up
            </Button>
            <p className="secondary-action">
                Already have an account?{" "}
                <Link className="link" to="/signin">
                    Sign In
                </Link>
            </p>
        </Stack>

    )
}
