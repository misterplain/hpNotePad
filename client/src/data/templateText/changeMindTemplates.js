const {refundETA, replacementETA} = require('../ref-rep-ETAs.js')

//links
const changeOfMindLinks = [
  {
    id: "COMRefundCCCollection",
    title: "Refund-CC-Collect",
    important: false,
  },
  {
    id: "COMRefundPPCollection",
    title: "Refund-PP-Collect",
    important: false,
  },
  {
    id: "COMRefundWireCollection",
    title: "Refund-Wire-Collect",
    important: false,
  },
  {
    id: "COMRefundCCLabel",
    title: "Refund-CC-Label",
    important: false,
  },
  {
    id: "COMRefundPPLabel",
    title: "Refund-PP-Label",
    important: false,
  },
  {
    id: "COMRefundWireLabel",
    title: "Refund-Wire-Label",
    important: false,
  },
  {
    id: "COM14",
    title: "no return-14 days",
    important: true,
  },
];

//custom function
const getCOMTemplates = (name, orderNumber, apology, date, hour, id) => {
  // const refundETA = "14";
  // const replacementETA = "14";
  
  const templates = [
    {
      id: "COMRefundCCCollection",
      title: "Change of Mind - CC - Collection",
      text: `Dear ${name}, <br><br>
  
  
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>

  
We are sorry to hear that your HP Store product did not meet your expectations on this occasion, and we are actively working to have this item returned and have your refund issued as soon as possible.<br><br>
  
  
Our carrier Parcel Force has been requested to come to your original address on ${date}. Parcel Force are not always able to meet these requested collection dates, but they will contact you directly as soon as this date is fully booked in. Please note for any changes to this date, we require 48 hours’ notice to book it with the warehouse.<br><br>
  
  
We kindly ask you to <strong>pack the goods safely</strong> in either their original box or a suitable box for transportation to avoid any damage in transit. Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.<br><br>
  
  
Our driver will have a return label, this allows them to track the return through their network. <strong><strong>Please ensure you obtain a collection receipt from the driver</strong></strong> as this may be required in the unlikely event something goes wrong with the return to our warehouse.<br><br>
  
  
Once collection has been successful, our refund process will begin, and the funds will be returned to your account within ${refundETA} working days.<br><br>

More information on the HP Store returns policy can be found on our <a href="https://www.hp.com/gb-en/shop/faq.aspx" target="__blank">FAQs page</a><br><br>
  
  
If there is anything further you need, please do not hesitate to let us know.<br><br>
  
  
    <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
        `,
    },
    {
      id: "COMRefundPPCollection",
      title: "Change of Mind - PP - Collection",
      text: `Dear ${name}, <br><br>
  

${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>
  
  
We are sorry to hear that your HP Store product did not meet your expectations on this occasion, and we are actively working to have this item returned and have your refund issued as soon as possible.<br><br>
  
  
Our carrier <strong>Parcel Force</strong> has been requested to come to your original address on ${date}. Parcel Force are not always able to meet these requested collection dates, but they will contact you directly as soon as this date is fully booked in. Please note for any changes to this date, we require 48 hours’ notice to book it with the warehouse.<br><br>
  
  
We kindly ask you to <strong><strong>pack the goods safely</strong></strong> in either their original box or a suitable box for transportation to avoid any damage in transit. <br><br>Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.<br><br>
  
  
Our driver will have a return label, this allows them to track the return through their network. <strong><strong>Please ensure you obtain a collection receipt from the driver</strong></strong> as this may be required in the unlikely event something goes wrong with the return to our warehouse.<br><br>
  
  
Once collection has been successful, our refund process will begin, and the money will be returned to your PayPal account within ${refundETA} working days.<br><br>


If there is anything further you need, please do not hesitate to let us know.<br><br>
  
  
    <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
        `,
    },
    {
      id: "COMRefundWireCollection",
      title: "Change of Mind - Wire - Collection",
      text: `Dear ${name}, <br><br>
  
  
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


We are sorry to hear that your HP Store product did not meet your expectations on this occasion, and we are actively working to have this item returned and have your refund issued as soon as possible.<br><br>


Our carrier <strong>Parcel Force</strong> has been requested to come to your original address on ${date}. Parcel Force are not always able to meet these requested collection dates, but they will contact you directly as soon as this date is fully booked in. Please note for any changes to this date, we require 48 hours’ notice to book it with the warehouse.<br><br>


We kindly ask you to <strong>pack the goods safely</strong> in either their original box or a suitable box for transportation to avoid any damage in transit. Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.<br><br>


Our driver will have a return label, this allows them to track the return through their network. <strong>Please ensure you obtain a collection receipt from the driver</strong> as this may be required in the unlikely event something goes wrong with the return to our warehouse.<br><br>


As you have pre-paid your order via wire bank transfer, we require your bank details to allow us to transfer the funds for this item back into your account. Please provide the following bank details to enable us to process this refund:


<strong><ul><li>IBAN:</li><li>SWIFT:</li><li>Bank Name:</li><li>Branch:</li><li>AccountName:</li><li>Sort Code:</li><li>Account Number:</li></ul>*(Important Information - Please complete all fields)</strong><br><br>


After successful collection and arrival of the goods at our warehouse and provided bank details, we will proceed with the refund process. Your funds will be returned to your account within the next ${refundETA} working days.<br><br>


If there is anything further you need, please do not hesitate to let us know.<br><br>


    <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
        `,
    },
    {
      id: "COMRefundCCLabel",
      title: "Change of Mind - CC - Label",
      text: `Dear ${name},<br><br>
      
      
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


We are sorry to hear that your HP Store product did not meet your expectations on this occasion, and we are now actively working to arrange the return and refund of your order through the Post Office. We will send the necessary labels to you via email in the next 5 working days.<br><br>


We kindly ask you to <strong>pack the goods safely</strong> in either their original box or a suitable box for transportation to avoid any damage in transit. Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.<br><br>


Please ensure you obtain a receipt from the Post Office as this may be required in the unlikely event something goes wrong with the return to our warehouse.<br><br>


Once this item is returned to our warehouse, our refund process will begin, and the money will be returned to your account within ${refundETA} working days.<br><br>


If there is anything further you need, please do not hesitate to let us know.<br><br>


    <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
        `,
    },
    {
      id: "COMRefundPPLabel",
      title: "Change of Mind - P - Label",
      text: `Dear ${name}, <br><br>
      
      
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


We are sorry to hear that your HP Store product did not meet your expectations on this occasion, and we are now actively working to arrange the return and refund of your order through the Post Office. We will send the necessary labels to you via email in the next 5 working days. <br><br>


We kindly ask you to <strong>pack the goods safely</strong> in either their original box or a suitable box for transportation to avoid any damage in transit. Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund process.<br><br>


Please ensure you obtain a receipt from the Post Office as this may be required in the unlikely event something goes wrong with the return to our warehouse.<br><br>


Once this item is returned to our warehouse, our refund process will begin, and the money will be returned to your PayPal account within ${refundETA} working days. <br><br>


If there is anything further you need, please do not hesitate to let us contact us.<br><br>


    <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
        `,
    },
    {
      id: "COMRefundWireLabel",
      title: "Change of Mind - Wire - Collection",
      text: `Dear ${name}, <br><br>
      
      
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


We are sorry to hear that the product you have received is defective. We are now actively working to arrange the return and refund of your order through the Post Office. We will send the necessary labels to you via email in the next 5 working days. <br><br>


We kindly ask you to <strong>pack the goods safely</strong> in either their original box or a suitable box for transportation to avoid any damage in transit. Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund process.<br><br>


Please ensure you obtain a receipt from the Post Office as this may be required in the unlikely event something goes wrong with the return to our warehouse.<br><br>


As you have pre-paid your order via wire bank transfer, we require your bank details to allow us to transfer the funds for this item back into your account. Please provide the following bank details to enable us to process this refund:


<strong><ul><li>IBAN:</li><li>SWIFT:</li><li>Bank Name:</li><li>Branch:</li><li>AccountName:</li><li>Sort Code:</li><li>Account Number:</li></ul>*(Important Information - Please complete all fields)</strong><br><br>
  
  
After successful collection and arrival of the goods at our warehouse and provided bank details, we will proceed with the refund process. Your funds will be returned to your account within the next ${refundETA} working days.<br><br>
  
  
If there is anything further you need, please do not hesitate to let us know.<br><br>
  
  
    <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
        `,
    },
    {
      id: "COM14",
      title: "No Return outside 14 days",
      text: `Dear ${name}, <br><br>
      
      
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


We are unable to submit a return request for your order as it is now outside of the 14 day return period. We are sorry for any inconvenience this may cause.<br><br>
  
    <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
        `,
    },
  ];
  const template = templates.find((template) => template.id === id);
  return template;
};

export { getCOMTemplates, changeOfMindLinks };
