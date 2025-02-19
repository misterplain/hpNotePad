const {refundETA, replacementETA} = require('../ref-rep-ETAs.js')

const miscLinks = [
  {
    id: "MSCBlank",
    title: "Blank",
    important: false,
  },
  {
    id: "MSCPriceMatchRaised",
    title: "Price Match Raised",
    important: false,
  },
  {
    id: "MSCHolding",
    title: "CEL-Holding",
    important: false,
  },
  {
    id: "MSCHoldingCRT",
    title: "CRT-Holding",
    important: false,
  },
  {
    id: "MSCCRB",
    title: "CRB-Invoice Update",
    important: false,
  },
  {
    id: "MSCInvoice",
    title: "Invoice Copy",
    important: false,
  },
  {
    id: "MSCRefundSent",
    title: "Refund Sent",
    important: false,
  },
  {
    id: "MSCRefundFailed",
    title: "Refund Failed",
    important: false,
  },
];

const getMiscTemplates = (name, orderNumber, apology, date, hour, id) => {
  const templates = [
    {
      id: "MSCBlank",
      title: "Blank",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br><br><br>


If you need anything further, please let us know.<br><br>


    <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
`,
    },
    {
      id: "MSCHolding",
      title: "Escalation - Holding",
      text: `Dear ${name},<br><br>
  
  
  ${
    hour < 13 ? "Good morning, " : "Good afternoon, "
  }thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>
  
  
  We have sent your enquiry forward and are awaiting further input from our management team.<br><br>
  
  
  Please be assured that HP takes all enquiries seriously and appreciate your patience and support whilst our investigation is ongoing, and this is being treated with the highest priority. We will contact you as soon as possible.<br><br>
  
  
  Again, we thank you for your continued patience and understanding and welcome any further queries you may have in the meantime.<br><br>
        
  
      <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
   `,
    },
    {
      id: "MSCPriceMatchRaised",
      title: "Misc - Price Match refund submitted",
      text: `Dear ${name},<br><br>
  
  
  ${
    hour < 13 ? "Good morning, " : "Good afternoon, "
  }thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>
  
  
        We have sent the request for the price match refund, once this has been processed the funds should appear back as an available balance on your account within the next ${refundETA} working days subject to your banks standard operating procedure.<br><br>
  
        If there is anything further you need please let us know, alternatively please review our FAQS on our website as seen below:<br>
        <a href="https://www.hp.com/gb-en/shop/faq.aspx" target="__blank">https://www.hp.com/gb-en/shop/faq.aspx</a><br><br>
  
      <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
   `,
    },
    {
      id: "MSCHoldingCRT",
      title: "Escalation - Holding CRT",
      text: `Dear ${name},<br><br>
  
  
  ${
    hour < 13 ? "Good morning, " : "Good afternoon, "
  }thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>
  
  
  As we can only assist with orders received within the last 30 days, we have passed your request onto our Customer Relations Team who will contact you direct to resolve. We apologise for any inconvenience.<br><br>
  
  
  If we can help you with anything else, please let us know.<br><br>
        
  
      <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
   `,
    },
    {
      id: "MSCInvoice",
      title: "Invoice Copy",
      text: `Dear ${name},<br><br>
  
  
  ${
    hour < 13 ? "Good morning, " : "Good afternoon, "
  }thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>
  
  
  Please find attached a copy of your invoice as requested. <br><br>
  
   
  If there is anything further you need please let us know, alternatively please review our <a href="https://www.hp.com/gb-en/shop/faq.aspx" target="__blank">FAQs page</a> on our website<br><br>
  
  
      <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
   `,
    },
    {
      id: "MSCCRB",
      title: "CRB - Invoice Update",
      text: `Dear ${name},<br><br>
  
  
  ${
    hour < 13 ? "Good morning, " : "Good afternoon, "
  }thank you for contacting relating to your HP Store invoice. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>
  
        We have forwarded your request to our finance team who will review and process the changes as soon as possible.<br><br>
        Next: please expect to receive a “credit note”, which does cancel the original invoice, followed by a new invoice with the requested amendments. <br><br>The procedure of the invoice correction can take up to 5 working days.
        If there is anything further we can assist you with please feel free to contact us.<br><br>
        
  
      <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
   `,
    },
    {
      id: "MSCRefundSent",
      title: "Refund Sent ",
      text: `Dear ${name},<br><br>
  
  
  ${
    hour < 13 ? "Good morning, " : "Good afternoon, "
  }thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>
  
  
        Our Finance Team have confirmed that your refund was released on ***** and we attach your credit note invoice confirming this transaction was completed.<br><br>
        These funds should appear back as an available balance on your account within the next few days subject to your banks standard operating procedure.<br><br>
        
  If there is anything further you need please let us know, alternatively please review our FAQS on our website as seen below:
  <a href="https://www.hp.com/gb-en/shop/faq.aspx">https://www.hp.com/gb-en/shop/faq.aspx</a><br><br>
  
  
      <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
   `,
    },
    {
      id: "MSCRefundFailed",
      title: "CC/PP Refund Failed ",
      text: `Dear ${name},<br><br>
  
  
  ${
    hour < 13 ? "Good morning, " : "Good afternoon, "
  }thank you for your recent HP Store order. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>
  
  
        Unfortunately, we were unable to successfully complete the refund to your original payment method on this occasion and now need to process your refund via a bank transfer. To allow us to proceed we require you to provide your bank details to us to allow us to complete the refund transaction.
        
  To allow us to proceed with your refund please provide the following bank details:
  <ul><li><strong>IBAN:</li><li>SWIFT:</li><li>Bank Name:</li><li>Branch:</li><li>Account Name:</li><li>Sort Code:</li><li>Account Number:</li></ul>
  <i>(Important Information - Please complete all fields)</i><br><br></strong>
  
  Once we have received these details, we will process your refund and expect this to be completed and the funds returned to your account within ${refundETA} working days. Further information on refunds can be found in our <a href="https://www.hp.com/gb-en/shop/faq.aspx" target="__blank">FAQs page</a> or alternatively you can view the status of your account in the <strong>My Account</strong> section of our website.<br><br>
  If there is anything further we can assist you with, please do let us know.<br><br>
  
  
  
      <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
   `,
    },
  ];

  const template = templates.find((template) => template.id === id);
  return template;
};

export { miscLinks, getMiscTemplates };
