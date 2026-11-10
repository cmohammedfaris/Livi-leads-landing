export default function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-[#FAFAFC]">
      {/* Soft, clean subtle ambient glow with brand primary #5B04C5 */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[65rem] h-[30rem] bg-gradient-to-b from-[#5B04C5]/15 via-[#5B04C5]/5 to-transparent rounded-full blur-[100px]" />
      <div className="absolute top-[35%] -right-40 w-[35rem] h-[35rem] bg-[#5B04C5]/10 rounded-full blur-[120px]" />
      <div className="absolute top-[65%] -left-40 w-[35rem] h-[35rem] bg-slate-100/60 rounded-full blur-[120px]" />
    </div>
  );
}
