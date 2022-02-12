import { Controller, useForm, useFormContext } from "react-hook-form";

const RegistrationFrom = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <h1 className="font-serif text-center text-4xl text-bold text-green-500">
        Application for Joining
      </h1>
      <div className="lg:flex lg:space-x-3">
        {/* About store section  */}
        <div className="mt-4 mb-2 lg:w-2/4 rounded">
          <h3 className="text-2xl text-bold">About Store</h3>
          <hr />
          <div className="my-4">
            <div className="mb-3">
              <p className="text-xl">Name:</p>
              <Controller
                control={control}
                name="storeName"
                defaultValue=""
                rules={{ required: true }}
                render={({ field }) => (
                  <input
                    className="py-2 px-3 border border-green-300 w-full bg-gray-100 rounded"
                    placeholder="Enter your store name"
                    {...field}
                  />
                )}
              />
              <br />
              {errors.storeName && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="my-3">
              <p className="text-xl">Type:</p>
              <Controller
                name="storeType"
                control={control}
                defaultValue=""
                rules={{ required: true }}
                render={({ field }) => (
                  <select
                    className="py-2 px-3 border border-green-300 w-full bg-gray-100 rounded"
                    {...field}
                  >
                    <option value="" disabled>
                      Choose
                    </option>
                    <option value="shop">Shop</option>
                    <option value="vendor">Vendor</option>
                    <option value="enterprise">Enterprise</option>
                    <option value="seriesStores">Series Stores</option>
                    <option value="brands">Brands</option>
                  </select>
                )}
              />
              <br />
              {errors.storeType && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            {/* Division */}
            <div className="my-3">
              <p className="text-xl">Division:</p>
              <Controller
                name="division"
                control={control}
                defaultValue=""
                rules={{ required: true }}
                render={({ field }) => (
                  <select
                    className="mb-0.5 py-2 px-3 border border-green-300 w-full bg-gray-100 rounded"
                    {...field}
                  >
                    <option value="" disabled>
                      Choose
                    </option>
                    <option value="dhaka">Dhaka</option>
                    <option value="rajshahi">Rajshahi</option>
                    <option value="sylhet">Sylhet</option>
                  </select>
                )}
              />
              <br />
              {errors.division && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            {/* District */}
            <div className="mt-3 mb-10">
              <p className="text-xl mr-4">District:</p>
              <Controller
                name="district"
                control={control}
                defaultValue=""
                rules={{ required: true }}
                render={({ field }) => (
                  <select
                    className="py-2 px-3 border border-green-300 w-full bg-gray-100 rounded"
                    {...field}
                  >
                    <option value="" disabled>
                      Choose
                    </option>
                    <option value="dhaka">Dhaka</option>
                    <option value="rajshahi">Rajshahi</option>
                    <option value="sylhet">Sylhet</option>
                  </select>
                )}
              />
              <br />
              {errors.district && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
          </div>
        </div>
        {/* About store section end */}

        {/* Address section start */}
        <div className="mt-4 mb-2 lg:w-2/4 rounded">
          <h3 className="text-2xl text-bold">Address</h3>
          <hr />
          <div className="">
            {/* Thana */}
            <div className="mt-4 mb-3">
              <p className="text-xl mr-4">Thana:</p>
              <Controller
                name="thana"
                control={control}
                defaultValue=""
                rules={{ required: true }}
                render={({ field }) => (
                  <select
                    className="py-2 px-3 border border-green-300 w-full bg-gray-100 rounded"
                    {...field}
                  >
                    <option value="" disabled>
                      Choose
                    </option>
                    <option value="dhaka">Dhaka</option>
                    <option value="rajshahi">Rajshahi</option>
                    <option value="sylhet">Sylhet</option>
                  </select>
                )}
              />
              <br />
              {errors.thana && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            {/* Area  */}
            <div className="mb-3">
              <p className="text-xl mr-4">Area/City:</p>
              <Controller
                control={control}
                name="area"
                defaultValue=""
                rules={{ required: true }}
                render={({ field }) => (
                  <input
                    className="py-2 px-3 border border-green-300 w-full bg-gray-100 rounded"
                    placeholder="Enter your Area"
                    {...field}
                  />
                )}
              />
              <br />
              {errors.area && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            {/* Stree address  */}
            <div className="mb-3">
              <p className="text-xl mr-4">Street Address:</p>
              <Controller
                control={control}
                name="streetAddress"
                defaultValue=""
                rules={{ required: true }}
                render={({ field }) => (
                  <input
                    className="py-2 px-3 border border-green-300 w-full bg-gray-100 rounded"
                    placeholder="Enter Street Address"
                    {...field}
                  />
                )}
              />
              <br />
              {errors.streetAddress && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            {/* Landmark  */}
            <div className="mb-3">
              <p className="text-xl mr-4">Landmark:</p>
              <Controller
                control={control}
                name="landmark"
                defaultValue=""
                rules={{ required: true }}
                render={({ field }) => (
                  <input
                    className="py-2 px-3 border border-green-300 w-full bg-gray-100 rounded"
                    placeholder="Enter Landmark"
                    {...field}
                  />
                )}
              />
              <br />
              {errors.landmark && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Address section end */}
    </>
  );
};

export default RegistrationFrom;
