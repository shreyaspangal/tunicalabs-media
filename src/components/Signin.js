import React from 'react';
import './Signin.css'
import {
    Stack, TextField, Button, FormGroup,
    FormControlLabel, Checkbox
} from '@mui/material';

export default function Signin() {
    return (
        <Stack spacing={2} className="form">
            <h2 className="title">Sign In Now</h2>
            <TextField
                id="email"
                label="Your Email"
                variant="outlined"
                title="email"
                name="email"
                placeholder="Enter Email"
                fullWidth
                required
            />
            <TextField
                id="password"
                variant="outlined"
                label="Your Password"
                name="password"
                type="password"
                fullWidth
                placeholder="Enter a password with minimum 6 characters"
                required
            />
            <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked size="small" sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} />} label="I agree to the Terms Of Service" />
            </FormGroup>
            <Button
                className="button"
                variant="contained"
            >
                Sign In
            </Button>
            <p className="secondary-action">
                Don't have an account?{" "}
                <a className="link">
                    Sign Up
                </a>
            </p>
        </Stack>

    )
}
