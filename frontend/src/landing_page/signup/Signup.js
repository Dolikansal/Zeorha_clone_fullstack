import React from 'react';

const Signup = () => {
  const redirectToClerkSignUp = () => {
    // Redirect to Clerk's hosted sign-up page
    window.location.href = 'https://willing-mastodon-86.accounts.dev/sign-up?redirect_url=http://localhost:3000/dashboard';
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body p-5">
              <div className="text-center mb-4">
                <h2 className="card-title">Join Zerodha</h2>
                <p className="text-muted">Create your trading account</p>
              </div>
              <div className="d-grid">
                <button 
                  className="btn btn-primary btn-lg"
                  onClick={redirectToClerkSignUp}
                >
                  Create Account
                </button>
              </div>
              <div className="text-center mt-3">
                <p className="text-muted">
                  Already have an account?{' '}
                  <a 
                    href="/signin" 
                    className="text-decoration-none"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = 'https://willing-mastodon-86.accounts.dev/sign-in?redirect_url=http://localhost:3000/dashboard';
                    }}
                  >
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;