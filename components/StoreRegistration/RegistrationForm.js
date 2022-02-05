import { useForm } from "react-hook-form";

const RegistrationFrom = ({ formData, setFormData }) => {
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
    <div className="mb-16">
      <h1 className="text-center text-5xl text-bold text-green-500">
        Application for Joining
      </h1>
      <div className="mx-auto">
        <h3 className="mt-16 text-3xl text-bold">Information Required</h3>
        <form
          className="lg:flex lg:space-x-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* About store section  */}
          <div className="mt-4 mb-4 lg:w-2/4 bg-gray-200 p-4 rounded">
            <h3 className="text-2xl text-bold">About Store</h3>
            <div className="bg-white p-4 rounded">
              <div className="flex mb-3">
                <p className="text-xl mr-4 w-1/5">Name:</p>
                <input
                  className="py-3 px-3 border-1 w-4/5 bg-gray-100 rounded"
                  {...register("storeName", { required: true, maxLength: 20 })}
                  placeholder="Enter your store name"
                  value={formData.storeName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      storeName: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex">
                <p className="text-xl mr-4 w-1/5">Type:</p>
                <select
                  className="py-3 px-3 border-1 w-4/5 bg-gray-100 rounded"
                  {...register("storeType", {
                    required: true,
                  })}
                  value={formData.storeType}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      storeType: e.target.value,
                    })
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
            </div>
          </div>
          {/* About store section end */}

          {/* Address section start */}
          <div className="mt-4 mb-4 lg:w-2/4 bg-gray-200 p-4 rounded">
            <h3 className="text-2xl text-bold">Address</h3>
            <div className="bg-white p-4 rounded">
              {/* Division */}
              <div className="flex mb-3">
                <p className="text-xl mr-4 w-2/6">Division:</p>
                <select
                  className="py-1 px-3 border-1 w-4/6 bg-gray-100 rounded"
                  {...register("division", {
                    required: true,
                  })}
                  value={formData.division}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      division: e.target.value,
                    })
                  }
                >
                  <option value="" disabled>
                    Choose
                  </option>
                  <option value="dhaka">Dhaka</option>
                  <option value="rajshahi">Rajshahi</option>
                  <option value="sylhet">Sylhet</option>
                </select>
                <br />
                {errors.chooseBusinessType && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              {/* District */}
              <div className="flex mb-3">
                <p className="text-xl mr-4 w-2/6">District:</p>
                <select
                  className="py-1 px-3 border-1 w-4/6 bg-gray-100 rounded"
                  {...register("district", {
                    required: true,
                  })}
                  value={formData.district}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      district: e.target.value,
                    })
                  }
                >
                  <option value="" disabled>
                    Choose
                  </option>
                  <option value="dhaka">Dhaka</option>
                  <option value="rajshahi">Rajshahi</option>
                  <option value="sylhet">Sylhet</option>
                </select>
                <br />
                {errors.chooseBusinessType && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              {/* Thana */}
              <div className="flex mb-3">
                <p className="text-xl mr-4 w-2/6">Thana:</p>
                <select
                  className="py-1 px-3 border-1 w-4/6 bg-gray-100 rounded"
                  {...register("thana", {
                    required: true,
                  })}
                  value={formData.thana}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      thana: e.target.value,
                    })
                  }
                >
                  <option value="" disabled>
                    Choose
                  </option>
                  <option value="dhaka">Dhaka</option>
                  <option value="rajshahi">Rajshahi</option>
                  <option value="sylhet">Sylhet</option>
                </select>
                <br />
                {errors.chooseBusinessType && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              {/* Area  */}
              <div className="flex mb-3">
                <p className="text-xl mr-4 w-2/6">Area/City:</p>
                <input
                  className="py-1 px-3 border-1 w-4/6 bg-gray-100 rounded"
                  {...register("area", { required: true, maxLength: 20 })}
                  placeholder="Enter your Area"
                  value={formData.area}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      area: e.target.value,
                    })
                  }
                />
              </div>
              {/* Stree address  */}
              <div className="flex mb-3">
                <p className="text-xl mr-4 w-2/6">Street Address:</p>
                <input
                  className="py-1 px-3 border-1 w-4/6 bg-gray-100 rounded"
                  {...register("streetAddress", {
                    required: true,
                    maxLength: 20,
                  })}
                  placeholder="Enter Street Address"
                  value={formData.streetAddress}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      streetAddress: e.target.value,
                    })
                  }
                />
              </div>
              {/* Landmark  */}
              <div className="flex mb-3">
                <p className="text-xl mr-4 w-2/6">Landmark:</p>
                <textarea
                  className="py-1 px-3 border-1 w-4/6 bg-gray-100 rounded"
                  {...register("landmark", { required: true, maxLength: 20 })}
                  placeholder="Enter Landmark"
                  value={formData.landmark}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      landmark: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>
          {/* Address section end */}
        </form>
      </div>
    </div>
  );
};

export default RegistrationFrom;
