import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useState, useRef } from "react";
import Divider from "@mui/material/Divider";
import { BiCopy } from "react-icons/bi";

export const TemplateText = ({ name, date, orderNumber }) => {
  const [open, setOpen] = useState(false);
  const copyToClipboard = (e) => {
    setOpen(true);
    navigator.clipboard.writeText(e.toString());
  };

  const TemplateTextArray = [
    {
      id: "DOARefundCCCollection",
      title: "DOA Refund CC Collection",
      text: `Dear ${name},\n\nThank you for your email to HP Store.\n\nWe are sorry to hear that the product you have received is defective, we are actively working to have this item returned and have your refund issued as soon as possible.\n\nOur carrier Parcel Force has been requested to come to your original address on ${date}. Parcel Force are not always able to meet these requested collection dates, but they will contact you directly as soon as this date is fully booked in. Please note for any changes to this date, we require 48 hours’ notice to book it with the warehouse.\n\nWe kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit.Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.\n\nOur driver will have a return label, this allows them to track the return through their network. Please ensure you obtain a collection receipt from the driver as this may be required in the unlikely event something goes wrong with the return to our warehouse.\n\nOnce collection has been successful, our refund process will begin, and the money will be returned to your account within 3-5 working days.\n\nIf there is anything further you need, please do not hesitate to let us know.\n\nKind regards,
        `,
    },
    {
      id: "DOARefundPPCollection",
      title: "DOA Refund PP Collection",
      text: `Dear ${name},\n\nThank you for your email to HP Store.\n\nWe are sorry to hear that the product you have received is defective, we are actively working to have this item returned and have your refund issued as soon as possible.\n\nOur carrier Parcel Force has been requested to come to your original address on ${date}. Parcel Force are not always able to meet these requested collection dates, but they will contact you directly as soon as this date is fully booked in. Please note for any changes to this date, we require 48 hours’ notice to book it with the warehouse.\n\nWe kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit.Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.\n\nOur driver will have a return label, this allows them to track the return through their network. Please ensure you obtain a collection receipt from the driver as this may be required in the unlikely event something goes wrong with the return to our warehouse.\n\nOnce collection has been successful, our refund process will begin, and the money will be returned to your PayPal account within 10 working days.\n\nIf there is anything further you need, please do not hesitate to let us know.\n\nKind regards,
        `,
    },
    {
      id: "DOARefundCCLabel",
      title: "DOA Refund CC - Label",
      text: `Dear ${name},\n\nThank you for your email to HP Store.\n\nWe are sorry to hear that the product you have received is defective. We are now actively working to arrange the return and refund of your order through the Post Office. We will send the necessary labels in the next 5 working days.\n\nWe kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit.Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.\n\nPlease ensure you obtain a receipt from the Post Office as this may be required in the unlikely event something goes wrong with the return to our warehouse.\n\nOnce this item is returned to our warehouse, our refund process will begin, and the money will be returned to your account within 3-5 working days.\n\nIf there is anything further you need, please do not hesitate to let us know.\n\nKind regards,
        `,
    },
    {
      id: "DOARefundPPLabel",
      title: "DOA Refund PP - Label",
      text: `Dear ${name},\n\nThank you for your email to HP Store.\n\nWe are sorry to hear that the product you have received is defective. We are now actively working to arrange the return and refund of your order through the Post Office. We will send the necessary labels in the next 5 working days.\n\nWe kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit.Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.\n\nPlease ensure you obtain a receipt from the Post Office as this may be required in the unlikely event something goes wrong with the return to our warehouse.\n\nOnce this item is returned to our warehouse, our refund process will begin, and the money will be returned to your PayPal account within 10 working days.\n\nIf there is anything further you need, please do not hesitate to let us know.\n\nKind regards,
        `,
    },
  ];
  //   console.log(textToCopy);
  return (
    <>
      {/* <h1>return</h1> */}
      {/* reutrn individual item text */}
      {TemplateTextArray.map((template) => {
        return (
          <Grid container>
            <Grid item xs={12}>
              {" "}
              <Typography
                variant='h6'
                id={template.id}
                sx={{ display: "inline-block", borderBottom: "1px solid green", marginBottom: '10px' }}
              >
                {template.title}
              </Typography>
              <BiCopy
                onClick={() => copyToClipboard(template.text)}
                style={{
                  cursor: "pointer",
                  marginLeft: "10px",
                  color: "green",
                }}
              />
              <Snackbar
                open={open}
                onClose={() => setOpen(false)}
                autoHideDuration={2000}
                message='Copied to clipboard'
              />
            </Grid>
            <Grid item xs={12}>
              {" "}
              <Typography
                key={template.id}
                variant='body1'
                style={{ whiteSpace: "pre-wrap" }}
              >
                {template.text}
              </Typography>
            </Grid>
            <Divider />
          </Grid>
        );
      })}
    </>
  );
};
