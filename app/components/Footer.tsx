export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/80">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 text-xs text-slate-500">
        <span>© {new Date().getFullYear()} Simple URL Shortener</span>
        <span className="text-slate-600">
          Short your URL
        </span>
      </div>
    </footer>
  );
}