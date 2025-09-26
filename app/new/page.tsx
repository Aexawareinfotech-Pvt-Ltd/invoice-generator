import dynamic from "next/dynamic";
import { Suspense } from "react";

const NewInvoiceForm = dynamic(
  () =>
    import("@/app/new/component/NewInvoiceForm").then(
      (mod) => mod.NewInvoiceForm
    ),
  { ssr: false }
);

const Page = () => (
  <div className="min-h-screen overflow-y-auto h-full flex items-center md:flex-row flex-col-reverse">
    <Suspense fallback={<div>Loading form...</div>}>
      <NewInvoiceForm />
    </Suspense>
  </div>
);

export default Page;
