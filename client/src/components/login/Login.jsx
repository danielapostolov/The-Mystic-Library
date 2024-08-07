import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useLogin } from "../../hooks/useAuth";

export default function Login() {
    const login = useLogin();
    const navigate = useNavigate()

    const { values, changeHandler, submitHandler } = useForm(
        { email: '', password: '' },
        async ({ email, password }) => {
            try {
                await login(email, password);
                navigate('/')
                
            } catch (err) {
                console.log(err.message);
            }

        }
    );



    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form action='#' method="POST" className="space-y-6" onSubmit={submitHandler}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={values.email}
                                    onChange={changeHandler}
                                    required
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 p-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={values.password}
                                    onChange={changeHandler}
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md border-0 p-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-orange-800  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-white">
                        Not a member?{' '}
                        <Link to="/sign-up" className="font-semibold leading-6 text-orange-600 hover:text-orange-800">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}