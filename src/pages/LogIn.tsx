import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginpng from "../assets/login.png";

const LogIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogIn = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
        // TODO: API call
    };

    return (
        <div
            className="container-fluid vh-100 d-flex align-items-center"
            style={{
                background: "linear-gradient(90deg, #4f46e5, #9333ea)",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
            }}
        >
            <div className="row w-100 justify-content-center align-items-center text-white">
                {/* Image Column */}
                <div className="col-12 col-md-6 text-center mb-5 mb-md-0 fade-in">
                    <img
                        src={loginpng}
                        alt="welcome"
                        className="img-fluid"
                        style={{
                            maxWidth: "75%",
                            borderRadius: "20px",
                            boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
                        }}
                    />
                </div>

                {/* Login Card */}
                <div className="col-12 col-md-5 col-lg-4 fade-in">
                    <div
                        className="card shadow-lg p-5 rounded-4 border-0"
                        style={{
                            background: "rgba(255,255,255,0.9)",
                            backdropFilter: "blur(10px)",
                            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
                        }}
                    >
                        <h2 className="text-center mb-3 text-primary fw-bold">
                            Welcome Back 👋
                        </h2>
                        <p className="text-center text-muted mb-5">
                            Sign in to continue to your account
                        </p>

                        <form onSubmit={handleLogIn}>
                            <div className="mb-4">
                                <label className="form-label fw-semibold">Email</label>
                                <input
                                    type="email"
                                    className="form-control rounded-pill px-3 py-2"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-5">
                                <label className="form-label fw-semibold">Password</label>
                                <input
                                    type="password"
                                    className="form-control rounded-pill px-3 py-2"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="d-grid mb-4">
                                <button
                                    type="submit"
                                    className="btn btn-primary rounded-pill py-2 fw-semibold"
                                >
                                    Log In
                                </button>
                            </div>
                            <p className="text-center mb-2 text-muted">
                                <small>
                                    Forgot your password?{" "}
                                    <Link to="/account-reset" className="text-decoration-none">
                                        Reset here
                                    </Link>
                                </small>
                            </p>
                        </form>
                        <div className="d-grid">
                            <button
                                type="button"
                                className="btn btn-outline-secondary rounded-pill py-2 fw-semibold"
                                onClick={() => navigate("/register", { state: { user: "Elias" } })}
                            >
                                Create New Account
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Animations */}
            <style>
                {`
                    .fade-in {
                        animation: fadeIn 2s ease-in-out;
                    }
                    @keyframes fadeIn {
                        from { opacity: 0; transform: translateY(10px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                `}
            </style>
        </div>
    );
};

export default LogIn;





        