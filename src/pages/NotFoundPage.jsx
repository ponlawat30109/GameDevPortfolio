import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <section className="page section">
      <div className="container narrow not-found">
        <p className="eyebrow">Error 404</p>
        <h1>Page not found</h1>
        <p>The route may have changed, or the project does not exist.</p>
        <Link className="button primary" to="/projects">
          <ArrowLeft aria-hidden="true" />
          Back to projects
        </Link>
      </div>
    </section>
  );
}
