import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useFirebaseInfo } from "../../contex/UserContext";


const Register = () => {

    const { CreateUserEP, GoogleLogin, updateProfilePic } = useFirebaseInfo()
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const onSubmit = data => {
        console.log(data.name);

        CreateUserEP(data.email, data.password)
            .then(rs => {
                reset()
                updateProfilePic(data.name, null)
                    .then(re => navigate(from, { replace: true }))
                    .catch(error => console.log(error))

            })
            .catch(error => {
                console.log(error);
            })
    }

    const handelGoogleLogin = () => {
        GoogleLogin()
            .then(re => {
                console.log(re);
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="bg-base-200">
            <div className="">
                <div className="hero min-h-screen ">
                    <div className="hero-content flex flex-col p-10 ">
                        <div className="text-left w-96 pl-3">
                            <p className='text-2xl'>Coffee Toffee SignUp</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit(onSubmit)}
                                className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" className="input input-bordered"
                                        {...register("name", { required: 'Name must required' })}
                                    />
                                    {errors.name && <span className="label-text text-red-400">{errors?.name.message}</span>}
                                </div>
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" className="input input-bordered"
                                        {...register("email", { required: 'Email must required' })}
                                    />
                                    {errors.email && <span className="label-text text-red-400">{errors?.email.message}</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="password"
                                        className="input input-bordered"
                                        {...register("password", { required: ' must required' })}
                                    />
                                    {errors.password && <span className="label-text text-red-400">{errors?.password.message}</span>}
                                </div>
                                <div className="form-control">

                                    <div className="flex w-full">
                                        <button className="btn btn-primary w-3/5 mt-3">SignUp</button>
                                        <div className="divider divider-horizontal ">OR</div>
                                        <p className='flex justify-center items-center mt-3 btn-primary btn'
                                            onClick={handelGoogleLogin}>G</p>
                                    </div>
                                </div>

                            </form>
                        </div>

                        <div className="w-96 pl-3">
                            <p>Already have an account? -
                                <Link className='text-yellow-400' to='/user/login'>Login</Link>
                            </p><br />
                            <p>© Shakeeb • Contact . Privacy & terms</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Register;