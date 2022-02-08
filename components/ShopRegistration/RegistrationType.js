import { useForm } from "react-hook-form";

const RegistrationType = ({ formData, setFormData }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="">
      <h1 className="font-serif text-center text-4xl text-bold text-green-500">
        Welcome to Swadesh Business World
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-16 mb-10">
          <label
            className=" text-2xl font-semibold"
            htmlFor="chooseBusinessType"
          >
            Chose your business type:
          </label>
          <br />
          <select
            className="py-2 mt-4 border border-green-300 w-full bg-gray-100 rounded text-xl"
            name="chooseBusinessType"
            {...register("chooseBusinessType", {
              required: true,
            })}
            value={formData.chooseBusinessType}
            onChange={(e) =>
              setFormData({ ...formData, chooseBusinessType: e.target.value })
            }
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
          <br />
          {errors.chooseBusinessType && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
      </form>
    </div>
  );
};

export default RegistrationType;
