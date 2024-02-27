// imports
import { useState, useEffect } from "react";
import passwordParameter from "../../assets/parameters/parameterPassword.json";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the JSON file loaded properly
    if (!passwordParameter || !passwordParameter.user) {
      setError("Error loading user data");
    }
  }, []);

  const { userName, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the entered username and password match the user data
    if (
      userName === passwordParameter.user.username &&
      password === passwordParameter.user.password
    ) {
      // Authentication successful
      console.log("Authentication successful");
      setError("");
      // Redirect the user to /backoffice/menu
      navigate("/backoffice/menu");
    } else if (userName === passwordParameter.user.username) {
      // Username exists but password is incorrect
      setError("Password is not valid");
    } else if (!passwordParameter.user) {
      // No user found with this username
      setError("This user does not exist");
    } else {
      // Both username and password are incorrect
      setError("This user does not exist");
    }
  };

  return (
    <>
      {error && <div className="error-message">{error}</div>}
      <form id="form_login" onSubmit={handleSubmit}>
        <div className="form_contact_input">
          <label htmlFor="userName">Username</label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={userName}
            onChange={handleChange}
            required
            autoComplete="userName"
          />
        </div>
        <div className="form_contact_input">
          <label htmlFor="current-password">Password</label>
          <input
            type="password"
            id="current-password"
            name="password"
            value={password}
            onChange={handleChange}
            autoComplete="current-password"
            required
          />
        </div>
        <button type="submit" className="btn_next_step login">
          Login
        </button>
      </form>
    </>
  );
};

export default FormLogin;
