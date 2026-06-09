export function MapSection() {
  return (
    <section className="w-full">
      {/* Info bar */}
      <div className="bg-[#492e3b] px-4 py-6 sm:px-6 md:px-[80px]">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#d2c3c7]">
              Visit Us
            </p>
            <p className="mt-1 text-[16px] font-medium text-white">
              Le Thia Cares — Alagapuram, Salem
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:+918090920202"
              className="flex items-center gap-2 text-[14px] font-semibold text-white transition-opacity hover:opacity-80"
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              +91 80909 20202
            </a>
            <a
              href="https://maps.app.goo.gl/XKy3CsZfya3LUKNi9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[14px] font-semibold text-white transition-opacity hover:opacity-80"
            >
              <span className="material-symbols-outlined text-[18px]">directions</span>
              Get Directions
            </a>
          </div>
        </div>
      </div>

      {/* Full-width map */}
      <div className="h-[320px] w-full md:h-[420px]">
        <iframe
          title="Le Thia Cares Location"
          src="https://maps.google.com/maps?q=No.153+First+Floor,+Dayanandhan+Street,+Alagapuram,+Salem-636004,+Tamil+Nadu&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
