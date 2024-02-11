import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import kongaLogo from './img/KongaLogo.png';

const Signup = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkValue, setCheckValue] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !phone || !email || !password) {
            setCheckValue(true);
            return;
        }
        else {
            let userDetails = {
                name : name,
                phone : phone,
                email : email,
                password : password
        }

        try {
            const response = await fetch('http://159.65.21.42:9000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userDetails)
            });

            if (response.ok) {
                console.log(response);
                localStorage.setItem("userDetails", JSON.stringify(userDetails));
                alert('User registered successfully!');
                setCheckValue(false);
                setName('');
                setPhone('');
                setEmail('');
                setPassword('');
                // redirect to login page
                window.location.href = '/login';

            } else {
                const errorData = await response.json();
                alert(`Error: ${errorData.message}`);
            }
        } catch (error) {
            alert(`Error: ${error.message}`);
        }

    };
}

    return (
        <div className="signup-container">
            <div className="signup">
                <img src={kongaLogo} alt="img" />
                <div className="form-container">
                    <header className="signup-h4">
                        <h4>Create An Account</h4>
                    </header>
                    <hr />
                    <form className="form-content" onSubmit={handleSubmit}>
                        <div className="form-content-input-container">
                            <label> Name:</label>
                            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" className="Form-input" />

                            {checkValue && !name && <span style={{ color: 'red' }}>Name is required</span>}
                        </div>
                        <div className="form-content-input-container">
                            <label>Phone:</label>
                            <input type="number" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter Phone Number" className="Form-input" />
                            {checkValue && !phone && <span style={{ color: 'red' }}>Phone Number is required</span>}
                        </div>
                        <div className="form-content-input-container">
                            <label>Email:</label>
                            <input
                                type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" className="Form-input" />
                            {checkValue && !email && <span style={{ color: 'red' }}>Email is required</span>}
                        </div>
                        <div className="form-content-input-container">
                            <label>Password:</label>
                            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" className="Form-input" />
                            {checkValue && !password && <span style={{ color: 'red' }}>Password is required</span>}
                        </div>
                        <input type="submit" value="Create An Account" className="form-content-input-submit" />

                        <div className="term-conditions">
                            <span>
                                By signing up you accept our
                                <a href=""> terms and conditions & privacy policy</a>
                            </span>
                        </div>
                    </form>
                    <div className="form-acct-btn">
                        <span>Already have an Account?</span>
                        <button className="login-btn">
                            <Link to="/login" className="login-btn-link">
                                Login
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;