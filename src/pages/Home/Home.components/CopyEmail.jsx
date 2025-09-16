import React from 'react';
import { BiLogoGmail } from "react-icons/bi";

const CopyEmailButton = ({ email }) => {
  // const copyEmailToClipboard = () => {
  //   navigator.clipboard.writeText(email).then(() => {
  //     alert("Email copied");
  //   }).catch(err => {
  //     console.error("Failed to copy email: ", err);
  //   });
  // };
  const copyEmailToClipboard = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email)
        .then(() => {
          alert("Email copied");
        })
        .catch(err => {
          console.error("Failed to copy email using Clipboard API: ", err);
        });
    } else {
     // Fallback method for HTTP or unsupported environments
      const textArea = document.createElement("textarea");
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
        alert("Email copied");
      } catch (err) {
        console.error("Failed to copy email using fallback method: ", err);
      }
      document.body.removeChild(textArea);
    }
  };

  return (
     <span>
    <button onClick={copyEmailToClipboard}><BiLogoGmail className='h-9 w-9'/></button>
     </span>
  );
};

export default CopyEmailButton;
