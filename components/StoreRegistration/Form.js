import { useState } from "react";
import RegistrationFrom from "./RegistrationForm";
import RegistrationType from "./RegistrationType";
import SubmitDocument from "./SubmitDocuments";

const Form = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    chooseBusinessType: "",
    storeName: "",
    storeType: "",
    division: "",
    district: "",
    thana: "",
    area: "",
    streetAddress: "",
    landmark: "",

    // tradeLicense: [],
    // nidNumber: "",
    // nidFront: "",
    // nidBack: "",
    // passportPhoto: "",
    // frontView: "",
    // insideView: "",
  });

  const pageDisplay = () => {
    if (page === 0) {
      return (
        <RegistrationType
          onType
          formData={formData}
          setFormData={setFormData}
        ></RegistrationType>
      );
    } else if (page === 1) {
      return (
        <RegistrationFrom
          formData={formData}
          setFormData={setFormData}
        ></RegistrationFrom>
      );
    } else {
      return (
        <SubmitDocument
          formData={formData}
          setFormData={setFormData}
        ></SubmitDocument>
      );
    }
  };

  return (
    <section className="form bg-white rounded-lg">
      <div className="lg:p-5 md:p-6 ">
        <div className="form-header"></div>
        <div className="form-body">{pageDisplay()}</div>
        <div className="form-footer">
          <div className="flex justify-center items-center space-x-3">
            <button
              disabled={page === 0}
              onClick={() => {
                setTimeout(() => {
                  setPage((currPage) => currPage - 1);
                }, 400);
              }}
              className="flex justify-center items-center space-x-3 py-2 px-3 text-white text-lg disabled:bg-orange-300 disabled:cursor-not-allowed bg-orange-400 rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span> Go Back</span>
            </button>
            <button
              disabled={page === 2}
              onClick={() => {
                setTimeout(() => {
                  setPage((currPage) => currPage + 1);
                }, 400);
              }}
              className="flex justify-center items-center space-x-3 py-2 px-4 text-white text-lg disabled:bg-orange-300 disabled:cursor-not-allowed bg-orange-400 rounded"
            >
              <span>Next</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
