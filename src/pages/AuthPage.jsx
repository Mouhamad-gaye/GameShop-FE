import LoginForm from "../components/Form/LoginForm";
import RegisterForm from "../components/Form/RegisterForm";
import { useState } from "react";

export default function AuthPage() {
  const [newUser, setNewUser] = useState(false);

  return newUser ? (
    <RegisterForm  setNewUser={setNewUser} />
  ) : (
    <LoginForm setNewUser={setNewUser} />
  );
}