import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router';
import pkg from '@syncfusion/ej2-react-buttons';
const {ButtonComponent} = pkg;
import { loginWithGoogle } from '~/appwrite/auth';
import { account } from '~/appwrite/client';

const Signin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    const checkUser = async () => {
      try {
        const currentUser = await account.get();
        if (currentUser.$id) {
          navigate('/');
        }
      } catch (error) {
        console.error('Error checking user session:', error);
      }
    };

    checkUser();
  }, [navigate]);

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate('/');
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  return (
    <main className="auth">
      <section className="size-full glassmorphism flex-center px-6">
        <div className="sign-in-card">
          <header className='header'>
            <Link to="/">
              <img 
                src="/assets/icons/logo.svg"
                alt="logo"
                className='size-[30px]'
              />
            </Link>
            <h1 className='p-28-bold text-dark-100'>TourVist</h1>
          </header>
          <article>
            <h2 className='p-28-semibold text-dark-100'>
              Start Your Travel Journey
            </h2>
            <p className='p-18-regular text-center text-gray-100 !leading-7'>
              Sign in With Google to manage destinations,
              itinerary and user activity with Ease
            </p>
          </article>
          <ButtonComponent
            type='button'
            className="button-class !h-11 !w-full"
            onClick={handleGoogleLogin}
          >
            <img
              src="/assets/icons/google.svg"
              className='size-5'
              alt="google"
            />
            <span className='p-18-semibold text-white'>
              Sign In With Google
            </span>
          </ButtonComponent>
        </div>
      </section>
    </main>
  );
};

export default Signin;