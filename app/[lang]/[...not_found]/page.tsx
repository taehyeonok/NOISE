import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-full flex items-center justify-center flex-col font-LGSMHATR">
      <h1 className="text-7xl font-extrabold text-center">404</h1>
      <h2 className="text-5xl text-center mt-9">Page Not Found</h2>
      <p className="text-xl text-center mt-9">
        The Page you are looking for doesn't exist or an other error occured.
      </p>

      <Link
        className="text-xl text-center font-bold mt-9 text-blue-500 hover:text-blue-600"
        href="/"
      >
        Return Home
      </Link>
    </div>
  );
}
