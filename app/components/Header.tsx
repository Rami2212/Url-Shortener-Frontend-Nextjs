export function Header() {
  return (
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500 text-slate-950 font-bold text-lg">
            S
          </div>
          <div>
            <div className="text-sm font-semibold tracking-tight">
              Simple URL Shortener
            </div>
            <div className="text-xs text-slate-400">
              Short your url
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
