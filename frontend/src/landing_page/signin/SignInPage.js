import React from 'react';

const SignInPage = () => {
  const redirectToClerkSignIn = () => {
    window.location.href = 'https://willing-mastodon-86.accounts.dev/sign-in?redirect_url=http://localhost:3000/dashboard';
  };

  const redirectToSignUp = (e) => {
    e.preventDefault();
    window.location.href = 'https://willing-mastodon-86.accounts.dev/sign-up?redirect_url=http://localhost:3000/dashboard';
  };

  return (
    <div className="auth-container">
      <div className="background-gradient"></div>
      
      <div className="main-content">
        {/* Header Section */}
        <div className="header-section">
          <div className="logo">
            {/* <div className="logo-icon">
              <span>Z</span>
            </div> */}
            <h1 className="brand">Zerodha</h1>
          </div>
          <div className="welcome-text">
            <h2>Welcome Back</h2>
            <p>Sign in to access your trading dashboard</p>
          </div>
        </div>

        {/* Features List */}
        <div className="features-list">
          <div className="feature-item">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <span className="feature-text">Secure & encrypted authentication</span>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="feature-text">Real-time market data access</span>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <span className="feature-text">Advanced trading tools</span>
          </div>
        </div>

        {/* Sign In Button */}
        <button 
          onClick={redirectToClerkSignIn}
          className="signin-btn"
        >
          <div className="btn-content">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
            <span>Sign In to Zerodha</span>
          </div>
        </button>

        {/* Divider */}
        <div className="divider">
          <span>New to Zerodha?</span>
        </div>

        {/* Sign Up Link */}
        <div className="signup-section">
          <button
            onClick={redirectToSignUp}
            className="signup-link"
          >
            Create your Zerodha account
          </button>
        </div>

        {/* Footer */}
        <div className="footer">
          <div className="footer-content">
            <span>🔒 Secure authentication</span>
            <span>Powered by Clerk</span>
          </div>
        </div>

        {/* Terms */}
        <div className="terms">
          <p>
            By continuing, you agree to our{' '}
            <a href="#" className="terms-link">Terms</a>
            {' '}and{' '}
            <a href="#" className="terms-link">Privacy Policy</a>
          </p>
        </div>
      </div>

      <style jsx>{`
        .auth-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          position: relative;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .background-gradient {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
          z-index: -1;
        }

        .main-content {
          background: rgba(30, 30, 46, 0.8);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
          width: 100%;
          max-width: 440px;
        }

        .main-content:hover {
          border-color: rgba(13, 110, 253, 0.3);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
        }

        .header-section {
          text-align: center;
          margin-bottom: 35px;
        }

        .logo {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          margin-bottom: 20px;
          margin-left: 160px;
        }

        .logo-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #0d6efd 0%, #0dcaf0 100%);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 28px;
          color: white;
          box-shadow: 0 8px 25px rgba(13, 110, 253, 0.3);
        }

        .brand {
          color: #0d6efd;
          font-weight: 800;
          font-size: 36px;
          text-shadow: 0 4px 12px rgba(13, 110, 253, 0.3);
          marginLeft: 40px;
        }

        .welcome-text h2 {
          color: white;
          font-weight: 700;
          font-size: 28px;
          margin-bottom: 8px;
        }

        .welcome-text p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 16px;
          margin: 0;
        }

        .features-list {
          margin-bottom: 30px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 12px 0;
          transition: all 0.3s ease;
        }

        .feature-item:hover {
          transform: translateX(5px);
        }

        .feature-icon {
          width: 24px;
          height: 24px;
          background: rgba(13, 110, 253, 0.1);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .feature-icon svg {
          width: 14px;
          height: 14px;
          color: #0d6efd;
        }

        .feature-text {
          color: rgba(255, 255, 255, 0.9);
          font-size: 14px;
          font-weight: 500;
        }

        .signin-btn {
          width: 100%;
          background: linear-gradient(135deg, #0d6efd 0%, #0dcaf0 100%);
          border: none;
          border-radius: 12px;
          color: white;
          font-weight: 600;
          font-size: 16px;
          padding: 16px 24px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-bottom: 25px;
          box-shadow: 0 8px 20px rgba(13, 110, 253, 0.3);
        }

        .signin-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(13, 110, 253, 0.4);
        }

        .signin-btn:active {
          transform: translateY(0);
        }

        .btn-content {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }

        .btn-content svg {
          width: 20px;
          height: 20px;
        }

        .divider {
          position: relative;
          text-align: center;
          margin: 25px 0;
        }

        .divider::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 1px;
          background: rgba(255, 255, 255, 0.1);
        }

        .divider span {
          background: rgba(30, 30, 46, 0.8);
          padding: 0 15px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
          position: relative;
        }

        .signup-section {
          text-align: center;
          margin-bottom: 25px;
        }

        .signup-link {
          background: none;
          border: none;
          color: #0d6efd;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 8px 16px;
          border-radius: 8px;
        }

        .signup-link:hover {
          color: #0dcaf0;
          background: rgba(13, 110, 253, 0.1);
          text-decoration: underline;
        }

        .footer {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 20px;
          margin-top: 20px;
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.5);
        }

        .terms {
          text-align: center;
          margin-top: 20px;
        }

        .terms p {
          color: rgba(255, 255, 255, 0.5);
          font-size: 12px;
          margin: 0;
        }

        .terms-link {
          color: #0d6efd;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .terms-link:hover {
          color: #0dcaf0;
          text-decoration: underline;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .main-content {
            max-width: 400px;
            padding: 30px 25px;
          }

          .brand {
            font-size: 32px;
          }

          .welcome-text h2 {
            font-size: 24px;
          }

          .logo-icon {
            width: 50px;
            height: 50px;
            font-size: 24px;
          }
        }

        @media (max-width: 480px) {
          .auth-container {
            padding: 15px;
          }

          .main-content {
            max-width: 100%;
            padding: 25px 20px;
            border-radius: 16px;
          }

          .logo {
            flex-direction: column;
            gap: 10px;
          }

          .brand {
            font-size: 28px;
          }

          .welcome-text h2 {
            font-size: 22px;
          }

          .feature-item {
            gap: 12px;
          }

          .feature-text {
            font-size: 13px;
          }

          .footer-content {
            flex-direction: column;
            gap: 8px;
            text-align: center;
          }

          .signin-btn {
            padding: 14px 20px;
            font-size: 15px;
          }
        }

        @media (max-width: 360px) {
          .main-content {
            padding: 20px 15px;
          }

          .logo-icon {
            width: 45px;
            height: 45px;
            font-size: 20px;
          }

          .brand {
            font-size: 24px;
          }

          .welcome-text h2 {
            font-size: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default SignInPage;
