export default function Home() {
  return (
    <main className="container mx-auto p-4 md:p-16 print:p-12">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">天天</h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
              我是一名前端工程师, 目前工作在成都, 如果看到我的简历请联系我
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
