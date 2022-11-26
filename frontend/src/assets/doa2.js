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
      text: `Dear XXX,\n\nThank you for your email to HP Store. \n \nWe are sorry to hear that your HP Store product did not meet your expectations on this occasion, and we are now actively working to arrange the return and refund of your order. \n \nOur carrier Parcel Force has been requested to come to your original address on XXX Please note for any changes to this date, we require 48 hours’ notice to book it with the warehouse. Parcel Force are not always able to meet the requested collection dates, but they will contact you directly as soon as the date is fully booked in. 
      
      We kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit.
      
      Please write the HP Store order number XXX on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.
      
      Our driver will have a return label, this allows them to track the return through their network. Please ensure you obtain a collection receipt from the driver as this may be required in the unlikely event something goes wrong with the return to our warehouse.
      
      Once collection has been successful, we will proceed with your refund which will land in the original payment method within 10 working days. 
      
      If you require any further assistance, please let us know.
      
      Kind regards,
      `,
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
