import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import "./index.css"

const LanguageEditor = () => {
  const editorRef = useRef(null);
  const { docId } = useParams();
  const navigate = useNavigate();


  const handleSave = () => {
    const content = editorRef.current?.getContent();
    console.log("Edited content:", content);
    alert("Document saved!");
    navigate(`/cover-design/${docId}`);
  };

  return (
    <div className="language-editor-container">
      <h2>📝 Language Editing Panel</h2>

      <Editor
        apiKey="521rnm1jzvxt4fqry2azv2r8sfyh6asmlnyo3nm19fdi9dh3" // Optional: Get a free API key from tiny.cloud
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>Start editing your document here...</p>"
        init={{
          height: 600,
          menubar: true,
          plugins: [
            "advlist autolink lists link image charmap preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
        }}
      />

      <button className="save-button" onClick={handleSave}>
        Save Document
      </button>
    </div>
  );
};

export default LanguageEditor;