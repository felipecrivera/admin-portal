import React, { useEffect, useRef, useState } from "react";
import logo2 from "../../../assets/img/logo-2.png";
import logo22x from "../../../assets/img/logo-2@2x.png";
import { useNavigate } from "react-router-dom";
import Loading from "../../utils/Loading";
import { useLoginCustomerMutation } from "../../../redux/customerApi";

function Signin() {
  const emailRef = useRef();
  const passowrdRef = useRef();
  const [error, setError] = useState();
  const [
    loginCustomer,
    { isLoading: isLoggingIn, isSuccess, isError, data, error: customerError },
  ] = useLoginCustomerMutation();
  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passowrdRef.current.value;

    if (email === "" || email == null) {
      setError("Email is required");
      return;
    }

    if (password === "" || password == null) {
      setError("Please provide valid password");
      return;
    }

    const formData = { email, password };
    try {
      const payload = await loginCustomer(formData).unwrap();
      localStorage.setItem("isUserLoggedIn", true);
      const { customer, token } = payload;
      localStorage.setItem("token", token);
      navigate("/");
    } catch (error) {
      localStorage.setItem("isUserLoggedIn", false);
      console.error("rejected", error);
    }
  };
  return (
    <main className="w-full main main--start p-sign-in">
      <section className="sign" id="sign">
        <div className="c-grid">
          <div className="section__wrapper">
            <div className="c-section" data-align="center">
              <div className="c-section__head">
                <div className="logo logo--header">
                  <a className="logo__link" href="/">
                    <img
                      className="logo__image"
                      src={logo2}
                      srcSet={`${logo22x} 2x`}
                      alt="Logotype"
                    />
                  </a>
                </div>
              </div>
              <div className="c-section__body">
                <h5 className="c-section__title">Log in to your account</h5>
                <div className="sign__with c-btn__wrapper c-btn__wrapper--column"></div>
                <form className="c-form" action="" method="" autoComplete="off">
                  <div className="c-form__field">
                    <label className="c-form__label" htmlFor="email">
                      Email
                    </label>
                    <input
                      ref={emailRef}
                      className="c-form__input"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Type your email address..."
                      required
                    />
                  </div>
                  <div className="c-form__field">
                    <label className="c-form__label" htmlFor="password">
                      Password
                    </label>
                    <input
                      ref={passowrdRef}
                      className="c-form__input"
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Type your password..."
                      required
                    />
                  </div>
                  <div className="c-form__field c-form__field--link">
                    <a href="#">Forgot password?</a>
                  </div>
                  <div>{error && <p> {error}</p>}</div>

                  <div className="c-form__field c-form__field--btn">
                    <div className="c-btn__wrapper">
                      {isLoggingIn && <Loading text={"Logging in..."} />}
                      {!isLoggingIn && (
                        <button
                          className="c-btn"
                          onClick={handleSignin}
                          data-btn-color="blue"
                          data-btn-size="full"
                          data-btn-fw="600"
                          data-btn-round="half"
                        >
                          Log in
                        </button>
                      )}
                    </div>
                  </div>
                </form>
                <p className="sign__link">
                  Don't have an account? <a href="/signup">Sign up</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Signin;
