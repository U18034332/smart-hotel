import { useState } from "react";
import { Link, useNavigate } from "react-router";

const Register = () => {
    //const location = useLocation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogIn = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
    }
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card shadow-lg p-3 rounded-4" style={{ width: '350px' }}>
                <h2 className="text-center mb-5 text-primary">Create Your Account</h2>
                <form onSubmit={handleLogIn}>
                    <div className="mb-4">
                        <input
                            type="text"
                            className="form-control"
                            id="email"
                            placeholder="Enter Full Name"
                            name="lastname"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            className="form-control"
                            id="pwd"
                            placeholder="Enter Password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            className="form-control"
                            id="pwd"
                            placeholder="Repeat Password"
                            name="repeatpassword"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            
                        />
                    </div>
                    <p className="text-center mb-5">
                        <small>Already have an account? <Link to="/account-reset">Click here</Link></small>
                    </p>
                    <div className="d-grid mb-1">
                        <button type="submit" className="btn btn-primary">
                            Create New Account
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );

}
export default Register;