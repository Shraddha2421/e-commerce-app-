import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLoginUserMutation } from '../redux/features/auth/authApi';
import { setUser } from '../redux/features/auth/authSlice';
import { useDispatch } from 'react-redux';

const Login = () => {
    // State for handling input fields and error messages
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const [loginUser] = useLoginUserMutation()
    const navigate = useNavigate()
    const dispatch = useDispatch(); // Fix typo from "disptach" to "dispatch"
    
    // Handle login form submission
    const handleLogin = async (e) => {
        e.preventDefault();
        setMessage('');
        setIsLoading(true);
        const data = { email, password };

        try {
            const response = await loginUser(data).unwrap();
            if (response.user) {
                dispatch(setUser({ user: response.user }));
                navigate("/");
            } else {
                setMessage('Login failed: No user data received');
            }
        } catch (error) {
            console.error('Login error:', error);
            setMessage(error.data?.message || 'Login failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <section className='h-screen flex items-center justify-center'>
            <div className='max-w-sm border shadow bg-white mx-auto p-8'>
                <h2 className='text-2xl font-semibold pt-5'>Please Login</h2>
                
                {/* Login Form */}
                <form onSubmit={handleLogin} className='space-y-5 max-w-sm mx-auto pt-8'>
                    <input 
                        type="email" name="email" id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email Address' required
                        className='w-full bg-gray-100 focus:outline-none px-5 py-3'
                    />
                    <input 
                        type="password" name="password" id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Password' required
                        className='w-full bg-gray-100 focus:outline-none px-5 py-3'
                    />
                    
                    {/* Display error message if login fails */}
                    {message && <p className='text-purple-700 text-sm'>{message}</p>}

                    <button 
                        type='submit'
                        disabled={isLoading}
                        className={`w-full mt-5 bg-purple-700 text-white hover:bg-primary font-medium py-3 rounded-md ${
                            isLoading ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                    >
                        {isLoading ? 'Logging in...' : 'Login'}
                    </button>
                </form>

                {/* Register link */}
                <p className='my-5 italic text-sm text-center'>
                    Don&apos;t have an account? 
                    <Link to="/register" className='text-purple-700 px-1 underline'>Register</Link> here.
                </p>
            </div>
        </section>
    )
}

export default Login
