import React from 'react';
import ReactDOM from 'react-dom/client';
import { marked } from 'marked';
import './styles.css';

document.addEventListener('DOMContentLoaded', () => {
  const editor = document.getElementById('editor');
  const preview = document.getElementById('preview');

  function updatePreview() {
      const markdownText = editor.value;
      const htmlContent = marked(markdownText);
      preview.innerHTML = htmlContent;
  }

//  editor
  editor.addEventListener('input', updatePreview);

  updatePreview();
});
