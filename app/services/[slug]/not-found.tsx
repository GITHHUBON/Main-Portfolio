import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Service Not Found</h2>
        <p className="text-muted-foreground mb-8">
          The service you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/#services">
          <button className="bg-primary hover:bg-primary/80 text-primary-foreground px-6 py-2 rounded-lg transition-all">
            View All Services
          </button>
        </Link>
      </div>
    </div>
  )
}