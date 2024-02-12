import React, { useRef, useState } from "react";
import logo2 from "../../../assets/img/logo-2.png";
import logo22x from "../../../assets/img/logo-2@2x.png";
import { useCreateCustomerMutation } from "../../../redux/customerApi";
import Loading from "../../utils/Loading";
import { useNavigate } from "react-router-dom";

function Signup() {
  const emailRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const passowrdRef = useRef();
  const confirmPasswordRef = useRef();
  const [error, setError] = useState();
  const [
    createCustomer,
    { isLoading: isCreating, isSuccess, isError, error: customerError },
  ] = useCreateCustomerMutation();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const email = emailRef.current.value;
    const password = passowrdRef.current.value;
    const confirmPassowrd = confirmPasswordRef.current.value;

    if (firstName === "" || firstName == null) {
      setError("First name is required");
      return;
    }
    if (lastName === "" || lastName == null) {
      setError("Last name is required");
      return;
    }

    if (email === "" || email == null) {
      setError("Email is required");
      return;
    }
    if (password === "" || password == null) {
      setError("Please provide valid password");
      return;
    }

    if (password === confirmPassowrd) {
      const formData = { firstName, lastName, email, password };
      await createCustomer(formData);
      if (customerError && isError) {
        console.log(customerError);
        setError(customerError);
      } else {
        if (isSuccess) navigate("/signin");
      }
    } else {
      setError("Passwords do not match");
      return;
    }
  };
  return (
    <main className="w-full main main--start p-sign-up">
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
                <h5 className="c-section__title">Sign up</h5>
                <p className="c-section__desc">
                  Fill in your details below and continue signing up
                </p>
                <form className="c-form" autoComplete="off">
                  <div className="c-form__group">
                    <div>
                      <div className="c-form__field">
                        <label className="c-form__label" htmlFor="first_name">
                          First name*
                        </label>
                        <input
                          ref={firstNameRef}
                          className="c-form__input"
                          type="text"
                          name="first_name"
                          id="first_name"
                          placeholder="Type your first name..."
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <div className="c-form__field">
                        <label className="c-form__label" htmlFor="last_name">
                          Last name*
                        </label>
                        <input
                          ref={lastNameRef}
                          className="c-form__input"
                          type="text"
                          name="last_name"
                          id="last_name"
                          placeholder="Type your last name..."
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="c-form__field">
                    <label className="c-form__label" htmlFor="email">
                      Email*
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
                  <div className="c-form__group">
                    <div>
                      <div className="c-form__field">
                        <label className="c-form__label" htmlFor="password">
                          Password*
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
                    </div>
                    <div>
                      <div className="c-form__field">
                        <label
                          className="c-form__label"
                          htmlFor="confirm_password"
                        >
                          Confirm password*
                        </label>
                        <input
                          ref={confirmPasswordRef}
                          className="c-form__input"
                          type="password"
                          name="confirm_password"
                          id="confirm_password"
                          placeholder="Retype your password..."
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div>{error && <p> {error}</p>}</div>
                  <div className="c-form__field c-form__field--btn">
                    <div className="c-btn__wrapper">
                      {isCreating && <Loading text={"Signing up..."} />}
                      {!isCreating && (
                        <button
                          onClick={handleSignup}
                          className="c-btn"
                          data-btn-color="blue"
                          data-btn-size="full"
                          data-btn-fw="600"
                          data-btn-round="half"
                        >
                          Create account
                        </button>
                      )}
                    </div>
                  </div>
                  <p className="sign__link">
                    Already have an account? <a href="#">Sign in</a>
                  </p>
                  <div className="c-form__field c-form__field--info">
                    <p className="c-form__info">
                      By clicking “Create account” you agree to our
                      <a href="#">Terms of Service</a> and
                      <a href="#">Privacy Policy</a>
                    </p>
                  </div>
                </form>
              </div>
              <div className="c-section__footer">
                <p className="c-section__info">
                  Having trouble? Contact us at
                  <a href="#">support@prospectiq.ai</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Signup;
