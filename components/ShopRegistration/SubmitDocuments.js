import { useForm } from "react-hook-form";
import FileInput from "./FileInput";
import { useState } from "react";

const SubmitDocument = ({ formData, setFormData }) => {
  const [data, setData] = useState();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      tradeLicense: data?.tradeLicense,
      nidNumber: data?.nidNumber,
      nidFront: data?.nidFront,
      nidBack: data?.nidBack,
      passportPhoto: data?.passportPhoto,
      frontView: data?.frontView,
      insideView: data?.insideView,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    setFormData({
      ...formData,
      documents: data,
    });
    alert("Your Information successfully updated");
    console.log(formData);
    reset();
  };

  return (
    <div className="mb-2">
      <h1 className="font-serif text-center text-4xl text-bold text-green-500">
        Submit Your Documents
      </h1>
      <div className="mt-1 mx-auto">
        {/* <h3 className="text-2xl text-bold">Documents</h3>
        <hr /> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <p className="text-lg">NID Number:</p>
            <div className="w-full">
              <input
                type="number"
                className="py-2 px-3 border border-green-300 w-full bg-gray-100 rounded"
                {...register("nidNumber", {
                  required: true,
                  maxLength: 30,
                  minLength: 10,
                })}
                placeholder="Enter your NID number"
                value={formData.nidNumber}
                // onChange={(e) => {
                //   setFormData({
                //     ...formData,
                //     nidNumber: e.target.value,
                //   });
                // }}
              />
              {errors.nidNumber && (
                <p className="text-red-500">
                  {errors.nidNumber.type === "required" &&
                    "This field is required"}
                  {errors.nidNumber.type === "maxLength" &&
                    "Number should be Maximum 30"}
                  {errors.nidNumber.type === "minLength" &&
                    "Number should be Minimum 10"}
                </p>
              )}
            </div>
          </div>
          <div className="lg:flex lg:space-x-5">
            <div className="lg:w-2/4">
              <div className="mb-3">
                <p className="text-lg">NID Front Photo:</p>
                <div className="w-full">
                  <FileInput name="nidFront" control={control}></FileInput>
                </div>
              </div>
              <div className="mb-3">
                <p className="text-lg">NID Back Photo:</p>
                <div className="w-full">
                  <FileInput name="nidBack" control={control}></FileInput>
                </div>
              </div>
              <div className="mb-3">
                <p className="text-lg">Passport Size Photo:</p>
                <div className="w-full">
                  <FileInput name="passportPhoto" control={control}></FileInput>
                </div>
              </div>
            </div>
            <div className="lg:w-2/4">
              <div className="mb-3">
                <p className="text-lg">Trade License:</p>
                <div className="w-full">
                  <FileInput name="tradeLicense" control={control}></FileInput>
                </div>
              </div>
              <div className="mb-3">
                <p className="text-lg">Shop Front VIew Photo:</p>
                <div className="w-full">
                  <FileInput name="frontView" control={control}></FileInput>
                </div>
              </div>
              <div className="mb-3">
                <p className="text-lg">Shop Inside VIew Photo:</p>
                <div className="w-full">
                  <FileInput name="insideView" control={control}></FileInput>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      {/* <button className="block mx-auto py-2 px-4 text-xl text-bold text-white bg-green-600 rounded">
        Submit
      </button> */}
    </div>
  );
};

export default SubmitDocument;
