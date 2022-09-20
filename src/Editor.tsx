import React from "react";
import { useCKEditor, CKEditorConfig } from "ckeditor4-react";

const ckEditorConfig: CKEditorConfig = {
  toolbar: [
    {
      name: "basicStyles",
      items: ["Bold", "Italic", "Strike"],
    },
    {
      name: "styles",
      items: ["Styles"],
    },
    {
      name: "emoji",
      items: ["EmojiPanel"],
    },
  ],
  format_pre: {
    element: "pre",
    attributes: {
      class: "formattedCode",
    },
  },
  allowedContent: true,
  language: "en",
  height: 750,
  width: "100%",
  extraPlugins: "emoji",
};

const Editor = () => {
  const [editorElement, setEditorElement] =
    React.useState<HTMLDivElement | null>(null);
  const { editor, status, error, loading } = useCKEditor({
    config: ckEditorConfig,
    debug: true,
    dispatchEvent: ({ type, payload }) => {
      //   if (type === CKEditorEventAction.instanceReady) {
      //     alert("Editor is ready!");
      //   }
    },
    element: editorElement,
    type: "classic",
    subscribeTo: ["instanceReady"],
  });

  return <div ref={setEditorElement} />;
};

export default Editor;
