import React, { useState } from "react";
import { Box, TextField, Button, Card, CardContent, Typography } from "@mui/material";

import Login_logo from "../assets/login_logo.png";

const LoginAPI = (form) => {
  if(form.username==="hjh0537" && form.password==="01044552594p"){
    return 1;
  }

  return 0;
};

const Login = ({ onLoginSuccess }) => {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("로그인 정보:", form);

    let ret = LoginAPI(form);

    if(ret==1){
      console.log("로그인 성공!!!");
      onLoginSuccess();  // 로그인 성공 시 부모 컴포넌트의 함수 호출
    }
    else{
      console.log("로그인 실패!!!");
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="#f5f5f5"

      flexDirection="column"
    >
      {/*<Card sx={{ width: 320, padding: 3, boxShadow: 3 }}>
        <CardContent>*/}
          {/*<Typography variant="h5" textAlign="center" gutterBottom>
            로그인
          </Typography>*/}
          
          <Box display="flex" justifyContent="center" mb={2}>
            <img src={Login_logo} alt="로그인 로고" />
          </Box>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="아이디"
              variant="outlined"
              name="username"
              value={form.username}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="비밀번호"
              variant="outlined"
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              margin="normal"
            />
            <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>
              Onetel 로그인
            </Button>
          </form>
        {/*</CardContent>
      </Card>*/}
    </Box>
  );
};

export default Login;
