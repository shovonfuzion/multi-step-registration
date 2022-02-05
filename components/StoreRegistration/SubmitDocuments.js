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
    reset();
  };

  return (
    <div className="mb-8">
      <h1 className="text-center text-5xl text-bold text-green-500">
        Submit Your Documents
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-4 mb-4 2xl:w-2/4 mx-auto bg-gray-200 p-4 rounded">
          <h3 className="text-2xl text-bold">Documents</h3>
          <div className="bg-white p-4 rounded">
            <div className="flex mb-3">
              <p className="text-xl mr-4 w-2/6">Trade License:</p>
              <div className="w-4/6">
                <FileInput name="tradeLicense" control={control}></FileInput>
              </div>
            </div>
            <div className="flex mb-3">
              <p className="text-xl mr-4 w-2/6">NID Number:</p>
              <div className="w-4/6">
                <input
                  type="number"
                  className="py-2 px-3 border-1 w-full bg-gray-100 rounded"
                  {...register("nidNumber", {
                    required: true,
                    maxLength: 30,
                    minLength: 10,
                  })}
                  placeholder="Enter your NID number"
                  value={formData.nidNumber}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      nidNumber: e.target.value,
                    });
                  }}
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
            <div className="flex mb-3">
              <p className="text-xl mr-4 w-2/6">NID Front Photo:</p>
              <div className="w-4/6">
                <FileInput name="nidFront" control={control}></FileInput>
              </div>
            </div>
            <div className="flex mb-3">
              <p className="text-xl mr-4 w-2/6">NID Back Photo:</p>
              <div className="w-4/6">
                <FileInput name="nidBack" control={control}></FileInput>
              </div>
            </div>
            <div className="flex mb-3">
              <p className="text-xl mr-4 w-2/6">Passport Size Photo:</p>
              <div className="w-4/6">
                <FileInput name="passportPhoto" control={control}></FileInput>
              </div>
            </div>
            <div className="flex mb-3">
              <p className="text-xl mr-4 w-2/6">Shop Front VIew Photo:</p>
              <div className="w-4/6">
                <FileInput name="frontView" control={control}></FileInput>
              </div>
            </div>
            <div className="flex mb-3">
              <p className="text-xl mr-4 w-2/6">Shop Inside VIew Photo:</p>
              <div className="w-4/6">
                <FileInput name="insideView" control={control}></FileInput>
              </div>
            </div>
          </div>
        </div>
        <button className="block mx-auto py-2 px-4 text-xl text-bold text-white bg-green-600 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SubmitDocument;
