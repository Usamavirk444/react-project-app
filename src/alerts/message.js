import React from "react";
import './message.css'

function message(props) {
  return (
    <section>
      {/* <div class="alert alert-primary">
        <div class="icon__wrapper">
          <span class="mdi mdi-alert-outline"></span>
        </div>
        <p>
          You’ve assigned Owner of <a >Button Component.</a>
        </p>
        <span class="mdi mdi-open-in-new open"></span>
        <span class="mdi mdi-close close"></span>
      </div>
      <div class="alert alert-success">
        <div class="icon__wrapper">
          <span class="mdi mdi-alert-outline"></span>
        </div>
        <p>
          You’ve assigned Owner of <a >Button Component.</a>
        </p>
        <span class="mdi mdi-open-in-new open"></span>
        <span class="mdi mdi-close close"></span>
      </div>
      <div class="alert alert-warning">
        <div class="icon__wrapper">
          <span class="mdi mdi-alert-outline"></span>
        </div>
        <p>
          You’ve assigned Owner of <a >Button Component.</a>
        </p>
        <span class="mdi mdi-open-in-new open"></span>
        <span class="mdi mdi-close close"></span>
      </div>
      <div class="alert alert-dark">
        <div class="icon__wrapper">
          <span class="mdi mdi-alert-outline"></span>
        </div>
        <p>
          You’ve assigned Owner of <a >Button Component.</a>
        </p>
        <span class="mdi mdi-open-in-new open"></span>
        <span class="mdi mdi-close close"></span>
      </div> */}
      <div class="alert alert-error">
        {/* <div class="icon__wrapper">
          <span class="mdi mdi-alert-outline"></span>
        </div> */}
        <p>
          {props.alert.message}
        </p>
        <span class="mdi mdi-open-in-new open"></span>
        <span class="mdi mdi-close close"></span>
      </div>
    </section>
  );
}

export default message;
