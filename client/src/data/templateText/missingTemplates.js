const { refundETA, replacementETA } = require("../ref-rep-ETAs.js");

const missingLinks = [
  {
    id: "MSGAllRep",
    title: "Rep - Mising All",
    important: false,
  },
  {
    id: "MSGPartRep",
    title: "Rep - Missing Part",
    important: false,
  },
  {
    id: "MSGAllRef",
    title: "Ref Missing All",
    important: false,
  },
  // {
  //   id: "MSGAllWireRef",
  //   title: "Ref Wire Missing All",
  //   important: false,
  // },
  {
    id: "MSGPartRef",
    title: "Ref Missing Part",
    important: false,
  },
  // {
  //   id: "MSGPartWireRef",
  //   title: "Ref Wire Missing Part",
  //   important: false,
  // },
  {
    id: "MSGDeliveredRef",
    title: "Delivered - Ref",
    important: false,
  },
  {
    id: "MSGDeliveredRep",
    title: "Delivered - Rep",
    important: false,
  },
  {
    id: "MSGDeliveredPhotoOpen",
    title: "Delivered/Photo - Open Invest",
    important: true,
  },
  {
    id: "MSGDeliveredPhotoPolice",
    title: "Delivered/Photo - Police report",
    important: true,
  },
];

const getMissingTemplates = (name, orderNumber, apology, date, hour, id) => {
  const templates = [
    {
      id: "MSGDeliveredPhotoOpen",
      title: "Missing - Delivered/photo - open investigation",
      text: `Dear ${name},<br><br>
    
    
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>

      We are sorry to hear that you have not received your order.<br><br>

We have reviewed our records and, according to the tracking information, there is a delivery image and proof of delivery for your order. Given this, we will need to investigate the situation further with our delivery partner, Parcel Force. This may involve checking the GPS location of the delivery and potentially conducting an interview with the driver. Please note that this investigation can take up to 30 days to complete.<br><br>

We are committed to resolving this matter as quickly as possible. We appreciate your patience as we work through the investigation.<br><br>



If there is anything further you need, please do not hesitate to let me know.<br><br>


    <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
    
      `,
    },
    {
      id: "MSGDeliveredPhotoPolice",
      title: "Missing - Delivered/photo - police report",
      text: `Dear ${name},<br><br>
        
        
    ${
      hour < 13 ? "Good morning, " : "Good afternoon, "
    }thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>
    
    We are sorry to hear that you have not received your order.<br><br>
    
We have reviewed our records and, according to the tracking information, there is a delivery image and proof of delivery for your order. Given this, we will need to investigate the situation further with our delivery partner, Parcel Force. This may involve checking the GPS location of the delivery and potentially conducting an interview with the driver. Please note that this investigation can take up to 30 days to complete.<br><br>

To assist us in this process, we kindly ask that you provide a police crime report in PDF format, as this is required when there is a discrepancy between delivery records and the customer's claim. Please email the report to us at hpstore-uk@hp.com so we can proceed with the investigation. You may also be required to complete a declaration from Parcel Force, and we will contact you if this is necessary.<br><bR>

We are committed to resolving this matter as quickly as possible. We appreciate your patience as we work through the investigation.<br><br>

    
    
    If there is anything further you need, please do not hesitate to let me know.<br><br>
    
    
        <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
        
          `,
    },
    {
      id: "MSGAllRep",
      title: "Missing All - Rep",
      text: `Dear ${name},<br><br>
    
    
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


We sincerely apologise that you have not received your HP order and we are actively working with our logistics team to have a replacement order sent out as soon as possible. This can take up to ${replacementETA} working days.<br><br>


You will receive a confirmation email as soon this is on its way to you.<br><br>


If there is anything further you need, please do not hesitate to let me know.<br><br>


    <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
    
      `,
    },
    {
      id: "MSGPartRep",
      title: "Missing Part - Rep",
      text: `Dear ${name},<br><br>
    
    
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


We sincerely apologise that you have not received your full HP order and we are actively working with our logistics team to have the missing item sent out as soon as possible. This can take up to ${replacementETA} working days. <br><br>


You will receive a confirmation email as soon this is on its way to you.<br><br>


If there is anything further you need, please do not hesitate to let me know.<br><br>


    <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
    
      `,
    },
    {
      id: "MSGAllRef",
      title: "Missing All - Refund",
      text: `Dear ${name},<br><br>
    
    
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


We sincerely apologise that you have not received your HP order and we are actively working with our logistics team to refund you as soon as possible.<br><br>


Your money will be returned to your account within ${refundETA} working days.<br><br>


If there is anything further you need, please do not hesitate to let me know.<br><br>


    <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
    
      `,
    },
    {
      id: "MSGAllWireRef",
      title: "Missing All - Wire Refund",
      text: `Dear ${name},<br><br>
    
    
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


We sincerely apologise that you have not received your HP order and we are actively working with our logistics team to refund you as soon as possible.<br><br>


As you have pre-paid your order via wire bank transfer, we require your bank details to allow us to transfer the funds for this item back into your account. Please provide the following bank details to enable us to process this refund:


<strong><ul><li>IBAN:</li><li>SWIFT:</li><li>Bank Name:</li><li>Branch:</li><li>AccountName:</li><li>Sort Code:</li><li>Account Number:</li></ul>*(Important Information - Please complete all fields)</strong><br><br>

        Once we have received these details, your refund will be processed back into your account within ${refundETA} working days.<br><br>




If there is anything further you need, please do not hesitate to let me know.<br><br>


    <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
    
      `,
    },
    {
      id: "MSGPartRef",
      title: "Missing All - Refund",
      text: `Dear ${name},<br><br>
    
    
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


We sincerely apologise that you have not received your full HP order and we are actively working with our logistics team to refund the missing product as soon as possible.<br><br>


Your money will be returned to your account within ${refundETA}  working days.<br><br>


If there is anything further you need, please do not hesitate to let me know.<br><br>


    <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
    
      `,
    },
    {
      id: "MSGPartWireRef",
      title: "Missing Part - Wire Refund",
      text: `Dear ${name},<br><br>
    
    
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


We sincerely apologise that you have not received your full HP order and we are actively working with our logistics team to refund the missing product as soon as possible.<br><br>



As you have pre-paid your order via wire bank transfer, we require your bank details to allow us to transfer the funds for this item back into your account. Please provide the following bank details to enable us to process this refund:

<strong><ul><li>IBAN:</li><li>SWIFT:</li><li>Bank Name:</li><li>Branch:</li><li>AccountName:</li><li>Sort Code:</li><li>Account Number:</li></ul>*(Important Information - Please complete all fields)</strong><br><br>

        Once we have received these details, your refund will be processed back into your account within ${refundETA} working days.<br><br>



If there is anything further you need, please do not hesitate to let me know.<br><br>


    <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
    
      `,
    },
    {
      id: "MSGDeliveredRef",
      title: "Delivered - Refund already sent ",
      text: `Dear ${name},<br><br>
    
    
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


    The Parcel Force investigation came back showing proper delivery of the original order. <strong>Please see delivery image attached.</strong><br><br>
    As you have already received the refund on this missing claim, please confirm if you prefer we arrange a return of the order, or for us to generate a bill to account for the refund already sent.<br><br>
    


If there is anything further you need, please do not hesitate to let me know.<br><br>


    <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
    
      `,
    },
    {
      id: "MSGDeliveredRep",
      title: "Delivered - Rep already delivered ",
      text: `Dear ${name},<br><br>
    
    
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


    The Parcel Force investigation came back showing proper delivery of the original order. <strong>Please see delivery image attached.</strong><br><br>
    As you have already received the replacement order generated from this missing claim, please confirm if you prefer we arrange a return of the order, or for us to generate a bill to account for the additional order received.<br><br>


If there is anything further you need, please do not hesitate to let me know.<br><br>


    <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
    
      `,
    },
  ];

  const template = templates.find((template) => template.id === id);
  return template;
};

export { missingLinks, getMissingTemplates };
