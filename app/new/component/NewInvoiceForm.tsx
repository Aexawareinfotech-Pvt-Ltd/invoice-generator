"use client";
import Image from "next/image";
import { UserInputForm } from "@/app/component/form/userInputForm";
import { FormSteps } from "@/app/component/form/step/fromSteps";
import { UserDataPreview } from "@/app/new/component/userDataPreview";
import { useForm, FormProvider } from "react-hook-form";
import { useEffect, useState } from "react";

export const NewInvoiceForm = () => {
  const methods = useForm({
    defaultValues: {
      step: "1",
      // Explicitly set all fields to empty to avoid localStorage fallback
      yourEmail: "",
      yourName: "",
      yourLogo: "",
      yourAddress: "",
      yourCity: "",
      yourState: "",
      yourZip: "",
      yourCountry: "",
      yourTaxId: "",
      companyEmail: "",
      companyName: "",
      companyLogo: "",
      companyAddress: "",
      companyCity: "",
      companyState: "",
      companyZip: "",
      companyCountry: "",
      companyTaxId: "",
      invoiceNo: "",
      issueDate: "",
      dueDate: "",
      items: [{ itemDescription: "" }],
      note: "",
      discount: "",
      tax: "",
      bankName: "",
      accountNumber: "",
      accountName: "",
      ifscCode: "",
      routingCode: "",
      swiftCode: "",
      terms: "",
      notes: "",
    },
  });
  const [isClient, setIsClient] = useState(false);

  const handleReset = () => {
    // Clear all relevant localStorage keys first
    const keysToClear = [
      "step",
      "yourEmail",
      "yourName",
      "yourLogo",
      "yourAddress",
      "yourCity",
      "yourState",
      "yourZip",
      "yourCountry",
      "yourTaxId",
      "companyEmail",
      "companyName",
      "companyLogo",
      "companyAddress",
      "companyCity",
      "companyState",
      "companyZip",
      "companyCountry",
      "companyTaxId",
      "invoiceNo",
      "issueDate",
      "dueDate",
      "items",
      "note",
      "discount",
      "tax",
      "bankName",
      "accountNumber",
      "accountName",
      "ifscCode",
      "routingCode",
      "swiftCode",
      "terms",
      "notes",
    ];
    keysToClear.forEach((key) => localStorage.removeItem(key));

    // Reset form to empty state
    methods.reset({});

    // Explicitly set all fields to empty to override any defaults
    const allFields = [
      ...keysToClear.filter((k) => k !== "step"), // Exclude step
      "currency", // If used
      "items", // Set to default empty array
    ];
    allFields.forEach((field) => {
      if (field === "items") {
        methods.setValue("items", [{ itemDescription: "" }]);
      } else {
        methods.setValue(field, "");
      }
    });

    // Set step to 1
    localStorage.setItem("step", "1");
    methods.setValue("step", "1");

    // Force page reload to clear any cached component state
    window.location.reload();
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);
      try {
        const step = localStorage.getItem("step");
        if (!(step && typeof +step === "number"))
          localStorage.setItem("step", "1");
        methods.setValue("step", step || "1");
      } catch (e) {
        localStorage.setItem("step", "1");
        methods.setValue("step", "1");
      }
    }
  }, [methods]);

  return (
    <>
      {isClient ? (
        <FormProvider {...methods}>
          <div className="max-w-lg min-h-screen w-full h-full p-4 md:p-12 border-r border-dashed flex flex-col justify-between">
            <div>
              <div className="flex gap-2 items-center">
                <Image
                  src="/android-chrome-512x512.png"
                  width={40}
                  height={40}
                  className="rounded-lg"
                  alt="logo"
                />
                <div>
                  <p className="font-semibold">Invoice Generator</p>
                  <p className="text-blue-600 text-sm">By Aexaware</p>
                </div>
                {/* Reset Button */}
                <button
                  onClick={handleReset}
                  className="ml-auto text-sm text-red-500 hover:text-red-700 font-medium"
                >
                  Reset All
                </button>
              </div>
              <UserInputForm />
            </div>
            <FormSteps />
          </div>
          <div className="relative min-h-screen h-full w-full flex justify-center items-center p-4 md:p-0">
            <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <UserDataPreview />
          </div>
        </FormProvider>
      ) : (
        <div />
      )}
    </>
  );
};
