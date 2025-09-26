# Invoice Generator Copilot Instructions

## Project Overview

This is a Next.js (App Router) application for generating professional invoices. It features a multi-step form to collect invoice details (company, user, invoice, payment, terms), preview the invoice, and download as PDF. Built with TypeScript, Tailwind CSS (via shadcn/ui), and React PDF for generation.

Key directories:

- `app/`: Pages and layouts (e.g., `/new` for invoice creation).
- `app/component/form/`: Modular form sections (e.g., `companyDetails/`, `invoiceDetails/`).
- `components/ui/`: Reusable UI components from shadcn/ui (buttons, inputs, selects).
- `lib/`: Utilities like `pdfStyles.ts` for PDF rendering, `currency.tsx` for currency handling.
- `hooks/`: Custom hooks like `useData.ts` for form state management.

Data flow: User inputs flow through React Hook Form in steps, aggregated in `useData.ts`, previewed in `userDataPreview.tsx`, and rendered to PDF via `@react-pdf/renderer` in `downloadInvoice/`.

## Development Workflows

- Install dependencies: `bun install` (uses Bun package manager).
- Run dev server: `bun run dev` (starts at http://localhost:3000).
- Build: `bun run build`.
- Lint: `bun run lint`.
- No tests configured; focus on manual verification of form/PDF output.
- Environment: Copy `.env.example` to `.env.local` for any future API keys (none required currently).

Debugging: Use browser dev tools for form state (inspect `useData` hook). For PDF issues, check console for react-pdf errors and verify SVG conversions in `lib/svgToDataUri.ts`.

## Conventions and Patterns

- **Components**: Use shadcn/ui patterns – `cva` for variants, `clsx`/`twMerge` for classes. Example: `button.tsx` defines variants like `default`, `destructive`.
- **Forms**: Always use `react-hook-form` with `useForm`. Validate with Zod schemas (if added). Steps managed via `step/` components.
- **Styling**: Tailwind classes only; no CSS modules. Animate with Framer Motion (e.g., form transitions).
- **PDF Generation**: Client-side with `<Document>` from react-pdf. Styles in `pdfStyles.ts`. Convert SVGs (flags, icons) to data URIs.
- **Internationalization**: Currency selection with flags from `public/flag/1x1/`. Use `date-fns` for formatting.
- **Hooks**: `useGetParams.ts` for URL params, `useGetValue.ts` for form values.
- File naming: Kebab-case for directories, PascalCase for components (e.g., `userInputForm.tsx`).

Avoid: Direct DOM manipulation; prefer React patterns. No server actions yet; all client-side.

## Integrations

- **PDF**: `@react-pdf/renderer` – ensure `<PDFDownloadLink>` handles large docs without crashes.
- **Flags/Icons**: `country-flag-icons` and `lucide-react`; load SVGs dynamically.
- **No external APIs**: Standalone app; future integrations (e.g., email) via server actions.

When editing, preserve form step navigation in `NewInvoiceForm.tsx` and ensure PDF preview matches form data.
