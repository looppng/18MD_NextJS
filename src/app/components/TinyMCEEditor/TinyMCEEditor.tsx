import React, { useEffect, useState } from "react";
import tinymce from "tinymce";

const TinyMCEEditor = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    tinymce.init({
      selector: "#mytextarea",
      plugins: "link image code",
      toolbar:
        "undo redo | bold italic | alignleft aligncenter alignright | code | mybutton",
      height: 500,
      setup: (editor) => {
        editor.ui.registry.addButton("mybutton", {
          text: "My Button",
          onAction: () => {
            alert("Button clicked!");
          },
        });

        editor.on("change", () => {
          const newContent = editor.getContent();
          setContent(newContent);
        });
      },
    });
  }, []);

  return (
    <div>
      <textarea id="mytextarea" />
    </div>
  );
};

export default TinyMCEEditor;
