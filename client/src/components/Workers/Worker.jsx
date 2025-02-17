import { Link } from "react-router-dom";
// import "../styles/worker.css"; // Ensure you have a corresponding CSS file for styling
import '../../styles/worker.css';

const Worker = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      />

      <div className="card-list">
        <Link to="/allworkers" className="card-item">
          <img src="/images/worker.png" alt="Workers" className="card-img" />
          <span className="worker-category">Workers</span>
          <h3>If you require Workers, click here</h3>
          <div className="arrow">
            <i className="fas fa-arrow-right card-icon"></i>
          </div>
        </Link>
        <Link to="/addworkers" className="card-item">
          <img src="/images/hire1.png" alt="Hire Workers" className="card-img" />
          <span className="worker-category">Hire</span>
          <h3>We hire Workers here</h3>
          <div className="arrow">
            <i className="fas fa-arrow-right card-icon"></i>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Worker;
