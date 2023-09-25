import React, { useState } from 'react';
import './Acc.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (

    <div className="container">

    <div className="row justify-content-end">

    <div className="col-md-6 logo">
                      <img
                        src="https://scontent.fcrk1-4.fna.fbcdn.net/v/t1.15752-9/383808016_686358216456289_2202587373148100267_n.png?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGaemR7o-mCuPv1661ipvQQEO19i6Kx4RgQ7X2LorHhGHkYWnj81ysBXuKBEofeF0SCN04CR2In1aexMA_L3efl&_nc_ohc=hpuwiB0CnWkAX-IgUnZ&_nc_ht=scontent.fcrk1-4.fna&oh=03_AdSw62xQXAu2hqnEnHB-YZifrpHkpHYAy_9dY_uF1vgk3w&oe=65386639" 
                        alt="Left Image"
                        className="img-fluid logo"
                      />
                    </div>

        <div className="col-md-6">

            <div className="card-body">

              <h2 className="card-title text-start mt-5 mb-3 ">Sign In</h2>

              <form onSubmit={handleSubmit}>

                <div className="form-group ebox">

              

                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder='Email'
                  />
                </div>

                <div className="form-group">


                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder='Password'
                  />
                </div>

                  <div className="form-group">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="agreeCheckbox"
                      required
                    />
                    <label className="form-check-label" htmlFor="agreeCheckbox">
                      I agree to the terms and services
                    </label>
                  </div>
                </div>

                <div className="text-center">
                  
                  <button type="submit" className="btn mt-3 btn-secondary" href="/home">
                    Log in
                  </button>
                  
                  <p className='dont'>Don't have an account?
                   <a href="/SignUp">Sign Up</a></p>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Login;
