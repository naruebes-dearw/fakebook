import { Button, TextField } from "@mui/material";
import "./LoginForm.css";

const LoginForm = () => {
  return (
    <div className="login-form">
      <form action="https://www.google.com">
        <TextField id="outlined-basic" label="Username" variant="outlined" />
        <TextField id="outlined-basic" label="Password" variant="outlined" />
        <Button type="submit" variant="contained">Login</Button>
      </form>
    </div>
  )
}

export default LoginForm
