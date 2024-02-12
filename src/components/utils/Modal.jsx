import React from "react";
import Loading from "./Loading";

function Modal(props) {
  return (
    <div className="fixed top-[5vh] md:top-[0vh] rounded-lg w-fit md:right-[30%] z-40  bg-[#10113A] shadow  overflow-auto  ">
      <div
        className="text-center rounded-lg text-white m-0 font-bold text-xl p-2  bg-[#10113A]"
        id="modal-header"
      >
        {props.title}
      </div>
      <section className="px-4" id="modal-content">
        {props.children}
      </section>
      <section className="flex justify-center p-2" id="modal-actions">
        {props.showLoading && <Loading text="Saving..." />}
        {props.showCancel && !props.showLoading && (
          <button
            onClick={props.handleOnCancel}
            className="shadow bg-slate-950 mx-4  focus:shadow-outline focus:outline-none text-white  py-2 px-6 rounded"
          >
            {props.cancelLabel}
          </button>
        )}
        {props.showSave && !props.showLoading && (
          <button
            onClick={props.handleOnSave}
            className="shadow bg-slate-950  mx-4 focus:shadow-outline focus:outline-none text-white  py-2 px-6 rounded"
          >
            {props.saveLabel}
          </button>
        )}
      </section>
    </div>
  );
}

export default Modal;
