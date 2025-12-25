export function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-[#030213] flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin" />
        <span className="text-white/60 text-sm">Loading...</span>
      </div>
    </div>
  );
}