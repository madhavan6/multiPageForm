import UserInfo from "./Components/userInfo"
import UserAddress from "./Components/userAddress"
import useForm from "./Components/useForm"
import UserEmail from "./Components/userEmail"
import { useState } from "react";
function App() {

  const InitialData = {
    firstName: "",
    lastName: "",
    age: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    email: "",
    password: ""
  };
  const [formData, setFormData] = useState(InitialData);
  const [errors, setErrors] = useState<Partial<typeof InitialData>>({});

  function updateFields(fields: Partial<typeof InitialData>) {
    setFormData(prev => ({
      ...prev,
      ...fields
    }));
  }

  const { step, steps, currentStepIndex, isFirstStep, isLastStep, back, next } = useForm([
    <UserInfo {...formData} updateFields={updateFields} errors={errors} />,
    <UserAddress {...formData} updateFields={updateFields} errors={errors} />,
    <UserEmail {...formData} updateFields={updateFields} errors={errors} />
  ]);

  function validateCurrentStep() {
    const newErrors: Partial<typeof InitialData> = {};

    if (currentStepIndex === 0) {
      if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
      if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
      if (!formData.age.trim() || isNaN(Number(formData.age))) newErrors.age = "Enter a valid age";
    }

    if (currentStepIndex === 1) {
      if (!formData.street.trim()) newErrors.street = "Street is required";
      if (!formData.city.trim()) newErrors.city = "City is required";
      if (!formData.state.trim()) newErrors.state = "State is required";
      if (!formData.pincode.trim()) {
        newErrors.pincode = "Pincode is required";
      } else if (isNaN(Number(formData.pincode))) {
        newErrors.pincode = "Pincode must be a number";
      }
    }

    if (currentStepIndex === 2) {
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Enter a valid email";
      }
      if (!formData.password.trim()) {
        newErrors.password = "Password is required";
      } else if (formData.password.length < 6) {
        newErrors.password = "Password must be at least 6 characters";
      }
    }

    return newErrors;
  }

  function onsubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validateCurrentStep();

    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      next();
    } else {
      setErrors(validationErrors);
    }
    console.log("form data JSON:", JSON.stringify(formData));

  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-600">
      <div className="m-2 p-6 border-2 border-gray-700 bg-gray-700 rounded w-96 bg-white flex flex-col">
        <form className="flex flex-col flex-1" onSubmit={onsubmit}>
          <div className="text-sm text-black text-right mb-4">
            {currentStepIndex + 1} / {steps.length}
          </div>
          <div className="mb-4">
            {step}
          </div>
          <div className="flex justify-end mt-4">
            {!isFirstStep && <button
              type="button"
              className="bg-red-500 text-white p-2 mr-2 rounded"
              onClick={back}
            >
              back
            </button>}
            <button
              type="submit"
              className={`px-2 rounded-md text-white ${isLastStep
                ? "bg-green-500 hover:bg-green-600"
                : "bg-blue-500 hover:bg-blue-600"
                }`}
            >
              {isLastStep ? "Submit" : "Next"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App;

