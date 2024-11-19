import { useEffect, useState } from "react";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";

const Xyz = () => {
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    loadCaptchaEnginge(5);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  return (
    <div className="min-h-screen  hero ">
      <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <LoadCanvasTemplate />
            </label>
            <input
              onBlur={handleValidateCaptcha}
              type="text"
              name="captcha"
              placeholder="type the captcha above"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            {/* TODO: apply disabled for re captcha */}
            <input
              disabled={disabled}
              className="btn "
              type="submit"
              value="Login"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Xyz;
