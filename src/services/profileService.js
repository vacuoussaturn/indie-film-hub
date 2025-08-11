const BASE_URL = "http://localhost:7005";

export async function registerUser(username, password, email) {
  const response = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password, email }),
  });
  return response.json();
}

export async function authenticateUser(username, password) {
  const response = await fetch(`${BASE_URL}/authenticate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  return response.json();
}

export async function validateToken(token) {
  const response = await fetch(`${BASE_URL}/validate-token`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token }),
  });
  return response.json();
}

export async function revokeToken(token) {
  const response = await fetch(`${BASE_URL}/revoke-token`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token }),
  });
  return response.json();
}
