import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import useUser from '../../hooks/useUser';

const SignInButton = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <>
      {user ? (
        <button className='sign-in-button' onClick={() => signOut(getAuth())}>
          Log Out
        </button>
      ) : (
        <button className='sign-in-button' onClick={() => navigate('/login')}>
          Sign In
        </button>
      )}
    </>
  );
};

export default SignInButton;
