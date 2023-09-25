import React, { useState } from 'react';
import './Acc.css';

function SignUp() {
  const [email, setEmail] = useState('');
  const [Name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign-up logic here
    console.log('Email:', email);
    console.log('Name:', Name);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
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

        <p className='dont'>Already have an account?
        <a href="/Login">Sign In</a></p>

        </div>

        <div className="col-md-6">


            <div className="card-body">

              <h2 className="card-title text-start mt-5 mb-3 ">Create your account</h2>

              <form onSubmit={handleSubmit}>

                <div className="form-group">

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
                    type="Name"
                    className="form-control"
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder='Name'
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

                  <input
                    type="password"
                    className="form-control"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    placeholder='Confirm Password'
                  />

                </div>
                <div className="text-center">
                <button type="submit" className="btn mt-3 btn-secondary">
                    Sign Up
                  </button>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default SignUp;
