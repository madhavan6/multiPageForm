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

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-xl">
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
            <div className="flex flex-col space-y-1 mt-2">
                <div className="flex items-start space-x-3">
                    <label className="w-28 text-gray-700 font-medium mt-2">Password:</label>
                    <div className="flex flex-col w-full">
                        <input
                            className={`border rounded-md px-3 py-2 w-full ${errors?.password ? "border-red-500" : "border-gray-500"
                                } focus:outline-none`}
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => updateFields({ password: e.target.value })}
                        />
                        {errors?.password && (
                            <p className="text-red-500 text-sm mt-1">{errors?.password}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>


    )

}
export default userEmail;