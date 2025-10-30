// src/app/contact/page.tsx
export default function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 space-y-6">
      <h2 className="text-3xl font-bold">문의</h2>
      <p className="text-slate-600">
        메일: <a className="text-indigo-600 underline" href="mailto:you@example.com">you@example.com</a>
      </p>
    </section>
  );
}