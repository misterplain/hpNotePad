import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Box from "@mui/material/Box";
import { useState, useRef } from "react";

export const DOAValues = ({ name, date }) => {
  const [open, setOpen] = useState(false);
  const copyToClipboard = (e) => {
    setOpen(true);
    navigator.clipboard.writeText(e.toString());
  };

  const DOA = [
    {
      group: "DOA",
      id: "DOARefundCCCollection",
      button: "DOA Refund CC Collection",
      title: "DOA refund credit card collection",
      text:
        `Dear ${name}, 
         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s\n  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with ${date} the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ` +
        `${(<h1>example</h1>)}` +
        `Thank you for your business!`,
    },
    {
      group: "DOA",
      id: "DOARefundPPCollection",
      button: "DOA Refund PP Collection",
      title: "DOA refund PP collection",
      text: "222 Lorem Ipsum\nis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      group: "DOA",
      id: "DOARefundCCLabel",
      button: "DOA Refund CC",
      title: "DOA refund credit card label",
      text: "333 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      group: "DOA",
      id: "DOARefundPPLabel",
      button: "DOA Refund PP Label",
      title: "DOA refund PP label",
      text: "444 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];
  //   console.log(textToCopy);
  return (
    <>
      {/* <h1>return</h1> */}
      {/* reutrn individual item text */}
      {DOA.map((template) => {
        return (
          <Box key={template.id}>
            <Typography variant='h4' id={template.id}>
              {template.button}
            </Typography>
            <Button onClick={() => copyToClipboard(template.text)}>
              Copy to Clipboard
            </Button>
            <Snackbar
              open={open}
              onClose={() => setOpen(false)}
              autoHideDuration={2000}
              message='Copied to clipboard'
            />
            <Typography
              key={template.id}
              variant='body1'
              style={{ whiteSpace: "pre-wrap" }}
            >
              {template.text}
            </Typography>
            {/* <h2 key={template.id}>{template.text}</h2> */}
          </Box>
        );
      })}
    </>
  );
};
