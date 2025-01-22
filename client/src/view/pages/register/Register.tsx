import { FormEventHandler, useState } from "react";

export default function Register() {
  const [form, setForm] = useState({ email: "", username: "", password: "" });

  const handleRegister: FormEventHandler = async (e) => {
    try {
    e.preventDefault();
    // send registration data to server
    console.log(form);
    const res = await fetch("http://localhost:3000/users/register",{method:"POST", body: JSON.stringify(form)});
    const data = await res.json();
    console.log(data)
    console.log("Registration data sent");
    // redirect to login page
    //window.location.href = '/login'
    }
    catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          type="email"
          placeholder="Email"
        />
        <input
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          type="text"
          placeholder="Username"
        />
        <input
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          type="password"
          placeholder="Password"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
