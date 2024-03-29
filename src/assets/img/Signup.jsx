import React from "react";

function Signup() {
  return (
    <main className="main main--start p-sign-up">
      <section className="sign" id="sign">
        <div className="c-grid">
          <div className="section__wrapper">
            <div className="c-section" data-align="center">
              <div className="c-section__head">
                <div className="logo logo--header">
                  <a className="logo__link" href="/">
                    <img
                      className="logo__image"
                      src="./img/logo-2.png"
                      srcset="./img/logo-2@2x.png 2x"
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
                <form className="c-form" action="" method="" autocomplete="off">
                  <div className="c-form__group">
                    <div>
                      <div className="c-form__field">
                        <label className="c-form__label" for="first_name">
                          First name*
                        </label>
                        <input
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
                        <label className="c-form__label" for="last_name">
                          Last name*
                        </label>
                        <input
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
                    <label className="c-form__label" for="email">
                      Email
                    </label>
                    <input
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
                        <label className="c-form__label" for="password">
                          Password
                        </label>
                        <input
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
                        <label className="c-form__label" for="confirm_password">
                          Confirm password*
                        </label>
                        <input
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
                  <div className="c-form__field c-form__field--btn">
                    <div className="c-btn__wrapper">
                      <a
                        className="c-btn"
                        href="#"
                        data-btn-color="blue"
                        data-btn-size="full"
                        data-btn-fw="600"
                        data-btn-round="half"
                      >
                        Create account
                      </a>
                    </div>
                  </div>
                  <p className="sign__link">
                    Already have an account? <a href="#">Sign in</a>
                  </p>
                  <div className="c-form__field c-form__field--info">
                    <p className="c-form__info">
                      By clicking “Create account” you agree to our{" "}
                      <a href="#">Terms of Service</a> and{" "}
                      <a href="#">Privacy Policy</a>
                    </p>
                  </div>
                </form>
              </div>
              <div className="c-section__footer">
                <p className="c-section__info">
                  Having trouble? Contact us at{" "}
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
