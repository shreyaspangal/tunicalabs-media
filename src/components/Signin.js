import React from 'react';
import {
    Stack, TextField, Button, FormGroup,
    FormControlLabel, Checkbox
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom'
import './Signin.css'

export default function Signin() {

    const navigate = useNavigate();

    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
    });

    const emailStored = localStorage.getItem("email");
    const passwordStored = localStorage.getItem("password");

    let handleInput = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (data) => {
        if (data.email === emailStored && data.password === passwordStored) {
            //Redirect to viewstudent page
            navigate("/viewstudent");
        } else {
            navigate("/signup");
        }
    }

    return (
        <Stack spacing={2} className="signin-form">
            <h2 className="title">Sign In Now</h2>
            <TextField
                id="email"
                label="Your Email"
                variant="outlined"
                title="email"
                name="email"
                placeholder="Enter your Email"
                fullWidth
                required
                value={formData.email}
                onChange={handleInput}
                autoComplete="off"
            />
            <TextField
                id="password"
                variant="outlined"
                label="Your Password"
                name="password"
                type="password"
                fullWidth
                placeholder="Enter your password"
                required
                value={formData.password}
                onChange={handleInput}
                autoComplete="off"
            />
            <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked size="small" sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} />} label="I agree to the Terms Of Service" />
            </FormGroup>
            <Button
                className="button"
                variant="contained"
                onClick={() => handleSubmit(formData)}
            >
                Sign In
            </Button>
            <p className="secondary-action">
                Don't have an account?{" "}
                <Link className="link" to="/signup">
                    Sign Up
                </Link>
            </p>
        </Stack>

    )
}
