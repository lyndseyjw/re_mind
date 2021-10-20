import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = () => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
            const { data } = await login({
                variables: { ...formState },
            });

            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }

        // clear form values
        setFormState({
            email: '',
            password: '',
        });
    };

    // im not sure if the conditional logic is correct with the 'checking for data' statement .. perhaps this can be accomplished in the aforementioned suggestion on Home page where we just check auth.logged in & this will bypass the user going to this page at all
    // the <Link/> below to the greeting page has the user_.id as a parameter at the moment .. this was created before I fully understood context .. perhaps we can just use context instead to input user data into each page .. the idea below was that we pass in the user_.id as a parameter & then we useParams in the Greeting page to pull that out & QUERY_USER with it .. context might be the way to go however, need to play around with that
    // if user does not have an account, there is a <Link/> below that will direct them to the Signup page
    // lets go to the Signup page from here ...

    return (
        <main className="flex-row justify-center mb-4">
            <div className="col-12 col-lg-10">
                <div className="card">
                    <h4 className="card-header bg-dark text-light p-2">Login</h4>
                    <div className="card-body">
                        {data ? (
                            <p>
                                Welcome back, {data.user.name}! You may now start{' '}
                                <Link to={`/greeting/${user._id}`}>your day</Link>
                            </p>
                        ) : (
                            <card>
                                <form onSubmit={handleFormSubmit}>
                                    <input
                                        className="form-input"
                                        placeholder="Your email"
                                        name="email"
                                        type="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                    />
                                    <input
                                        className="form-input"
                                        placeholder="Your password"
                                        name="password"
                                        type="password"
                                        value={formState.password}
                                        onChange={handleChange}
                                    />
                                    <button
                                        className="btn btn-block btn-primary"
                                        style={{ cursor: 'pointer' }}
                                        type="submit"
                                    >
                                        Start My Day
                                    </button>
                                </form>
                                <p>
                                    Don't have an account yet?
                                    <Link to="/signup">Sign Up!</Link>
                                </p>
                            </card>
                        )}

                        {error && (
                            <div className="my-3 p-3 bg-danger text-white">
                                {error.message}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Login;