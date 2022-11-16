import "../App.css"
import { Button } from "@mui/material";
import { auth } from "../firebaseConfig";

function SignOut() {
  return (
    <div className="header">
      <h2>ChatRoom</h2>
      <Button
        variant="contained" color="info"
        style={{ color: "white", fontSize: "15px", fontWeight: "500" }}
        onClick={() => auth.signOut()}
      >
        サインアウト
      </Button>
    </div>
  )
}
export default SignOut;
