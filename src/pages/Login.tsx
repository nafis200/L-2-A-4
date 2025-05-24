import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { verifyToken } from "../utils/verifyToken";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { setUser } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import LoginSchema from "../schemas/LoginValidation";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();

  const [login] = useLoginMutation();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const from = (location.state as any)?.from?.pathname || "/";

  const {
    setValue,
  } = useForm<FieldValues>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Logging in");

    try {
      const res = await login(data).unwrap();

      const user = verifyToken(res?.data?.accessToken);

      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("Logged in", { id: toastId, duration: 2000 });

      navigate(from, { replace: true });
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err?.message, { id: toastId, duration: 5000 });
      } else {
        toast.error("Something went wrong or blocked", { id: toastId, duration: 5000 });
      }
    }
  };


  const autoLogin = (email: string, password: string) => {
    setValue("email", email);
    setValue("password", password);


    onSubmit({ email, password });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="w-full max-w-md rounded-lg bg-gray-100 p-8 shadow-md
      xl:-mt-32 lg:-mt-20"
      >
        <h2 className="text-center text-2xl font-bold text-gray-700">Sign In</h2>

        <PHForm onSubmit={onSubmit} resolver={zodResolver(LoginSchema)}>
          <PHInput
        
            name="email"
            label="Email"
            placeholder="Enter your email"
            type="text"
          />
          <PHInput
          
            name="password"
            label="Password"
            placeholder="Enter your password"
            type="password"
          />

          <label className="flex items-center mt-2">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span className="ms-2 text-sm text-gray-600">Remember me</span>
          </label>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white mt-5 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Login
            </button>
          </div>
        </PHForm>

      
        <div className="mt-4 flex gap-4">
          <button
            type="button"
            onClick={() => autoLogin("admin@gmail.com", "123456")}
            className="flex-1 rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
          >
            Admin Credential
          </button>
          <button
            type="button"
            onClick={() => autoLogin("nabil@gmail.com", "123456")}
            className="flex-1 rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
          >
            User Credential
          </button>
        </div>

        <div className="mt-8 flex justify-center text-center">
          <p className="text-sm font-bold text-gray-600">
            are you not register{" "}
            <span className="font-semibold text-indigo-600">
              <NavLink to="/register">Register</NavLink>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
