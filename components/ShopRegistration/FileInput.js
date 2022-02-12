import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import Dropzone from "react-dropzone";

function FileInput({ control, name }) {
  const [needFile, setNeedFile] = useState(false);
  const {
    formState: { errors },
  } = useFormContext();

  // console.log(errors[name]);
  // console.log(name);

  return (
    <>
      <Controller
        control={control}
        name={name}
        defaultValue={""}
        rules={{ required: true }}
        render={({ field }) => (
          <>
            <Dropzone
              onDrop={field.onChange}
              maxFiles={1}
              accept="image/jpeg,image/png"
              maxSize={200000}
            >
              {({ getRootProps, getInputProps }) => (
                <section className="bg-gray-200 container border-dashed border-2 border-blue-600 w-full p-2 cursor-pointer">
                  <div {...getRootProps()}>
                    <input
                      {...getInputProps()}
                      name={name}
                      onBlur={field.onBlur}
                    />
                    {field.value.length ? (
                      <div className="flex items-center justify-center space-x-4">
                        <div className="relative">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 fill-yellow-400 bg-white rounded relative"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <button
                            onClick={() => {
                              field.value.pop();
                              setNeedFile(true);
                            }}
                            className="bg-gray-500 rounded-full px-1.5 py-0.5 text-white text-xs absolute -right-2 -top-1 cursor-default"
                          >
                            X
                          </button>
                        </div>
                        <ul>
                          {field.value.map((file) => (
                            <div key={file.path}>
                              <p>{file.path}</p>
                              <span className="text-red-600">
                                {" "}
                                {file.size / 1000} KB
                              </span>
                            </div>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <div className="flex flex-col justify-center items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 stroke-green-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                        <p>Upload {name} Photo</p>
                      </div>
                    )}
                  </div>
                </section>
              )}
            </Dropzone>
          </>
        )}
      ></Controller>
      {errors[name]?.type && (
        <span className="text-red-500">This field is required</span>
      )}
    </>
  );
}

export default FileInput;
