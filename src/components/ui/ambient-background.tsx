/**
 * Ambient motion for dark sections. Deliberately hue-free — the drifting
 * light is white at very low alpha, so the page stays black rather than
 * picking up the colour wash the old gradient orbs produced.
 */
export function AmbientBackground({
  grid = true,
  className = "",
}: {
  grid?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* Technical grid, drifting slowly upward and fading at the edges */}
      {grid && (
        <div className="absolute inset-0 ambient-grid-mask">
          <div className="absolute inset-x-0 -top-16 bottom-0 ambient-grid" />
        </div>
      )}

      {/* Two very soft white glows on long, offset cycles */}
      <div className="absolute left-[12%] top-[8%] w-[46rem] h-[46rem] rounded-full ambient-drift-a"
           style={{ background: "radial-gradient(circle, rgba(255,255,255,0.055) 0%, transparent 62%)" }} />
      <div className="absolute right-[6%] bottom-[4%] w-[40rem] h-[40rem] rounded-full ambient-drift-b"
           style={{ background: "radial-gradient(circle, rgba(255,255,255,0.045) 0%, transparent 62%)" }} />

      {/* Grain, to stop the gradients banding on cheap panels */}
      <div className="absolute inset-0 ambient-grain" />
    </div>
  );
}
