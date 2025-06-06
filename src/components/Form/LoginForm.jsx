import style from "./Form.module.css";
import { useState } from "react";
import { useAuth } from "../../context/auth/authContext";
import { useNavigate } from "react-router-dom";

export default function LoginForm({ setNewUser }) {
  const { login } = useAuth();
  const nav = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await login(formData);

      nav("/dashboard");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={style.formContainer}>
      <input
        onChange={handleChange}
        type="text"
        name="email"
        placeholder="Email"
      />
      <input
        onChange={handleChange}
        type="password"
        name="password"
        placeholder="Password"
      />
      <input type="submit" value="Login" />
      <p>
        Not a User?{" "}
        <span
          className={style.toggle}
          onClick={() => {
            setNewUser(true);
          }}
        >
          Sign Up
        </span>
      </p>
    </form>
  );
}