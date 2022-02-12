import { Controller, useForm, useFormContext } from "react-hook-form";
import FileInput from "./FileInput";
import { useState } from "react";

const SubmitDocument = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <div className="mb-5">
        <h1 className="mb-0.5 font-serif text-center text-4xl text-bold text-green-500">
          Submit Your Documents
        </h1>
        {/* <h3 className="text-2xl text-bold">Documents</h3>
        <hr /> */}
        <div className="mb-3">
          <p className="text-lg">NID Number:</p>
          <div className="w-full">
            <Controller
              control={control}
              name="nidNumber"
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <input
                  type="number"
                  className="py-2 px-3 border border-green-300 w-full bg-gray-100 rounded"
                  placeholder="Enter your NID number"
                  {...field}
                />
              )}
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
      </div>
    </>
  );
};

export default SubmitDocument;
