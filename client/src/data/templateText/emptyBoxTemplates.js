const {refundETA, replacementETA} = require('../ref-rep-ETAs.js')

const emptyBoxLinks = [
  {
    id: "EBOpenInvest",
    title: "Open Investigation",
    important: false,
  },
  {
    id: "EBBeforeClaim",
    title: "Before Claim",
    important: false,
  },
  {
    id: "EBRejectedAfter",
    title: "Rejected - after investigation",
    important: false,
  },
  {
    id: "EBRejectedAfterRefund",
    title: "Rejected - after Refund",
    important: false,
  },
  {
    id: "EBRejectedAfterRep",
    title: "Rejected - after Rep",
    important: false,
  },
];

const getEmptyBoxTemplates = (name, orderNumber, apology, date, hour, id) => {
  const templates = [
    {
      id: "EBBeforeClaim",
      title: "Empty Box - Before CLaim ",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store.  ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


    Please note that until the investigation is complete, we will not be able to release any replacement or refund.<br><br>
    Once the investigation is complete, if the weight of the box matches the warehouse and carrier data, we will proceed to close your file.<br><br>
    We appreciate your patience in this matter.<br><br>
    
    

    <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
`,
    },
    {
      id: "EBOpenInvest",
      title: "Empty Box - Open Investigation",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store.  ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


    We are sorry hear that you have not received your order, we will now investigate this case further.<br><br>

    This is protocol when a customer places a high value order and reportedly receives an empty box.<br><br>
     
    Our carrier Parcel Force will now begin an in-depth investigation with regards to the weight of the shipment when it left us and a thorough stock check of whether your unit did indeed leave our warehouse successfully.<br><br>
    
    Can you please explain briefly what happened when the courier handed over your order?<br><br>
    
    Did you not find it strange that the box was so light?<br><br>
    
    Did the packaging seem in any way tampered with?<br><br>
     
    Please provide clear pictures of the box and the delivery labels that were attached. You may send these photos to us at <strong>hpstore-uk@hp.com</strong>, please ensure to put your order number in the subject line of the email.<br><br>
    
    We hope you can bear with us whilst we investigate this further. Please note that HP takes these cases very seriously.<br><br>
    
    We will await your response.<br><br>
    
    
    

    <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
`,
    },
    {
      id: "EBRejectedAfter",
      title: "Empty Box - Rejected After investigation  ",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store.  ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


    In connection with your empty box enquiry, we inform you that the investigation has been completed by our logistics department and the courier.<br><br>
    The weight of the box was the same at both the warehouse departure and the delivery time. In addition, the box showed no signs of being tampered with prior to delivery. Also, there is no comment on the delivery note indicating any discrepancies.<br><br>
    Since your order was successfully delivered, we inform your claim has been rejected.<br><br>
    
    
    

    <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
`,
    },
    {
      id: "EBRejectedAfterRefund",
      title: "Empty Box - Rejected After Refund ",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store.  ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


    In connection with your empty box enquiry, we inform you that the investigation has been completed by our logistics department and the courier.<br><br>
    The weight of the box was the same at both the warehouse departure and at the time of delivery. In addition, the box showed no signs of being tampered with prior to delivery. Also, there is no comment on the delivery note indicating any incident discrepancies.<br><br>
    Our financial department will generate a new invoice that you will have to pay as soon as possible.<br><br>
    
    
    
    

    <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
`,
    },
    {
      id: "EBRejectedAfterRep",
      title: "Empty Box - Rejected After Rep ",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store.  ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


    In connection with your empty box enquiry, we inform you that the investigation has been completed by our logistics department and the courier.<br><br>
    The weight of the box was the same at both the warehouse departure and the delivery time. In addition, the box showed no signs of being tampered with prior to delivery. Also, there is no comment on the delivery note indicating any discrepancies.<br><br>
    Currently, you have two options:<br><br>
    - Return the replacement product that has been delivered to you<br>
    - Pay the product with a new invoice<br><br>
    Please let us know your preference as soon as possible so that our financial department can close your file.<br><br>
    Thank you in advance.<br><br>
    
    
    
    
    

    <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
`,
    },
  ];

  const template = templates.find((template) => template.id === id);
  return template;
};
export { emptyBoxLinks, getEmptyBoxTemplates };
