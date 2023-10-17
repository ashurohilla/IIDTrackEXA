import Card from "./Card";
import "bootstrap/dist/css/bootstrap.min.css";

const AuditLogs = () => {
  return (
    // <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3 dark:text-white">
    // <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3 text-white">
    <div>
      <div
        className="d-flex justify-content-center align-items-center flex-column container px-4 py-5"
        id="featured-3"
      >
        <div className="d-flex flex-row">
          <p className="pb-2 border-bottom text-light fs-1 fw-bold">
            Audit Logs
          </p>
        </div>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default AuditLogs;
