import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <div className="text-8xl font-bold text-primary mb-4">404</div>
        <h1 className="text-3xl font-bold text-text-primary mb-4">
          Page Not Found
        </h1>
        <p className="text-text-secondary mb-8 leading-relaxed">
          Looks like this trade didn&apos;t hit. The page you&apos;re looking for doesn&apos;t exist
          or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-bg-primary text-lg font-semibold rounded-2xl hover:bg-primary-light hover:shadow-[0_0_40px_rgba(34,197,94,0.3)] transition-all"
          >
            Back to Home
          </Link>
          <a
            href="https://tradersyard.com/support"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-text-primary text-lg font-semibold rounded-2xl hover:border-border-hover hover:bg-white/5 transition-all"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
