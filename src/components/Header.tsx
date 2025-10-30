// src/components/Header.tsx
const nav = [
  { href: "/", label: "홈" },
  { href: "/about", label: "소개" },
  { href: "/contact", label: "문의" },
];
export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between gap-4">
        <a href="/" className="flex items-center gap-2 select-none" aria-label="홈">
          <span className="inline-grid place-items-center h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 to-sky-500 text-white font-bold">E</span>
          <span className="text-lg font-bold">EST</span>
        </a>
        <nav className="flex items-center gap-6 text-sm">
          {nav.map(n => (
            <a key={n.href} href={n.href} className="text-slate-700 hover:text-black">{n.label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}
