import { useState } from "react";
import "./Login.css";

function Login() {
  const [userId, setUserId] = useState("");

  const handleSubmit = async () => {
    //if user id is empty, alert user
    if (!userId) {
      alert("Please enter User ID");
      return;
    }
    const response = await fetch(`http://localhost:8080/users/${userId}`);

    try {
      const user = await response.json();
      if (user) {
        window.location.href = `/dashboard/${userId}`;
      }
    } catch (error) {
      console.error("Error:", error);
      alert("User not found");
    }
  };

  return (
    <>
      <section className="container forms">
        <div className="form login">
          <div className="form-content">
            <header>Login</header>
            <form id="login-form" action="#">
              <div className="field input-field">
                <input
                  type="text"
                  id="login-id"
                  placeholder="Enter your User ID"
                  className="input"
                  required
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                />
              </div>

              <div className="field button-field">
                {/* <button type="submit">Login</button> */}
                <button type="submit" onClick={handleSubmit}>
                  Login
                </button>
              </div>
            </form>

            <div className="form-link">
              <span>
                Don't have an account?{" "}
                <a href="#" className="link signup-link">
                  Register
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
