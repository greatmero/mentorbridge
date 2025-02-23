"use client";
import { useAuth } from "@/app/auth/authContext";

export default function AuthHome() {
  const { user, logout } = useAuth();

  return (
    <div>
      <h2>Auth Home</h2>
      {user ? (
        <>
          <p>Welcome, {user.email}!</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <p><a href="/auth/signup">Signup</a> or <a href="/auth/login">Login</a></p>
        </>
      )}
    </div>
  );
}
