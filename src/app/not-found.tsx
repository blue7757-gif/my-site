// src/app/not-found.tsx
export default function NotFound() {
  return (
    <section className="min-h-[60vh] grid place-items-center p-8 text-center">
      <div>
        <h1 className="text-4xl font-bold mb-2">페이지를 찾을 수 없어요 :(</h1>
        <a href="/" className="text-indigo-600 underline">홈으로</a>
      </div>
    </section>
  );
}
