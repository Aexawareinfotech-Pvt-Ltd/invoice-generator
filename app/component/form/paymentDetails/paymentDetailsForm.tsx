import CustomTextInput from "@/app/component/ui/customTextInput";
import CustomNumberInput from "@/app/component/ui/customNumberInput";
import { useFormContext } from "react-hook-form";

export const PaymentDetailsForm = () => {
  const { setValue } = useFormContext();

  const handleClear = () => {
    const fields = [
      "bankName",
      "accountNumber",
      "accountName",
      "ifscCode",
      "routingCode",
      "swiftCode",
    ];
    fields.forEach((field) => {
      localStorage.removeItem(field);
      setValue(field, "");
    });
  };

  return (
    <div className="pt-24">
      <div className="flex justify-between items-center mb-3">
        <p className="text-2xl font-semibold">Payment Details</p>
        <button
          onClick={handleClear}
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          Clear
        </button>
      </div>
      <CustomTextInput
        label="Bank name"
        placeholder="HSBC"
        variableName="bankName"
      />
      <CustomTextInput
        label="Account number"
        placeholder="8920804195"
        variableName="accountNumber"
      />
      <CustomTextInput
        label="Account Name"
        placeholder="Aexaware"
        variableName="accountName"
      />
      <CustomTextInput
        label="IFSC code"
        placeholder="HSBC0560002"
        variableName="ifscCode"
      />
      <CustomTextInput
        label="Routing number"
        placeholder="0804189592"
        variableName="routingCode"
      />
      <CustomNumberInput
        label="Swift code"
        placeholder="HSBCINAA123"
        variableName="swiftCode"
      />
    </div>
  );
};
