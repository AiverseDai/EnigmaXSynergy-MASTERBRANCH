import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../../shared/Title";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const login = () => {
        navigate("/user/dashboard", { replace: true });
    }

    return (
        <>
            <Title title="Login" />
            <div>
                <input name="email" type="email" value={email} placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
                <input name="password" type="password" value={password} placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
                <button onClick={login}>Login</button>
            </div>
        </>
    )
}