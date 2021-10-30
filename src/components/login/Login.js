import "./Login.css";
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LoginForm from "./loginForm/LoginForm";

const Login = () => {
  return (
    <div className="l">
      <div className="l-left">
        <div className="l-left-text">
          <h1><span>Fake</span>book</h1>
          <p>
            Fakebook helps you connect and share with the people in your life.
          </p>
        </div>
      </div>

      <div className="l-right">
        <div className="l-login">
          <div className="l-input">
            <LoginForm />
          </div>
          <p className="or">or</p>
          <div className="l-option">
            <Button variant="outlined" startIcon={<AccountCircleIcon />}>
              Login as guest
            </Button>
            <Button variant="outlined" startIcon={<FacebookRoundedIcon />}>
              Login with facebook
            </Button>
            <Button variant="outlined" startIcon={<GoogleIcon />}>
              Login with google
            </Button>
            <Button className="login-guest">
              create new account
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;