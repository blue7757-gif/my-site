// src/app/page.tsx
export default function Home() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid gap-10 md:grid-cols=2 md:items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">홈페이지 배포 성공! 🎉</h1>
          <p className="text-slate-600">
            이 화면은 <code className="px-1 py-0.5 rounded bg-slate-200">src/app/page.tsx</code> 를 수정해서 나온 결과예요.
          </p>
          <div className="flex gap-3">
            <a href="/about" className="rounded-lg bg-black text-white px-4 py-2 text-sm">소개 보러가기</a>
            <a href="/contact" className="rounded-lg border px-4 py-2 text-sm hover:bg-white">문의</a>
          </div>
        </div>
        <div className="rounded-2xl border bg-white shadow-sm p-8">
          <div className="aspect-[16/10] w-full rounded-xl bg-gradient-to-br from-indigo-200 to-sky-200 grid place-items-center">
            <span className="text-slate-700">배너/이미지 영역</span>
          </div>
        </div>
      </div>
    </section>
  );
}
