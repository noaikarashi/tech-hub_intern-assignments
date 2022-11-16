import { Button } from "@mui/material";
import { signInWithPopup, signInWithRedirect } from "firebase/auth";
import { auth, googleAuthprovider } from "../firebaseConfig";

function SignUp() {
  async function signUpWithGoogle() {
    const provider = googleAuthprovider;
    // provider.addScope('profile');
    // provider.addScope('email');
    // await signInWithRedirect(auth, provider);
    await signInWithPopup(auth, provider)
  }
  return (
    <div>
        <Button
          variant="contained" color="success"
          style={{
            display: "inline-block",
            padding: "7px, 20px",
            borderRadius: "25px",
            color: "#fff",
          }}
          onClick={signUpWithGoogle}
        >
        login with google
        </Button>
    </div>
  )

}
export default SignUp;
