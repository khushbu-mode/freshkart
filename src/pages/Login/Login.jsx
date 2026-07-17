import { useState } from "react";
import { loginUser } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();

  const handleLogin = async () => {
  try {
    const response = await loginUser({
      username, 
      password,
    });

    console.log(response.data);

    // localStorage.setItem("accessToken", response.data.accessToken); // move to home 
    // navigate("/");

    Cookies.set("accessToken", response.data.accessToken, {
  expires: 1,
});

navigate("/");
  } catch (error) {
    console.log(error);
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Login
        </h2>

        <input 
          type="username"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-3 rounded mb-6"
        />

        <button onClick={handleLogin}
          className="w-full bg-green-600 text-white p-3 rounded"
        >
          Login
        </button>

      </div>
    </div>
  );
}

export default Login;