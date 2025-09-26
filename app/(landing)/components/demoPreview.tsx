import { PreviewDetails } from "@/app/component/form/previewDetails";

const DemoPreview = () => (
  <div className="mx-auto w-full flex justify-center items-center">
    <PreviewDetails
      companyDetails={defaultValue.companyDetails}
      invoiceDetails={defaultValue.invoiceDetails}
      invoiceTerms={defaultValue.invoiceTerms}
      paymentDetails={defaultValue.paymentDetails}
      yourDetails={defaultValue.yourDetails}
    />
  </div>
);

const defaultValue = {
  companyDetails: {
    companyName: "Aexaware Infotech Pvt Ltd",
    companyAddress: "Bangalore, India",
    companyCity: "Bangalore",
    companyState: "Karnataka",
    companyCountry: "India",
    companyLogo: "/logo 2.png",
    companyTaxId: "",
    companyZip: "560066",
    email: "support@aexaware.com",
  },
  yourDetails: {
    yourName: "Aexaware Infotech",
    yourAddress: "Bangalore, India",
    yourCity: "Bangalore",
    yourState: "Karnataka",
    yourCountry: "India",
    yourLogo: "/logo 2.png",
    yourEmail: "info@aexaware.com",
    yourTaxId: "",
    yourZip: "560066",
  },
  paymentDetails: {
    bankName: "Axis Bank",
    accountNumber: "1234567890",
    accountName: "AEXAWARE",
    routingCode: "123456",
    swiftCode: "AXISINBB1234",
    ifscCode: "UTIB0000000",
    currency: "INR",
  },
  invoiceTerms: {
    invoiceNumber: "Invoice #25",
    issueDate: "Fri Apr 19 2024 00:00:00 GMT+0530 (India Standard Time)",
    dueDate: "Mon Apr 22 2024 00:00:00 GMT+0530 (India Standard Time)",
  },
  invoiceDetails: {
    note: "Services Period  21/03/2024 to 20/04/2024",
    discount: "22000",
    taxRate: "18",
    items: [
      {
        itemDescription: "Software Development Services",
        amount: 225000,
        qty: 0,
      },
      {
        itemDescription: "Hosting Charge",
        amount: 22000,
        qty: 0,
      },
    ],
    currency: "INR",
  },
};
export default DemoPreview;
