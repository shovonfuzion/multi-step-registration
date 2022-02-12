import { useState } from "react";
import RegistrationFrom from "./RegistrationForm";
import RegistrationType from "./RegistrationType";
import SubmitDocument from "./SubmitDocuments";
import { useForm, FormProvider } from "react-hook-form";
import { useRouter } from "next/router";
import ThankYou from "../../pages/ThankYou";

const Form = () => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState(false);
  const formTitles = ["businessType", "applicationForm", "submitDoc"];
  const methods = useForm();
  const router = useRouter();

  const handleNext = (data) => {
    console.log(data);
    if (page === 2) {
      alert("form submitted");
      setData(true);
    } else {
      setPage(page + 1);
    }
  };

  const onSubmit = (data) => {
    alert("this is onsubmit");
    console.log(data);
    // router.push("/ThankYou");
  };

  const pageDisplay = () => {
    if (page === 0) {
      return <RegistrationType></RegistrationType>;
    } else if (page === 1) {
      return <RegistrationFrom></RegistrationFrom>;
    } else {
      return <SubmitDocument></SubmitDocument>;
    }
  };

  return (
    <section className="form bg-white rounded-lg">
      {!data ? (
        <div>
          <div className="">
            {page === 0 ? (
              <div className="rounded-tl-lg bg-green-400 h-4 w-1/3"></div>
            ) : page === 1 ? (
              <div className="bg-green-400 h-4 w-2/3 rounded-tl-lg"></div>
            ) : (
              <div className="bg-green-400 h-4 w-full rounded-tl-lg rounded-tr-lg"></div>
            )}
          </div>
          {/* Form container started */}
          <div className="p-4 sm:p-8 md:p-4 lg:p-10">
            <div className="form-header"></div>
            <FormProvider {...methods}>
              <form id="hook-form" onSubmit={methods.handleSubmit(handleNext)}>
                {pageDisplay()}
              </form>
              <div className="form-footer">
                <div className="flex justify-center items-center space-x-3">
                  <button
                    disabled={page === 0}
                    onClick={() => setPage((currPage) => currPage - 1)}
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
                    className="flex justify-center items-center space-x-3 py-2 px-4 text-white text-lg bg-orange-400 rounded"
                    type="submit"
                    form="hook-form"
                  >
                    <span>{page === 2 ? "Submit" : "Next"}</span>
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
            </FormProvider>
          </div>
        </div>
      ) : (
        <div className="text-center flex justify-center items-center md:p-36 p-10">
          <div>
            <h1 className="text-5xl font-bold font-serif mb-10 text-green-400 text-center">
              Thank you for your Application.
            </h1>
            <p className="text-lg mb-10">
              Your Application ID:{" "}
              <span className="font-bold">SMM-99-DD-MM-YY-000001</span>
            </p>
            <p className="font-bold">
              If you have any query or suggession feel free to inbox me.....
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Form;
