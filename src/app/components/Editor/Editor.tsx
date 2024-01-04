import React, { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const RichTextEditor = ({ content }) => {
  // Initialize the editor state with the provided content
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(content),
  );

  const handleEditorStateChange = (editorState: any) => {
    // Convert the edited content into a raw HTML string and pass it to the form
    const updatedContent = convertToRaw(editorState.getCurrentContent());
    console.log("Updated content:", updatedContent);
  };

  return (
    <>
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorStateChange}
      />
    </>
  );
};

export default RichTextEditor;
