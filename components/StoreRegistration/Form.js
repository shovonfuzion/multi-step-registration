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
    <div className="form py-10">
      <div className="form-container bg-white container mx-auto lg:p-10 md:p-6 rounded">
        <div className="form-header"></div>
        <div className="form-body">{pageDisplay()}</div>
        <div className="form-footer">
          <div className="flex justify-around items-center">
            <button
              disabled={page === 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
              className="py-2 px-3 text-xl disabled:bg-yellow-100 bg-yellow-400 rounded"
            >
              Go Back
            </button>
            <button
              disabled={page === 2}
              onClick={() => {
                setPage((currPage) => currPage + 1);
              }}
              className="py-2 px-4 text-xl disabled:bg-yellow-100 bg-yellow-400 rounded"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
