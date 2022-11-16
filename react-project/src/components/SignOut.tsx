import "../App.css"
import { Button } from "@mui/material";
import { auth } from "../firebaseConfig";

function SignOut() {
  return (
    <div className="header">
      <Button onClick={() => auth.signOut()}>サインアウト</Button>
    </div>
  )
}
export default SignOut;
