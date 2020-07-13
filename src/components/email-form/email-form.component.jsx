import React from "react";
import "./email-form.styles.scss";
const EmailForm = ({ title }) => {
  return (
    <div className="row emailFormWrap">
      <p>{title}</p>
      <form
        action="https://hacktothefuture.us10.list-manage.com/subscribe/post?u=cf3f2e1ca214d8059b913759b&amp;id=11ef43cb28"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate
      >
        <input
          type="email"
          // value=""
          name="EMAIL"
          className="required email"
          id="mce-EMAIL"
          placeholder="Please Enter Email"
        />
        <button
          type="submit"
          value="Subscribe"
          name="subscribe"
          id="mc-embedded-subscribe"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default EmailForm;
