import { Button } from "@mui/material";
import { signInWithRedirect } from "firebase/auth";
import { auth, googleAuthprovider } from "../firebaseConfig";

function SignUp() {
  async function signUpWithGoogle() {
    const provider = googleAuthprovider;
    provider.addScope('profile');
    provider.addScope('email');
    await signInWithRedirect(auth, provider);
  }
  return (
    <div>
        <Button onClick={signUpWithGoogle}>サインイン</Button>
    </div>
  )

}
export default SignUp;
