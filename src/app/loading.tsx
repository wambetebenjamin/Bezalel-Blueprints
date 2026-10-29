export default function Loading() {
  return (
    <div className="shell py-24" role="status" aria-live="polite">
      <div className="mx-auto max-w-2xl">
        <div className="h-4 w-32 animate-pulse rounded bg-mist" />
        <div className="mt-4 h-10 w-full animate-pulse rounded bg-mist" />
        <div className="mt-3 h-10 w-4/5 animate-pulse rounded bg-mist" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="h-56 animate-pulse rounded-[10px] bg-mist" />
          <div className="h-56 animate-pulse rounded-[10px] bg-mist" />
        </div>
        <span className="sr-only">Loading</span>
      </div>
    </div>
  );
}
