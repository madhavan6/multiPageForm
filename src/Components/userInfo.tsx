interface userInfoProps {
    firstName: string;
    lastName: string;
    age: string;
    updateFields: (fields: Partial<userInfoProps>) => void;
    errors?: {
        firstName?: string;
        lastName?: string;
        age?: string;
    };
}

const userInfo = ({ firstName, lastName, age, updateFields, errors }: userInfoProps) => {



    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-xl">
            <h1 className="text-2xl font-bold text-center mb-6">User Info</h1>

            <div className="flex space-x-3">
                <label className="w-28 text-gray-700 font-medium">First Name:</label>

                <div className="flex flex-col w-full">
                    <input
                        className={`border rounded-md px-3 py-2 w-full focus:outline-none  ${errors?.firstName ? "border-red-500 " : "border-gray-500 "
                            }`}
                        type="text"
                        placeholder="Enter your First Name"
                        value={firstName}
                        onChange={e => updateFields({ firstName: e.target.value })}
                    />

                    {errors?.firstName && (
                        <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                    )}
                </div>
            </div>
            <div className="flex space-x-3">
                <label className="w-28 text-gray-700 font-medium">Last Name:</label>

                <div className="flex flex-col w-full">
                    <input
                        className={`border rounded-md px-3 py-2 w-full focus:outline-none  ${errors?.lastName ? "border-red-500 " : "border-gray-500 "
                            }`}
                        type="text"
                        placeholder="Enter your Last Name"
                        value={lastName}
                        onChange={e => updateFields({ lastName: e.target.value })}
                    />

                    {errors?.lastName && (
                        <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                    )}
                </div>
            </div>

            <div className="flex space-x-3">
                <label className="w-28 text-gray-700 font-medium">Age:</label>

                <div className="flex flex-col w-full">
                    <input
                        className={`border rounded-md px-3 py-2 w-full focus:outline-none ${errors?.age ? "border-red-500" : "border-gray-500"
                            }`}
                        type="number"
                        placeholder="Enter your Age"
                        value={age}
                        onChange={e => updateFields({ age: e.target.value })}
                    />

                    {errors?.age && (
                        <p className="text-red-500 text-sm mt-1">{errors.age}</p>
                    )}
                </div>
            </div>


        </div>

    )

}
export default userInfo;