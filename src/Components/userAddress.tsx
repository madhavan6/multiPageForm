interface UserAddresProps {
    street: string;
    city: string;
    state: string;
    pincode: string;
    updateFields: (fields: Partial<UserAddresProps>) => void;
    errors?: {
        street?: string;
        city?: string;
        state?: string;
        pincode?: string;
    };
}

const UserAddress = ({ street, city, state, pincode, updateFields, errors }: UserAddresProps) => {
    return (
        <div className="max-w-md mx-auto space-y-4 p-6 bg-white shadow-md rounded-xl">
            <h1 className="text-2xl font-bold text-center mb-6">User Address</h1>
            <div className="flex space-x-3">
                <label className="w-28 text-gray-700 font-medium">Street:</label>

                <div className="flex flex-col w-full">
                    <input
                        className={`border rounded-md px-3 py-2 w-full focus:outline-none ${errors?.street ? "border-red-500" : "border-gray-500"
                            }`}
                        type="text"
                        name="street"
                        placeholder="Enter your Street"
                        value={street}
                        onChange={e => updateFields({ street: e.target.value })}
                    />

                    {errors?.street && (
                        <p className="text-red-500 text-sm mt-1">{errors.street}</p>
                    )}
                </div>
            </div>

            <div className="flex space-x-3">
                <label className="w-28 text-gray-700 font-medium">City:</label>

                <div className="flex flex-col w-full">
                    <input
                        className={`border rounded-md px-3 py-2 w-full focus:outline-none ${errors?.city ? "border-red-500" : "border-gray-500"
                            }`}
                        type="text"
                        name="city"
                        placeholder="Enter your City"
                        value={city}
                        onChange={e => updateFields({ city: e.target.value })}
                    />

                    {errors?.city && (
                        <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                    )}
                </div>
            </div>

            <div className="flex space-x-3">
                <label className="w-28 text-gray-700 font-medium">State:</label>

                <div className="flex flex-col w-full">
                    <input
                        className={`border rounded-md px-3 py-2 w-full focus:outline-none  ${errors?.state ? "border-red-500" : "border-gray-500"
                            }`}
                        type="text"
                        name="state"
                        placeholder="Enter your State"
                        value={state}
                        onChange={e => updateFields({ state: e.target.value })}
                    />

                    {errors?.state && (
                        <p className="text-red-500 text-sm mt-1">{errors.state}</p>
                    )}
                </div>
            </div>

            <div className="flex space-x-3">
                <label className="w-28 text-gray-700 font-medium">Pin Code:</label>

                <div className="flex flex-col w-full">
                    <input
                        className={`border rounded-md px-3 py-2 w-full focus:outline-none ${errors?.pincode ? "border-red-500" : "border-gray-500"
                            }`}
                        type="text"
                        name="pincode"
                        placeholder="Enter your Pin Code"
                        value={pincode}
                        onChange={e => updateFields({ pincode: e.target.value })}
                    />

                    {errors?.pincode && (
                        <p className="text-red-500 text-sm mt-1">{errors.pincode}</p>
                    )}
                </div>
            </div>

        </div>
    );
};

export default UserAddress;
