"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="h-full flex items-center justify-center flex-col font-LGSMHATR">
      <h1 className="text-7xl font-extrabold text-center">ERROR</h1>
      <h2 className="text-5xl text-center mt-9">Page Error</h2>
      <p className="text-xl text-center mt-9">
        The Page you are looking for doesn't exist or an other error occured.
      </p>
      <button
        className="text-xl text-center font-bold mt-9 text-blue-500 hover:text-blue-600"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
