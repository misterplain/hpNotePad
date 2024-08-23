const {refundETA, replacementETA} = require('../ref-rep-ETAs.js')

const orderStatus2Links = [
  {
    id: "OSRTSreforrep",
    title: "RTS - ref or rep?",
    important: true,
  },
  {
    id: "OSRTSref",
    title: "RTS - ref",
    important: true,
  },
  {
    id: "OSRTSrep",
    title: "RTS - rep",
    important: true,
  },
  {
    id: "MSCCancelRequest",
    title: "Cancel Request",
    important: false,
  },
  {
    id: "MSCCancelSuccess",
    title: "Cancel Success - CC/PP",
    important: false,
  },
  {
    id: "MSCCancelSuccessWire",
    title: "Cancel Success - Wire",
    important: false,
  },
  {
    id: "OSETAFull",
    title: "No ETA - Full",
    important: false,
  },
  {
    id: "OSETAPart",
    title: "No ETA - Part",
    important: false,
  },
  {
    id: "OSEOL",
    title: "End of Life - CC/PP",
    important: false,
  },
  {
    id: "OSEOLWire",
    title: "End of Life - Wire",
    important: false,
  },
  {
    id: "OSFraud",
    title: "Fraud Rejected",
    important: false,
  },
];

const getOrderStatus2Templates = (
  name,
  orderNumber,
  apology,
  date,
  hour,
  id
) => {
  const templates = [
    {
      id: "OSRTSreforrep",
      title: "RTS - ref or rep?",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for recent HP Store order. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>
    I apologise for the failed delivery.<br><br>

    Please confirm if you wish to have a full refund on the order, or if you wish to have a replacement order generated. If you wish to have a replacement order generated, please confirm the full and complete delivery address so as to prevent further failed deliveries. <br><br>
    

    <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
`,
    },
    {
      id: "OSRTSref",
      title: "RTS - Refund sent",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for recent HP Store order. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>

    I apologise for the failed delivery.<br><br>

    We have initiated the refund today and your funds will be back in your account within ${refundETA} working days.<br><br>
If there is anything further you need, please do not hesitate to let me know.<br><br>

    
    <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
`,
    },
    {
      id: "OSRTSrep",
      title: "RTS - rep created",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for recent HP Store order. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>

    I apologise for the failed delivery.<br><br>

    I have sent instructions to the warehouse to ship a replacement order to you, this can take up to ${replacementETA} working days. You will soon begin to get automated emails from the system letting you know when it is on its way.<br><br>

    If there is anything further you need, please do not hesitate to let me know.<br><br>


rep
    

    <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
`,
    },
    {
      id: "MSCCancelRequest",
      title: "Cancellation Request",
      text: `Dear ${name},<br><br>
  
  
  ${
    hour < 13 ? "Good morning, " : "Good afternoon, "
  }thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>
  
        I confirm that the cancellation request has been sent. You will receive an automated email from the system when it completes. Please allow 3-5 days from receipt of the cancellation email to see your money back in your account.<br><br>
  Please note that HP has not taken any money for this order, as we only take payment when the goods ship. Any money on reserve at your bank will be lifted within 3/5 days of the cancellation.<br><br>
  
  
  
  Due to the speed of the shipping system, we are not always able to fully cancel the order before it ships to the courier. If this is the case, you will be notified that this has shipped, please note that if you refuse the delivery and let us know when you do, we will initiate the full refund.<br><br>
  
  
  If this does cancel successfully before shipment, you will be notified as well via email. <br><br>
  
  
      <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
   `,
    },
    {
      id: "MSCCancelSuccess",
      title: "Cancellation Success - CC/PP",
      text: `Dear ${name},<br><br>
  
  
  ${
    hour < 13 ? "Good morning, " : "Good afternoon, "
  }thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>
  
  
  Thank you for your request to cancel your recent HP Store order.<br><br>
  
  
  We can confirm that your order is fully cancelled.<br><br>
  
  
  Please note that if this purchase was made with a credit card, no money had been taken by HP for this order. Any money that appears to have been taken is simply on hold at your bank and will be returned within 3-5 business days. PayPal refunds are automatically initiated and will be back into your account within ${refundETA} business days.<br><br>
  
  
      <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
   `,
    },
    {
      id: "MSCCancelSuccessWire",
      title: "Cancellation Success - Wire",
      text: `Dear ${name},<br><br>
  
  
  ${
    hour < 13 ? "Good morning, " : "Good afternoon, "
  }thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>
  
  
  Thank you for your request to cancel your recent HP Store order.<br><br>
  
  
  We can confirm that your order is fully cancelled.<br><br>
  
  
  As you have pre-paid your order via wire bank transfer, we require your bank details to allow us to transfer the funds for this item back into your account. Please provide the following bank details to enable us to process this refund:
  
  
  <strong><ul><li>IBAN:</li><li>SWIFT:</li><li>Bank Name:</li><li>Branch:</li><li>AccountName:</li><li>Sort Code:</li><li>Account Number:</li></ul>*(Important Information - Please complete all fields)</strong><br><br>
  
  
  We would appreciate if you can also send us a screenshot of the transaction.<br><br>
  
  
  If you need anything further, please let us know.<br><br>
  
  
      <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
   `,
    },
    {
      id: "OSEOL",
      title: "End of Life - CC/PP",
      text: `Dear ${name},<br><br>
  
  
  ${
    hour < 13 ? "Good morning, " : "Good afternoon, "
  }thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>
  
  
        We are sorry to advise that we are no longer able to fulfil your recent HP Store order as this product has now been discontinued and no further stock is available. Unfortunately, your order will now need to be cancelled. <br><br>
        Any money on reserve at your bank will be returned to you within 3-5 business days.<br><br>
        Once again, we sincerely apologise that we have not been able to fulfil your requirements on this occasion. If you wish to select an alternative product, you can contact our Sales Team on 0207 660 3859. They will be happy to assist you.<br><br>
        If there is anything further we can help you with, please feel free to contact us.<br><br>
        
        
  
      <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
   `,
    },
    {
      id: "OSEOLWire",
      title: "End of Life - Wire",
      text: `Dear ${name},<br><br>
  
  
  ${
    hour < 13 ? "Good morning, " : "Good afternoon, "
  }thank you for recent HP Store order. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>
  
  
        We are sorry to advise that we are no longer able to fulfil your recent HP Store order as this product has now been discontinued and no further stock is available. Unfortunately, your order will now need to be cancelled. <br><br>
        To allow us to proceed with your refund as you paid via bank transfer, we require the following bank details:
        <strong><ul><li>IBAN:</li><li>SWIFT:</li><li>Bank Name:</li><li>Branch:</li><li>AccountName:</li><li>Sort Code:</li><li>Account Number:</li></ul>*(Important Information - Please complete all fields)</strong><br><br>
  
        Once we have received these details, your refund will be processed back into your account within ${refundETA} working days.<br><br>
  Once again, we sincerely apologise that we have not been able to fulfil your requirements on this occasion. If you wish to select an alternative product, you can contact our Sales Team on 0207 660 3859. They will be happy to assist you.<br><br>
  If there is anything further we can help with, please feel free to contact us.<br><br>
  
  
        
        
  
      <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
   `,
    },
    {
      id: "OSETAFull",
      title: "No ETA Full",
      text: `Dear ${name},<br><br>
  
  
  ${
    hour < 13 ? "Good morning, " : "Good afternoon, "
  }thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>
  
  
  We are sorry to advise that your order has been delayed due to an unforeseen stock constraint within our supply chain.<br><br>
  
  
  At present we do not have a firm date on when the new stock will arrive in our warehouse, but we continue to closely monitor this with our supply chain team, and we will notify you via email once your order has shipped.<br><br>
  
  
  If you wish to cancel your order, please let us know in a reply here and we will do so. Alternatively, if you would need advice to select an alternative product, please contact our Sales Team via email hpstoresalesuk@hp.com or by phone on 02076603859.<br><br>
  
  
  We sincerely apologise for any inconvenience this delay may cause and thank you for your patience and understanding.<br><br>
        
  
  If there is anything further we can help with, please feel free to contact us.<br><br>
        
  
      <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
   `,
    },
    {
      id: "OSETAPart",
      title: "No ETA Part",
      text: `Dear ${name},<br><br>
  
  
  ${
    hour < 13 ? "Good morning, " : "Good afternoon, "
  }thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>
  
  
  We are sorry to advise that your order has been delayed due to an unforeseen stock constraint within our supply chain.<br><br>
  
  
  The affected part is: *****.<br><br>
  
  
  At present we do not have a firm date on when the new stock will arrive in our warehouse, but we continue to closely monitor this with our supply chain team, and we will notify you via email once your order has shipped.<br><br>
  
  
  If you wish to cancel this part from your order, please let us know in a reply here and we will do so. This will enable the rest of the order to ship.<br><br>
  
  
  A new order can then be placed for the delayed part. Alternatively, if you would need advice to select an alternative product, please contact our Sales Team via email hpstoresalesuk@hp.com or by phone on 02076603859.<br><br>
  
  
  We sincerely apologise for any inconvenience this delay may cause and thank you for your patience and understanding.<br><br>
  
        
  
  If there is anything further we can help with, please feel free to contact us.<br><br>
        
  
      <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
   `,
    },
    {
      id: "OSFraud",
      title: "Fraud Rejected",
      text: `Dear ${name},<br><br>
  
  
  ${
    hour < 13 ? "Good morning, " : "Good afternoon, "
  }thank you for recent HP Store order. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>
  
  
        Unfortunately, our finance team were unable to complete your order as they were unable to verify all the information provided. This means that we have had to cancel your order on this occasion, and we apologise for any inconvenience this may cause.<br><br>
        We are unable to offer specific reasons for order cancellations for data protection reasons. It is recommended that you contact your card holder for further advice.<br><br>
        Any money that may be on hold at your bank will be returned automatically to you within 3-5 business days.<br><br>
        If you need assistance in replacing the order, you can contact a sales agent on <strong>0207 660 3859.</strong><br><br>
        Please feel free to reply to this email if you have any further questions.<br><br>
        
  
  
      <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
  `,
    },
  ];

  const template = templates.find((template) => template.id === id);
  return template;
};

export { getOrderStatus2Templates, orderStatus2Links };
