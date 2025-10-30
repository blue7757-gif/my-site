// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-500 flex items-center justify-between">
        <p>© {new Date().getFullYear()} EST. All rights reserved.</p>
        <a href="https://github.com/blue7757-gif/my-site" className="hover:text-slate-700">GitHub</a>
      </div>
    </footer>
  );
}
