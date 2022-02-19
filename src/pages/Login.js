import React from "react";

import {useDispatch, useSelector} from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import { actionCreators as userActions } from "../redux/modules/user";

import { getCookie, setCookie, deleteCookie } from "../shared/cookie";

import Header from "../shared/header/Header";
import { Button, Grid, Input, Image, Text } from "../shared/element" ;


const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const idRef = React.useRef(null);
    const pwdRef = React.useRef(null);

    const goLogin = () => {
        const logIn_data = {
            username : idRef.current.value,
            password : pwdRef.current.value,
        }
        dispatch(userActions.loginDB(logIn_data))
        navigate("/");
    }



    return (
        <React.Fragment>
            <Grid width='800px' margin='0 auto'>
                <Grid Border='1px solid black' margin='0 auto' is_flex flex_direction="column" align-items="center">
                    <Input _ref={idRef} margin="10px" label="ID" width = "30vw"></Input>
                    <Input _ref={pwdRef} type='password' margin="10px" label="PassWord" width = "30vw"></Input>
                    <Button margin="20px" width="15vw" text="LogIn" _onClick={goLogin}/>
                    <Text cursor="pointer" F_decoration="underline" F_color="#3d078cd9" _onClick={()=>{navigate("/signup")}}>회원이 아니신가요??</Text>
                </Grid>
            </Grid>
        </React.Fragment>
    )
};

export default Login;
