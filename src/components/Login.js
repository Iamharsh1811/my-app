import React, { useState } from "react";
import { Box, TextField, Stack, InputAdornment, IconButton, Icon, Button } from "@mui/material";
import DTC from '../assets/DTC.png';

export const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const[login,setLogin]=useState();

    const handleLogin=()=>{
        setLogin(alert('You are logged in'))
    }

    return (
        <>
            <Stack spacing={3} sx={{ padding: '100px 600px 0px 795px;' }}>
                {/* {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>} */}
                <img src={DTC} alt=''  style={{width:'150px',paddingLeft:'98px', backgroundColor:'transparent',paddingBottom:'50px'}}/>
                <TextField name="email" label="Email address" sx={{ width: '350px' }} />

                <TextField
                    sx={{ width: '350px' }}
                    name="password"
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                    <Icon icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </Stack>

            <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: '40px', paddingLeft: '15px' }}>
                <Button fullWidth size="large" type="submit" variant="contained" sx={{ width: '350px' }} onClick={()=>handleLogin(login)}>
                    Login
                </Button>
            </Box>
        </>
    )
}