"use client";
import CustomTextInput from "@/app/component/ui/customTextInput";
import DateInput from "@/app/component/ui/dateInput";
import { useFormContext } from "react-hook-form";

export const InvoiceTermsForm = () => {
  const { setValue } = useFormContext();

  const handleClear = () => {
    const fields = ["invoiceNo", "issueDate", "dueDate"];
    fields.forEach((field) => {
      localStorage.removeItem(field);
      setValue(field, "");
    });
  };

  return (
    <div className="pt-24">
      <div className="flex justify-between items-center mb-3">
        <p className="text-2xl font-semibold">Invoice Terms</p>
        <button
          onClick={handleClear}
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          Clear
        </button>
      </div>
      <CustomTextInput
        label="Invoice number"
        placeholder="INVOICE-01"
        variableName="invoiceNo"
      />
      <DateInput label="Issue date" variableName="issueDate" />
      <DateInput label="Due date" variableName="dueDate" />
    </div>
  );
};
