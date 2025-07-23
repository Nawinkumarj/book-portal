import { useParams, useNavigate } from "react-router-dom";
import { DocsProvider, useDocs } from '../Components/DocsContext';
import { useState } from "react";

// import "./index.css"; // Import the CSS

const ReviewDetail = () => {
  const { docId } = useParams();
  const { docs } = useDocs();
  const navigate = useNavigate();

  const doc = docs.find((d) => d.id === parseInt(docId));

  const [rejected, setRejected] = useState(false);
  const [approved, setApproved] = useState(false);
  const [selectedReason, setSelectedReason] = useState("");
  const [otherReason, setOtherReason] = useState("");

  const rejectionReasons = [
    "Incomplete document",
    "Invalid format",
    "Incorrect data",
    "Unclear content",
    "Other",
  ];

  if (!doc) return <div className="review-error">Document not found</div>;

  return (
    <div className="review-container">
      {/* Left Panel */}
      <div className="review-left">
        <div className="doc-preview">
          {/* <p>[Preview of the document goes here]</p> */}
          <iframe
            src={`https://docs.google.com/gview?url=${window.location.origin}${doc.fileUrl}&embedded=true`}
            title="doc-preview"
            width="100%"
            height="100%"
            frameBorder="0"
          ></iframe>
        </div>
        <h3>{doc.name}</h3>
        <p>
          <strong>Uploaded by:</strong> {doc.uploadedBy}
        </p>
        <p>
          <strong>Submitted:</strong>{" "}
          {new Date(doc.submittedAt).toLocaleString()}
        </p>
      </div>

      {/* Right Panel */}
      <div className="review-right">
        <h3>Review Actions</h3>

        {!approved && !rejected && (
          <div className="button-group">
            <button className="btn-accept" onClick={() => setApproved(true)}>
              Accept
            </button>
            <button className="btn-reject" onClick={() => setRejected(true)}>
              Reject
            </button>
          </div>
        )}

        {approved && (
          <div>
            <div className="popup-success">
              ✅ Document approved successfully!
            </div>
            <button className="language-edit-btn" onClick={() => navigate(`/edit/${doc.id}`)}>
              Continue to language editing
            </button>
          </div>
        )}

        {rejected && (
          <div className="rejection-panel">
            <h4>Reason for Rejection</h4>
            <ul className="rejection-list">
              {rejectionReasons.map((reason) => (
                <li key={reason}>
                  <label>
                    <input
                      type="radio"
                      name="rejection"
                      value={reason}
                      onChange={(e) => setSelectedReason(e.target.value)}
                    />{" "}
                    {reason}
                  </label>
                </li>
              ))}
            </ul>

            {selectedReason === "Other" && (
              <textarea
                className="other-reason-input"
                placeholder="Type your reason here..."
                value={otherReason}
                onChange={(e) => setOtherReason(e.target.value)}
              />
            )}

            <button className="btn-submit-rejection">Submit Rejection</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewDetail;
