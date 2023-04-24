import {
  type FormEvent,
  type FocusEvent,
  type ChangeEvent,
  useState
} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getErrorMessage } from '../utils/getErrorMessage';

const SignUp = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const { email, password, confirmPassword } = inputs;

  const navigate = useNavigate();

  const createAccount = async (e: FormEvent) => {
    e.preventDefault();

    try {
      if (password !== confirmPassword) {
        setError('Password and confirm password do not match!');

        throw new Error('Password and confirm password do not match!');
      }

      await createUserWithEmailAndPassword(getAuth(), email, password);

      navigate('/articles');
    } catch (error) {
      setError(getErrorMessage(error));
    }
  };

  const handleBlur = (_e: FocusEvent<HTMLFormElement>) => {
    setError('');
  };

  const handleInputs = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={createAccount} onBlur={handleBlur}>
      <h1>Create Account</h1>
      <div className='form-inputs'>
        {error && <p className='error'>{error}</p>}
        <input
          type='email'
          placeholder='Email'
          autoComplete='off'
          required
          name='email'
          value={email}
          onChange={handleInputs}
        />
        <input
          type='password'
          placeholder='Password'
          autoComplete='off'
          required
          name='password'
          value={password}
          onChange={handleInputs}
        />
        <input
          type='password'
          placeholder='Re-enter your password'
          autoComplete='off'
          required
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleInputs}
        />
        <button type='submit'>Sign Up</button>
        <Link to='/login'>Already have an account? Log in.</Link>
      </div>
    </form>
  );
};

export default SignUp;
