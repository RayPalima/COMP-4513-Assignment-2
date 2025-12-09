import React, { useState } from "react";
import { useAuth } from "../components/Login";

const Login = ({ onClose}) => {
  const { login } = useAuth();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  function updateField(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    // pretend async request
    setTimeout(() => {
      const result = login(form.username, form.password);

      if (result.ok) {
        onClose();
      } else {
        setError("Invalid username or password.");
      }

      setLoading(false);
    }, 700);
  }

  function fill(username, password) {
    setForm({ username, password });
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Login</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Username */}
        <div>
          <label className="block font-medium mb-1 text-gray-700">
            Username
          </label>
          <input
            name="username"
            value={form.username}
            onChange={updateField}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300"
            placeholder="Enter username"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block font-medium mb-1 text-gray-700">
            Password
          </label>
          <div className="relative">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              value={form.password}
              onChange={updateField}
              className="w-full border border-gray-300 rounded-md p-2 pr-10 focus:ring focus:ring-blue-300"
              placeholder="Enter password"
            />
            <button
              type="button"
              className="absolute right-2 top-2 text-sm text-gray-500"
              onClick={() => setShowPassword((v) => !v)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        {/* Error message */}
        {error && (
          <div className="text-red-600 text-sm font-semibold">
            {error}
          </div>
        )}

        {/* Login button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full btn flex justify-center"
        >
          {loading ? (
            <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
          ) : (
            "Login"
          )}
        </button>

        {/* Auto-fill buttons */}
        <div className="flex justify-between mt-2">
          <button
            type="button"
            className="text-blue-600 underline text-sm"
            onClick={() => fill("admin", "adminpass")}
          >
            Use Admin
          </button>

          <button
            type="button"
            className="text-blue-600 underline text-sm"
            onClick={() => fill("guest", "guestpass")}
          >
            Use Guest
          </button>
        </div>

      </form>
    </div>
  );
}

export default Login;