import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-[600px] flex items-center justify-center bg-pf-gray px-8">
        <div className="text-center max-w-[560px] flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <h1 className="font-heading text-display text-pf-dark">404</h1>
            <div className="flex flex-col gap-4">
              <h2 className="font-heading text-h1 text-pf-dark">Page not found</h2>
              <p className="text-body-lg text-pf-dark">
                The page you're looking for doesn't exist or has been moved.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Link
              to="/"
              className="px-3 py-[6px] bg-pf-dark text-white text-body font-medium rounded-md border border-pf-dark hover:bg-pf-dark/90 transition-colors"
            >
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
