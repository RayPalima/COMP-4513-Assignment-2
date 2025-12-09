import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

const STORAGE_KEY = "user_login";

const mockUsers = [
  { username: "admin", password: "adminpass", isAdmin: true, displayName: "Admin" },
  { username: "guest", password: "guestpass", isAdmin: false, displayName: "Guest" }
];

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) setUser(JSON.parse(raw));
  }, []);

  useEffect(() => {
    if (user) localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    else localStorage.removeItem(STORAGE_KEY);
  }, [user]);

function login(username, password) {
  const found = mockUsers.find(
    (u) => u.username === username && u.password === password
  );

  if (!found) {
    return { ok: false };
  }

  setUser({
    username: found.username,
    isAdmin: found.isAdmin,
    displayName: found.displayName,
  });

  return { ok: true };
}

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
