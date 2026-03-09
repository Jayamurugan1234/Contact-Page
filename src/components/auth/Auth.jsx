import { useState } from "react";
import { auth } from "../../firebase/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import "./Auth.css";
import {useNavigate} from "react-router-dom";

function Auth() {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      if (isSignup) {
        await createUserWithEmailAndPassword(auth, email, password);
        setMessage("Account created successfully!");

        navigate("/dashboard");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        setMessage("Login successful!");

       navigate("/dashboard");

      }
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setMessage("Enter your email first.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent!");
       navigate("/dashboard");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>{isSignup ? "Create Account" : "Welcome Back to Your Contact"}</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">
            {isSignup ? "Signup" : "Login"}
          </button>
        </form>

        {!isSignup && (
          <p className="link" onClick={handleForgotPassword}>
            Forgot Password?
          </p>
        )}

        <p className="switch">
          {isSignup ? "Already have an account?" : "Don't have an account?"}
          <span onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? " Login" : " Create one"}
          </span>
        </p>

        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}

export default Auth;