import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface userEmailProps {
    email: string;
    password: string;
    updateFields: (fields: Partial<userEmailProps>) => void;
    errors?: {
        email?: string;
        password?: string;
    };
}

const userEmail = ({ email, password, updateFields, errors }: userEmailProps) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="max-w-md mx-auto p-6 bg-white  shadow-md rounded-xl">
            <h1 className="text-2xl font-bold text-center mb-6">User Email</h1>
            <div className="flex flex-col space-y-1">
                <div className="flex items-start space-x-3">
                    <label className="w-28 text-gray-700 font-medium mt-2">Email:</label>
                    <div className="flex flex-col w-full">
                        <input
                            className={`border rounded-md px-3 py-2 w-full ${errors?.email ? "border-red-500" : "border-gray-500"
                                } focus:outline-none`}
                            type="text"
                            placeholder="Enter your Email"
                            value={email}
                            onChange={(e) => updateFields({ email: e.target.value })}
                        />
                        {errors?.email && (
                            <p className="text-red-500 text-sm mt-1">{errors?.email}</p>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex items-start mt-4 space-x-3">
                <label className="w-28 text-gray-700 font-medium mt-2">Password:</label>
                <div className="flex flex-col w-full">
                    {/* Wrap input + icon in relative */}
                    <div className="relative">
                        <input
                            className={`border rounded-md px-3 py-2 w-full ${errors?.password ? "border-red-500" : "border-gray-500"
                                } focus:outline-none`}
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => updateFields({ password: e.target.value })}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                        >
                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </button>
                    </div>

                    {errors?.password && (
                        <p className="text-red-500 text-sm mt-1">{errors?.password}</p>
                    )}
                </div>

            </div>
        </div>



    )

}
export default userEmail;