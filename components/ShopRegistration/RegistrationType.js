import { Controller, useFormContext } from "react-hook-form";

const RegistrationType = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <h1 className="font-serif text-center text-4xl text-bold text-green-500">
        Welcome to Swadesh Business World
      </h1>
      <div className="mt-16 mb-10">
        <label className=" text-2xl font-semibold" htmlFor="chooseBusinessType">
          Chose your business type:
        </label>
        <br />
        <Controller
          name="chooseBusinessType"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => (
            <select
              className="py-2 mt-4 border border-green-300 w-full bg-gray-100 rounded text-xl"
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
        {errors.chooseBusinessType && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>
    </>
  );
};

export default RegistrationType;
