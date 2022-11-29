import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useState, useRef } from "react";
import Divider from "@mui/material/Divider";
import { BiCopy } from "react-icons/bi";
import parse from "html-react-parser";

export const TemplateText = ({ name, date, orderNumber }) => {
  const [open, setOpen] = useState(false);
  const copyToClipboard = (e) => {
    setOpen(true);
    navigator.clipboard.writeText(e.toString());
    // navigator.clipboard.writeText(replaceWithBr(e.toString()));
    // document.getElementById(id).select();
    // document.execCommand('copy');
  };

  const copyToClipboardTest = (e) => {
    let text = e.toString();
    try {
      let successful = document.execCommand("copy");
      let msg = successful ? "successful" : "unsuccessful";
      console.log("copying text command was " + msg);
    } catch (err) {}
    console.log("unable to copy text");

    setOpen(true);
  };

  const parse = require("html-react-parser");
  const example = parse("<p>Hi <b>${name}</b>,</p>");
  const example2 = parse(
    `<p>Hi <b>${name}</b> this is me testing out the line breaks <br><br>it's really satisfying to consider the possibilities</p>`
  );
  const lineBreak = "\n\n";
  console.log(example2);

  const replaceWithBr = (x) => {
    return x.replace(/\\n/g, "<h1>hello</h1>");
  };

  const testArray = [
    {
      id: "test",
      title: "test",
      // text: `Dear ${name},\n\nTbeen requested to come to your original address on ${date}. or transportation to avoid any damage in transit.Please write the HP Store order number ${orderNumber} on the
      //   `,
      text: `${example} + ${example2} +${replaceWithBr(lineBreak)} ${date}`,
      // text: `${example2}`,
    },
    {
      id: "test2",
      title: "test2",
      text: `Dear ${name},${replaceWithBr(
        lineBreak
      )}Thank you for your email to HP Store.\\n We are sorry to hear that the product you have received is defective, we are actively working to have this item returned and have your replacement issued as soon as possible.${replaceWithBr(
        lineBreak
      )}Our carrier Parcel Force has been requested to come to your original address on ${date}. Parcel Force are not always able to meet these requested collection dates, but they will contact you directly as soon as this date is fully booked in. Please note for any changes to this date, we require 48 hours’ notice to book it with the warehouse.We kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit.Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the replacement procedure.${replaceWithBr(
        lineBreak
      )}Our driver will have a return label, this allows them to track the return through their network. Please ensure you obtain a collection receipt from the driver as this may be required in the unlikely event something goes wrong with the return to our warehouse.${replaceWithBr(
        lineBreak
      )}Once collection has been successful, the replacement process will begin, and your order will be shipped to you within 2-3 working days.${replaceWithBr(
        lineBreak
      )}If there is anything further you need, please do not hesitate to let us know.${replaceWithBr(
        lineBreak
      )}Kind regards,
        `,
    },
  ];

  const TemplateTextArray = [
    {
      id: "DOARepCollection",
      title: "DOA Refund CC Collection",
      text: `Dear ${name},\n\nThank you for your email to HP Store.\n\nWe are sorry to hear that the product you have received is defective, we are actively working to have this item returned and have your replacement issued as soon as possible.\n\nOur carrier Parcel Force has been requested to come to your original address on ${date}. Parcel Force are not always able to meet these requested collection dates, but they will contact you directly as soon as this date is fully booked in. Please note for any changes to this date, we require 48 hours’ notice to book it with the warehouse.\n\nWe kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit.Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the replacement procedure.\n\nOur driver will have a return label, this allows them to track the return through their network. Please ensure you obtain a collection receipt from the driver as this may be required in the unlikely event something goes wrong with the return to our warehouse.\n\nOnce collection has been successful, the replacement process will begin, and your order will be shipped to you within 2-3 working days.\n\nIf there is anything further you need, please do not hesitate to let us know.\n\nKind regards,
        `,
    },
    {
      id: "DOARepLabel",
      title: "DOA Refund CC Collection",
      text: `Dear ${name},\n\nThank you for your email to HP Store.\n\nWe are sorry to hear that the product you have received is defective, we are actively working to have this item returned and have your replacement issued as soon as possible.\n\nWe will send you the necessary returns label via email within 5 working days so that you may return through your local Post Office. \n\nWe kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit.Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the replacement procedure.\n\nPlease ensure that you get a receipt from the Post Office when you return this, this may be required in the unlikely event something goes wrong with the return to our warehouse.\n\nOnce the return has been successful, the replacement process will begin, and your order will be shipped to you within 2-3 working days.\n\nIf there is anything further you need, please do not hesitate to let us know.\n\nKind regards,
        `,
    },
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
      id: "DOARefundWireCollection",
      title: "DOA Refund Wire Collection",
      text: `Dear ${name},\n\nThank you for your email to HP Store.\n\nWe are sorry to hear that the product you have received is defective, we are actively working to have this item returned and have your refund issued as soon as possible.\n\nOur carrier Parcel Force has been requested to come to your original address on ${date}. Parcel Force are not always able to meet these requested collection dates, but they will contact you directly as soon as this date is fully booked in. Please note for any changes to this date, we require 48 hours’ notice to book it with the warehouse.\n\nWe kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit.Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.\n\nOur driver will have a return label, this allows them to track the return through their network. Please ensure you obtain a collection receipt from the driver as this may be required in the unlikely event something goes wrong with the return to our warehouse.\n\nAs you have pre-paid your order via wire bank transfer, we require your bank details to allow us to transfer the funds for this item back into your account. Please provide the following bank details to enable us to process this refund:\n\nIBAN:\nSWIFT:\nBank Name:\nBranch:\nAccountName:\nSort Code:\nAccount Number:\n*(Important Information - Please complete all fields)\n\nAfter successful collection and arrival of the goods at our warehouse and provided bank details, we will proceed with the refund process. Your funds will be returned to your account within the next 8 working days.\n\nIf there is anything further you need, please do not hesitate to let us know.\n\nKind regards,
        `,
    },
    {
      id: "DOARefundCCLabel",
      title: "DOA Refund CC - Label",
      text: `Dear ${name},\n\nThank you for your email to HP Store.\n\nWe are sorry to hear that the product you have received is defective. We are now actively working to arrange the return and refund of your order through the Post Office. We will send the necessary labels to you via email in the next 5 working days.\n\nWe kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit.Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.\n\nPlease ensure you obtain a receipt from the Post Office as this may be required in the unlikely event something goes wrong with the return to our warehouse.\n\nOnce this item is returned to our warehouse, our refund process will begin, and the money will be returned to your account within 3-5 working days.\n\nIf there is anything further you need, please do not hesitate to let us know.\n\nKind regards,
        `,
    },
    {
      id: "DOARefundPPLabel",
      title: "DOA Refund PP - Label",
      text: `Dear ${name},\n\nThank you for your email to HP Store.\n\nWe are sorry to hear that the product you have received is defective. We are now actively working to arrange the return and refund of your order through the Post Office. We will send the necessary labels to you via email in the next 5 working days.\n\nWe kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit.Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.\n\nPlease ensure you obtain a receipt from the Post Office as this may be required in the unlikely event something goes wrong with the return to our warehouse.\n\nOnce this item is returned to our warehouse, our refund process will begin, and the money will be returned to your PayPal account within 10 working days.\n\nIf there is anything further you need, please do not hesitate to let us know.\n\nKind regards,
        `,
    },
    {
      id: "DOARefundWireLabel",
      title: "DOA Refund Wire Collection",
      text: `Dear ${name},\n\nThank you for your email to HP Store.\n\nWe are sorry to hear that the product you have received is defective. We are now actively working to arrange the return and refund of your order through the Post Office. We will send the necessary labels to you via email in the next 5 working days.\n\nWe kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit.Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.\n\nPlease ensure you obtain a receipt from the Post Office as this may be required in the unlikely event something goes wrong with the return to our warehouse.\n\nAs you have pre-paid your order via wire bank transfer, we require your bank details to allow us to transfer the funds for this item back into your account. Please provide the following bank details to enable us to process this refund:\n\nIBAN:\nSWIFT:\nBank Name:\nBranch:\nAccountName:\nSort Code:\nAccount Number:\n*(Important Information - Please complete all fields)\n\nAfter successful collection and arrival of the goods at our warehouse and provided bank details, we will proceed with the refund process. Your funds will be returned to your account within the next 8 working days.\n\nIf there is anything further you need, please do not hesitate to let us know.\n\nKind regards,
        `,
    },
    // change of mind templates
    {
      id: "COMRefundCCCollection",
      title: "Change of Mind - CC - Collection",
      text: `Dear ${name},\n\nThank you for your email to HP Store.\n\nWe are sorry to hear that your HP Store product did not meet your expectations on this occasion, and we are actively working to have this item returned and have your refund issued as soon as possible.\n\nOur carrier Parcel Force has been requested to come to your original address on ${date}. Parcel Force are not always able to meet these requested collection dates, but they will contact you directly as soon as this date is fully booked in. Please note for any changes to this date, we require 48 hours’ notice to book it with the warehouse.\n\nWe kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit.Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.\n\nOur driver will have a return label, this allows them to track the return through their network. Please ensure you obtain a collection receipt from the driver as this may be required in the unlikely event something goes wrong with the return to our warehouse.\n\nOnce collection has been successful, our refund process will begin, and the money will be returned to your account within 3-5 working days.\n\nIf there is anything further you need, please do not hesitate to let us know.\n\nKind regards,
        `,
    },
    {
      id: "COMRefundPPCollection",
      title: "Change of Mind - PP - Collection",
      text: `Dear ${name},\n\nThank you for your email to HP Store.\n\nWe are sorry to hear that your HP Store product did not meet your expectations on this occasion, and we are actively working to have this item returned and have your refund issued as soon as possible.\n\nOur carrier Parcel Force has been requested to come to your original address on ${date}. Parcel Force are not always able to meet these requested collection dates, but they will contact you directly as soon as this date is fully booked in. Please note for any changes to this date, we require 48 hours’ notice to book it with the warehouse.\n\nWe kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit.Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.\n\nOur driver will have a return label, this allows them to track the return through their network. Please ensure you obtain a collection receipt from the driver as this may be required in the unlikely event something goes wrong with the return to our warehouse.\n\nOnce collection has been successful, our refund process will begin, and the money will be returned to your PayPal account within 10 working days.\n\nIf there is anything further you need, please do not hesitate to let us know.\n\nKind regards,
        `,
    },
    {
      id: "COMRefundWireCollection",
      title: "Change of Mind - Wire - Collection",
      text: `Dear ${name},\n\nThank you for your email to HP Store.\n\nWe are sorry to hear that your HP Store product did not meet your expectations on this occasion, and we are actively working to have this item returned and have your refund issued as soon as possible.\n\nOur carrier Parcel Force has been requested to come to your original address on ${date}. Parcel Force are not always able to meet these requested collection dates, but they will contact you directly as soon as this date is fully booked in. Please note for any changes to this date, we require 48 hours’ notice to book it with the warehouse.\n\nWe kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit.Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.\n\nOur driver will have a return label, this allows them to track the return through their network. Please ensure you obtain a collection receipt from the driver as this may be required in the unlikely event something goes wrong with the return to our warehouse.\n\nAs you have pre-paid your order via wire bank transfer, we require your bank details to allow us to transfer the funds for this item back into your account. Please provide the following bank details to enable us to process this refund:\n\nIBAN:\nSWIFT:\nBank Name:\nBranch:\nAccountName:\nSort Code:\nAccount Number:\n*(Important Information - Please complete all fields)\n\nAfter successful collection and arrival of the goods at our warehouse and provided bank details, we will proceed with the refund process. Your funds will be returned to your account within the next 8 working days.\n\nIf there is anything further you need, please do not hesitate to let us know.\n\nKind regards,
        `,
    },
    {
      id: "COMRefundCCLabel",
      title: "Change of Mind - CC - Label",
      text: `Dear ${name},\n\nThank you for your email to HP Store.\n\nWe are sorry to hear that your HP Store product did not meet your expectations on this occasion, and we are now actively working to arrange the return and refund of your order through the Post Office. We will send the necessary labels to you via email in the next 5 working days.\n\nWe kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit.Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.\n\nPlease ensure you obtain a receipt from the Post Office as this may be required in the unlikely event something goes wrong with the return to our warehouse.\n\nOnce this item is returned to our warehouse, our refund process will begin, and the money will be returned to your account within 3-5 working days.\n\nIf there is anything further you need, please do not hesitate to let us know.\n\nKind regards,
        `,
    },
    {
      id: "COMRefundPPLabel",
      title: "Change of Mind - P - Label",
      text: `Dear ${name},\n\nThank you for your email to HP Store.\n\nWe are sorry to hear that your HP Store product did not meet your expectations on this occasion, and we are now actively working to arrange the return and refund of your order through the Post Office. We will send the necessary labels to you via email in the next 5 working days.\n\nWe kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit.Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.\n\nPlease ensure you obtain a receipt from the Post Office as this may be required in the unlikely event something goes wrong with the return to our warehouse.\n\nOnce this item is returned to our warehouse, our refund process will begin, and the money will be returned to your PayPal account within 10 working days.\n\nIf there is anything further you need, please do not hesitate to let us know.\n\nKind regards,
        `,
    },
    {
      id: "COMRefundWireLabel",
      title: "Change of Mind - Wire - Collection",
      text: `Dear ${name},\n\nThank you for your email to HP Store.\n\nWe are sorry to hear that the product you have received is defective. We are now actively working to arrange the return and refund of your order through the Post Office. We will send the necessary labels to you via email in the next 5 working days.\n\nWe kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit.Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.\n\nPlease ensure you obtain a receipt from the Post Office as this may be required in the unlikely event something goes wrong with the return to our warehouse.\n\nAs you have pre-paid your order via wire bank transfer, we require your bank details to allow us to transfer the funds for this item back into your account. Please provide the following bank details to enable us to process this refund:\n\nIBAN:\nSWIFT:\nBank Name:\nBranch:\nAccountName:\nSort Code:\nAccount Number:\n*(Important Information - Please complete all fields)\n\nAfter successful collection and arrival of the goods at our warehouse and provided bank details, we will proceed with the refund process. Your funds will be returned to your account within the next 8 working days.\n\nIf there is anything further you need, please do not hesitate to let us know.\n\nKind regards,
        `,
    },
    //DAMAGE TEMPLATES
    {
      id: "DMGRepCollection",
      title: "Damaged Refund CC Collection",
      text: `Dear ${name},\n\nThank you for your email to HP Store.\n\nWe are sorry to hear that the product you have received is damaged, we are actively working to have this item returned and have your replacement issued as soon as possible.\n\nOur carrier Parcel Force has been requested to come to your original address on ${date}. Parcel Force are not always able to meet these requested collection dates, but they will contact you directly as soon as this date is fully booked in. Please note for any changes to this date, we require 48 hours’ notice to book it with the warehouse.\n\nWe kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit.Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the replacement procedure.\n\nOur driver will have a return label, this allows them to track the return through their network. Please ensure you obtain a collection receipt from the driver as this may be required in the unlikely event something goes wrong with the return to our warehouse.\n\nOnce collection has been successful, the replacement process will begin, and your order will be shipped to you within 2-3 working days.\n\nIf there is anything further you need, please do not hesitate to let us know.\n\nKind regards,
        `,
    },
    {
      id: "DMGRepLabel",
      title: "Damaged Refund CC Collection",
      text: `Dear ${name},\n\nThank you for your email to HP Store.\n\nWe are sorry to hear that the product you have received is damaged, we are actively working to have this item returned and have your replacement issued as soon as possible.\n\nWe will send you the necessary returns label via email within 5 working days so that you may return through your local Post Office. \n\nWe kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit.Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the replacement procedure.\n\nPlease ensure that you get a receipt from the Post Office when you return this, this may be required in the unlikely event something goes wrong with the return to our warehouse.\n\nOnce the return has been successful, the replacement process will begin, and your order will be shipped to you within 2-3 working days.\n\nIf there is anything further you need, please do not hesitate to let us know.\n\nKind regards,
        `,
    },
    {
      id: "DMGRefundCCCollection",
      title: "Damaged Refund CC Collection",
      text: `Dear ${name},\n\nThank you for your email to HP Store.\n\nWe are sorry to hear that the product you have received is damaged, we are actively working to have this item returned and have your refund issued as soon as possible.\n\nOur carrier Parcel Force has been requested to come to your original address on ${date}. Parcel Force are not always able to meet these requested collection dates, but they will contact you directly as soon as this date is fully booked in. Please note for any changes to this date, we require 48 hours’ notice to book it with the warehouse.\n\nWe kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit.Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.\n\nOur driver will have a return label, this allows them to track the return through their network. Please ensure you obtain a collection receipt from the driver as this may be required in the unlikely event something goes wrong with the return to our warehouse.\n\nOnce collection has been successful, our refund process will begin, and the money will be returned to your account within 3-5 working days.\n\nIf there is anything further you need, please do not hesitate to let us know.\n\nKind regards,
        `,
    },
    {
      id: "DMGRefundPPCollection",
      title: "DamagedRefund PP Collection",
      text: `Dear ${name},\n\nThank you for your email to HP Store.\n\nWe are sorry to hear that the product you have received is damaged, we are actively working to have this item returned and have your refund issued as soon as possible.\n\nOur carrier Parcel Force has been requested to come to your original address on ${date}. Parcel Force are not always able to meet these requested collection dates, but they will contact you directly as soon as this date is fully booked in. Please note for any changes to this date, we require 48 hours’ notice to book it with the warehouse.\n\nWe kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit.Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.\n\nOur driver will have a return label, this allows them to track the return through their network. Please ensure you obtain a collection receipt from the driver as this may be required in the unlikely event something goes wrong with the return to our warehouse.\n\nOnce collection has been successful, our refund process will begin, and the money will be returned to your PayPal account within 10 working days.\n\nIf there is anything further you need, please do not hesitate to let us know.\n\nKind regards,
        `,
    },
    {
      id: "DMGRefundWireCollection",
      title: "Damaged Refund Wire Collection",
      text: `Dear ${name},\n\nThank you for your email to HP Store.\n\nWe are sorry to hear that the product you have received is damaged, we are actively working to have this item returned and have your refund issued as soon as possible.\n\nOur carrier Parcel Force has been requested to come to your original address on ${date}. Parcel Force are not always able to meet these requested collection dates, but they will contact you directly as soon as this date is fully booked in. Please note for any changes to this date, we require 48 hours’ notice to book it with the warehouse.\n\nWe kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit.Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.\n\nOur driver will have a return label, this allows them to track the return through their network. Please ensure you obtain a collection receipt from the driver as this may be required in the unlikely event something goes wrong with the return to our warehouse.\n\nAs you have pre-paid your order via wire bank transfer, we require your bank details to allow us to transfer the funds for this item back into your account. Please provide the following bank details to enable us to process this refund:\n\nIBAN:\nSWIFT:\nBank Name:\nBranch:\nAccountName:\nSort Code:\nAccount Number:\n*(Important Information - Please complete all fields)\n\nAfter successful collection and arrival of the goods at our warehouse and provided bank details, we will proceed with the refund process. Your funds will be returned to your account within the next 8 working days.\n\nIf there is anything further you need, please do not hesitate to let us know.\n\nKind regards,
        `,
    },
    {
      id: "DMGRefundCCLabel",
      title: "Damaged Refund CC - Label",
      text: `Dear ${name},\n\nThank you for your email to HP Store.\n\nWe are sorry to hear that the product you have received is damaged. We are now actively working to arrange the return and refund of your order through the Post Office. We will send the necessary labels to you via email in the next 5 working days.\n\nWe kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit.Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.\n\nPlease ensure you obtain a receipt from the Post Office as this may be required in the unlikely event something goes wrong with the return to our warehouse.\n\nOnce this item is returned to our warehouse, our refund process will begin, and the money will be returned to your account within 3-5 working days.\n\nIf there is anything further you need, please do not hesitate to let us know.\n\nKind regards,
        `,
    },
    {
      id: "DMGRefundPPLabel",
      title: "Damaged Refund PP - Label",
      text: `Dear ${name},\n\nThank you for your email to HP Store.\n\nWe are sorry to hear that the product you have received is damaged. We are now actively working to arrange the return and refund of your order through the Post Office. We will send the necessary labels to you via email in the next 5 working days.\n\nWe kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit.Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.\n\nPlease ensure you obtain a receipt from the Post Office as this may be required in the unlikely event something goes wrong with the return to our warehouse.\n\nOnce this item is returned to our warehouse, our refund process will begin, and the money will be returned to your PayPal account within 10 working days.\n\nIf there is anything further you need, please do not hesitate to let us know.\n\nKind regards,
        `,
    },
    {
      id: "DMGRefundWireLabel",
      title: "Damaged Refund Wire Collection",
      text: `Dear ${name},\n\nThank you for your email to HP Store.\n\nWe are sorry to hear that the product you have received is damaged. We are now actively working to arrange the return and refund of your order through the Post Office. We will send the necessary labels to you via email in the next 5 working days.\n\nWe kindly ask you to pack the goods safely in either their original box or a suitable box for transportation to avoid any damage in transit.Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.\n\nPlease ensure you obtain a receipt from the Post Office as this may be required in the unlikely event something goes wrong with the return to our warehouse.\n\nAs you have pre-paid your order via wire bank transfer, we require your bank details to allow us to transfer the funds for this item back into your account. Please provide the following bank details to enable us to process this refund:\n\nIBAN:\nSWIFT:\nBank Name:\nBranch:\nAccountName:\nSort Code:\nAccount Number:\n*(Important Information - Please complete all fields)\n\nAfter successful collection and arrival of the goods at our warehouse and provided bank details, we will proceed with the refund process. Your funds will be returned to your account within the next 8 working days.\n\nIf there is anything further you need, please do not hesitate to let us know.\n\nKind regards,
        `,
    },
    // MISSING TEMPLATES
    {
      id: "MSGAllRep",
      title: "Missing All - Rep",
      text: `Dear ${name},\n\nThank you for your email to HP Store.\n\nWe sincerely apologise that you have not received your HP order and we are actively working with our logistics team to have a replacement order sent out as soon as possible.\n\nYou will receive a confirmation email as soon this is on its way to you.\n\nIf there is anything further you need, please do not hesitate to let me know.\n\nKind regards,
      
        `,
    },
    {
      id: "MSGPartRep",
      title: "Missing Part - Rep",
      text: `Dear ${name},\n\nThank you for your email to HP Store.\n\nWe sincerely apologise that you have not received your full HP order and we are actively working with our logistics team to have the missing item sent out as soon as possible.\n\nYou will receive a confirmation email as soon this is on its way to you.\n\nIf there is anything further you need, please do not hesitate to let me know.\n\nKind regards,
      
        `,
    },
    {
      id: "MSGAllRef",
      title: "Missing All - Refund",
      text: `Dear ${name},\n\nThank you for your email to HP Store.\n\nWe sincerely apologise that you have not received your HP order and we are actively working with our logistics team to refund you as soon as possible.\n\nYour money will be returned to your account within 3-5 working days.\n\nIf there is anything further you need, please do not hesitate to let me know.\n\nKind regards,
      
        `,
    },
    {
      id: "MSGAllWireRef",
      title: "Missing All - Wire Refund",
      text: `Dear ${name},\n\nThank you for your email to HP Store.\n\nWe sincerely apologise that you have not received your HP order and we are actively working with our logistics team to refund you as soon as possible.\n\nAs you have pre-paid your order via wire bank transfer, we require your bank details to allow us to transfer the funds for this item back into your account. Please provide the following bank details to enable us to process this refund:\n\nIBAN:\nSWIFT:\nBank Name:\nBranch:\nAccountName:\nSort Code:\nAccount Number:\n*(Important Information - Please complete all fields)\n\nIf there is anything further you need, please do not hesitate to let me know.\n\nKind regards,
      
        `,
    },
    {
      id: "MSGPartRef",
      title: "Missing All - Refund",
      text: `Dear ${name},\n\nThank you for your email to HP Store.\n\nWe sincerely apologise that you have not received your full HP order and we are actively working with our logistics team to refund the missing product as soon as possible.\n\nYour money will be returned to your account within 3-5 working days.\n\nIf there is anything further you need, please do not hesitate to let me know.\n\nKind regards,
      
        `,
    },
    {
      id: "MSGPartWireRef",
      title: "Missing All - Wire Refund",
      text: `Dear ${name},\n\nThank you for your email to HP Store.\n\nWe sincerely apologise that you have not received your full HP order and we are actively working with our logistics team to refund the missing product as soon as possible.\n\nAs you have pre-paid your order via wire bank transfer, we require your bank details to allow us to transfer the funds for this item back into your account. Please provide the following bank details to enable us to process this refund:\n\nIBAN:\nSWIFT:\nBank Name:\nBranch:\nAccountName:\nSort Code:\nAccount Number:\n*(Important Information - Please complete all fields)\n\nIf there is anything further you need, please do not hesitate to let me know.\n\nKind regards,
      
        `,
    },
  ];
  return (
    <>
      {testArray.map((template) => {
        return (
          <Grid container>
            <Grid item xs={12}>
              {" "}
              <Typography
                variant='h6'
                id={template.id}
                sx={{
                  display: "inline-block",
                  borderBottom: "1px solid green",
                  marginBottom: "10px",
                }}
              >
                {template.title}
              </Typography>
              <BiCopy
                onClick={() => copyToClipboardTest(template.text)}
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
              {/* <Typography
                key={template.id}
                variant='body1'
                style={{ whiteSpace: "pre-wrap" }}
              >
                {template.text}
              </Typography> */}
              {/* <div key={template.id} style={{ whiteSpace: "pre-wrap", color: 'red' }}>
                {template.text}
              </div> */}
              <textarea
                key={template.id}
                style={{ whiteSpace: "pre-wrap", color: "red" }}
              >
                {template.text}
              </textarea>
            </Grid>
            <Divider />
          </Grid>
        );
      })}
      {TemplateTextArray.map((template) => {
        return (
          <Grid container>
            <Grid item xs={12}>
              {" "}
              <Typography
                variant='h6'
                id={template.id}
                sx={{
                  display: "inline-block",
                  borderBottom: "1px solid green",
                  marginBottom: "10px",
                }}
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
