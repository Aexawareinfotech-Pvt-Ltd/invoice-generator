import CustomTextInput from "@/app/component/ui/customTextInput";
import CustomNumberInput from "@/app/component/ui/customNumberInput";
import ImageInput from "@/app/component/ui/imageInput";
import { useFormContext } from "react-hook-form";

export const CompanyDetailsForm = () => {
  const { setValue, reset, getValues } = useFormContext();

  const handleClear = () => {
    const fields = [
      "companyEmail",
      "companyName",
      "companyLogo",
      "companyAddress",
      "companyCity",
      "companyState",
      "companyZip",
      "companyCountry",
      "companyTaxId",
    ];
    fields.forEach((field) => {
      localStorage.removeItem(field);
      setValue(field, "");
    });
    // Targeted reset
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
        <p className="text-2xl font-semibold">Company Details (To)</p>
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
        variableName="email"
      />
      <p className="pb-10 pt-3 text-xs font-medium text-neutral-500">
        We&apos;ll fill the billing details automatically if we find the
        company.
      </p>
      <p className="pb-2 text-sm font-medium text-neutral-500">
        Billing details
      </p>
      <CustomTextInput
        label="Company name"
        placeholder="Aexaware Infotech"
        variableName="companyName"
      />
      <ImageInput label="Logo" variableName="companyLogo" />
      <CustomTextInput
        label="Address"
        placeholder="Whitefield Circle,12"
        variableName="companyAddress"
      />
      <CustomTextInput
        label="City"
        placeholder="Bangalore"
        variableName="companyCity"
      />
      <CustomTextInput
        label="State"
        placeholder="Karnataka"
        variableName="companyState"
      />
      <CustomNumberInput
        label="Zip"
        placeholder="560066"
        variableName="companyZip"
      />
      <CustomTextInput
        label="Country"
        placeholder="India"
        variableName="companyCountry"
      />
      <CustomTextInput
        label="Tax ID"
        placeholder="GSTIN 1234"
        variableName="companyTaxId"
      />
    </div>
  );
};
