export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-8">
      <section className="max-w-4xl mx-auto text-center mt-20">
        <h1 className="text-5xl font-bold mb-4">สวัสดีครับ ผมชื่อ [ชื่อคุณ]</h1>
        <p className="text-xl text-gray-600">Fullstack Developer ที่ชอบสร้างสิ่งใหม่ ๆ</p>
        <div className="mt-6">
          <a
            href="/resume.pdf"
            target="_blank"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            ดาวน์โหลด Resume
          </a>
        </div>
      </section>
    </main>
  )
}
