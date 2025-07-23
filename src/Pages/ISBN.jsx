import React from "react";

export default function ISBN() {
  return (
    <div className="isbn-reg">
        <div className="isbn-heading">
            ISBN Registation
        </div>
    <form className="isbn-form">
      <div className="flex">
        <label>
          <input  placeholder="" type="text" className="input" />
          <span>First Name</span>
        </label>

        <label>
          <input  placeholder="" type="text" className="input" />
          <span>Last Name</span>
        </label>
      </div>

      <label>
        <input  placeholder="" type="email" className="input" />
        <span>Book Name</span>
      </label>

      <label>
        <input  type="tel" placeholder="" className="input" />
        <span>SSN</span>
      </label>
      <label>
        <input  type="file" placeholder="" className="input" />
        <span></span>
      </label>
      <label>
        <input  type="tel" placeholder="" className="input" />
        <span>Contact number</span>
      </label>

      <label>
        <textarea
          
          rows="3"
          placeholder=""
          className="input01"
        />
        <span>message</span>
      </label>

      <button className="fancy" type="submit">
        <span className="top-key"></span>
        <span className="text"><a href="/plagarism">submit </a></span>
        <span className="bottom-key-1"></span>
        <span className="bottom-key-2"></span>
      </button>
    </form>

    </div>
  );
}
