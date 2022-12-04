import { useState } from "react";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <div className="col-4 offset-4 my-5">
        <div className="mb-3">
          <h1 className="fs-2 fw-bold text-primary">Sign In</h1>
        </div>
        <form>
          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              className="form-control"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              className="form-control"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Submit */}
          <button className="btn btn-primary" type="submit">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
