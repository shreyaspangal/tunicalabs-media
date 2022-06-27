import React from 'react';
import './Signup.css'
import {
    Stack, TextField, Button, FormGroup,
    FormControlLabel, Checkbox
} from '@mui/material';

export default function Signup() {
    return (
        <Stack spacing={2} className="form">
            <h2 className="title">Sign Up Now</h2>
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
            <TextField
                id="confirm-password"
                variant="outlined"
                label="Confirm Password"
                name="confirm-password"
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
                Sign Up
            </Button>
            <p className="secondary-action">
                Already have an account?{" "}
                <a className="link">
                    Sign In
                </a>
            </p>
        </Stack>

    )
}
