import React from 'react';
import './Signin.css'
import {
    Stack, TextField, Button, FormGroup,
    FormControlLabel, Checkbox
} from '@mui/material';
import { Link } from 'react-router-dom'

export default function Signin() {

    // const [value, setValue] = React.useState('');

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
            // error
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
            // error
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
                <Link className="link" to="/signup">
                    Sign Up
                </Link>
            </p>
        </Stack>

    )
}
