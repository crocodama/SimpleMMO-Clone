import { FormEventHandler, useState } from "react";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleLogin: FormEventHandler = async (e) => {
    try {
    e.preventDefault();
    // send registration data to server
    console.log(form);
    const res = await fetch("http://localhost:3000/users/login", {
      method: "POST",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    console.log("login data sent");
    // redirect to login page
    //window.location.href = '/login'
    }
    catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          type="email"
          placeholder="Email"
        />
        <input
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          type="password"
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
