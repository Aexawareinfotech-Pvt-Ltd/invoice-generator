import CustomTextInput from "@/app/component/ui/customTextInput";
import CustomNumberInput from "@/app/component/ui/customNumberInput";
import ImageInput from "@/app/component/ui/imageInput";
import { useFormContext } from "react-hook-form";

export const YourDetailsForm = () => {
  const { setValue, reset, getValues } = useFormContext();

  const handleClear = () => {
    const fields = [
      "yourEmail",
      "yourName",
      "yourLogo",
      "yourAddress",
      "yourCity",
      "yourState",
      "yourZip",
      "yourCountry",
      "yourTaxId",
    ];
    fields.forEach((field) => {
      localStorage.removeItem(field);
      setValue(field, "");
    });
    // Targeted reset: Preserve other fields, only empty these
    const currentValues = getValues();
    const updatedValues = { ...currentValues };
    fields.forEach((field) => {
      updatedValues[field] = "";
    });
    reset(updatedValues);
  };

  return (
    <div className="pt-24">
      <div className="flex justify-between items-center mb-3">
        <p className="text-2xl font-semibold">Your Details (From)</p>
        <button
          onClick={handleClear}
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          Clear
        </button>
      </div>
      <CustomTextInput
        label="Email"
        placeholder="e.g. info@aexaware.com"
        variableName="yourEmail"
      />
      <p className="pb-10 pt-3 text-xs font-medium text-neutral-500">
        We&apos;ll fill the billing details automatically if we find the your.
      </p>
      <p className="pb-2 text-sm font-medium text-neutral-500">
        Billing details
      </p>
      <CustomTextInput
        label="Your Name"
        placeholder="Aexaware"
        variableName="yourName"
      />
      <ImageInput label="Logo" variableName="yourLogo" />
      <CustomTextInput
        label="Address"
        placeholder="Whitefield Circle,12"
        variableName="yourAddress"
      />
      <CustomTextInput
        label="City"
        placeholder="Bangalore"
        variableName="yourCity"
      />
      <CustomTextInput
        label="State"
        placeholder="Karnataka"
        variableName="yourState"
      />
      <CustomNumberInput
        label="Zip"
        placeholder="560066"
        variableName="yourZip"
      />
      <CustomTextInput
        label="Country"
        placeholder="India"
        variableName="yourCountry"
      />
      <CustomTextInput
        label="Tax ID"
        placeholder="GSTIN 1234"
        variableName="yourTaxId"
      />
    </div>
  );
};
