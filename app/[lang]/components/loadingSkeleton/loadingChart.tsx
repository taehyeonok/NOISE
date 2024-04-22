export default function LoadingChart({ classList }: any) {
  return (
    <div
      role="status"
      className={
        "w-full p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700 " +
        classList
      }
    >
      <div className="loadingio-spinner-spinner-5fjw408229u">
        <div className="ldio-y7ynaz57uw">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
