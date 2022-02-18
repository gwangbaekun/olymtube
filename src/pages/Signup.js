import React from "react";

import {useDispatch, useSelector} from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import { actionCreators as userActions } from "../redux/modules/user";


import Header from "../shared/header/Header";
import { Button, Grid, Input, Image, Text } from "../shared/element" ;


const Signup = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const nameRef = React.useRef(null);
    const pwdRef = React.useRef(null);
    const pwdCheckRef = React.useRef(null);
    const profileRef = React.useRef(null);


    const goSignup = () =>{

        const user_data = {
            username : nameRef.current.value,
            password : pwdRef.current.value,
            nickname : pwdCheckRef.current.value,
            user_profile : "https://post-phinf.pstatic.net/MjAyMDAxMDJfMjE0/MDAxNTc3OTU1NDUwMTk2.CYPuT2TFBYa15mnZDOReu5YQErQHmO3juTjWXN1sg8Ag.3LRsWxTGKaYOzCFDHm6-stMK0BNTTSLlaKz2wQ1l5c4g.JPEG/62246832_425639158281486_1528361062506865852_n.jpg?type=w1200",
        }
    dispatch(userActions.SignUpDB(user_data))
    console.log(user_data)
    navigate("/login");
}

    const pwdCheck = () =>{
        if(pwdRef.current.value !== pwdCheckRef.current.value){
            console.log("중복체크기능 - 나중");
        }else{
            console.log("중복체크기능 - 나중");
        }
    }

    return (
        <React.Fragment>
            <Grid is_flex flex_direction="column" align-items="center" width='800px' Border='1px solid red' margin='0 auto' >
                <Grid  is_flex justify_content="center" align-items="center" >
                    <Input _ref={nameRef} margin="10px" label="ID" width='420px'></Input>
                    <Button margin="15px 0 0 0" text="중복체크" width='80px' height="40px" _onClick={pwdCheck}/>
                    </Grid>
                    <Input _ref={pwdRef} type='password' width='500px' margin="10px" label="PassWord" ></Input>
                    <Input _ref={pwdCheckRef} type='password' width='500px' margin="10px" label="CheckPassWord"></Input>
                    <Input _ref={profileRef} type='file' width='500px' margin="10px" label="CheckPassWord" ></Input>
                    <Button margin="20px" text="회원가입" _onClick={goSignup} />
                </Grid>
        </React.Fragment>
    )
}


export default Signup;
