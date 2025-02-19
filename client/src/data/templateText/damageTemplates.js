const {refundETA, replacementETA} = require('../ref-rep-ETAs.js')

const damageLinks = [
  {
    id: "DMGRepCollection",
    title: "Rep-Collect",
    important: false,
  },
  {
    id: "DMGRepLabel",
    title: "Rep-Label",
    important: false,
  },
  {
    id: "DMGRefundCCCollection",
    title: "Refund-CC-Collect",
    important: false,
  },
  {
    id: "DMGRefundPPCollection",
    title: "Refund-PP-Collect",
    important: false,
  },
  // {
  //   id: "DMGRefundWireCollection",
  //   title: "Refund-Wire-Collect",
  //   important: false,
  // },
  {
    id: "DMGRefundCCLabel",
    title: "Refund-CC-Label",
    important: false,
  },
  {
    id: "DMGRefundPPLabel",
    title: "Refund-PP-Label",
    important: false,
  },
  // {
  //   id: "DMGRefundWireLabel",
  //   title: "Refund-Wire-Label",
  //   important: false,
  // },
  {
    id: "DMGPhotosRep",
    title: "Need photos - rep",
    important: false,
  },
  {
    id: "DMGPhotosRef",
    title: "need photos - ref",
    important: false,
  },
];

const getDamageTemplates = (name, orderNumber, apology, date, hour, id) => {
  const templates = [
    {
      id: "DMGRepCollection",
      title: "Damaged Replacement Collection",
      text: `Dear ${name},<br><br>
  
  
  ${
    hour < 13 ? "Good morning, " : "Good afternoon, "
  }thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>
  
  
  We are sorry to hear that the product you have received is damaged, we are actively working to have this item returned and have your replacement issued as soon as possible.<br><br>
  
  
  Our carrier Parcel Force has been requested to come to your original address on ${date}. Parcel Force are not always able to meet these requested collection dates, but they will contact you directly as soon as this date is fully booked in. Please note for any changes to this date, we require 48 hours’ notice to book it with the warehouse.<br><br>
  
  
  We kindly ask you to <strong>pack the goods safely</strong> in either their original box or a suitable box for transportation to avoid any damage in transit. Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the replacement procedure.<br><br>
  
  
  Our driver will have a return label, this allows them to track the return through their network. <strong>Please ensure you obtain a collection receipt from the driver</strong> as this may be required in the unlikely event something goes wrong with the return to our warehouse.<br><br>
  
  
  Once collection has been successful, the replacement process will begin, and your order will be shipped to you within ${replacementETA} working days.<br><br>
  
  
  If there is anything further you need, please do not hesitate to let us know.<br><br>
  
  
      <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
          `,
    },
    {
      id: "DMGRepLabel",
      title: "Damaged Refund CC Collection",
      text: `Dear ${name},<br><br>
  
  
  ${
    hour < 13 ? "Good morning, " : "Good afternoon, "
  }thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>
  
  
  We are sorry to hear that the product you have received is damaged, we are actively working to have this item returned and have your replacement issued as soon as possible.<br><br>
  
  
  We will send you the necessary returns label via email within 5 working days so that you may return through your local Post Office.<br><br> 
  
  
  We kindly ask you to <strong>pack the goods safely</strong> in either their original box or a suitable box for transportation to avoid any damage in transit. Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the replacement procedure.<br><br>
  
  
  Please ensure that you get a receipt from the Post Office when you return this, this may be required in the unlikely event something goes wrong with the return to our warehouse.<br><br>
  
  
  Once the return has been successful, the replacement process will begin, and your order will be shipped to you within ${refundETA} working days.<br><br>
  
  
  If there is anything further you need, please do not hesitate to let us know.<br><br>
  
  
      <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
          `,
    },
    {
      id: "DMGRefundCCCollection",
      title: "Damaged Refund CC Collection",
      text: `Dear ${name},<br><br>
  
  
  ${
    hour < 13 ? "Good morning, " : "Good afternoon, "
  }thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>
  
  
  We are sorry to hear that the product you have received is damaged, we are actively working to have this item returned and have your refund issued as soon as possible.<br><br>
  
  
  Our carrier <strong>Parcel Force</strong> has been requested to come to your original address on ${date}. Parcel Force are not always able to meet these requested collection dates, but they will contact you directly as soon as this date is fully booked in. Please note for any changes to this date, we require 48 hours’ notice to book it with the warehouse.<br><br>
  
  
  We kindly ask you to <strong>pack the goods safely</strong> in either their original box or a suitable box for transportation to avoid any damage in transit. Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.<br><br>
  
  
  Our driver will have a return label, this allows them to track the return through their network. <strong>Please ensure you obtain a collection receipt from the driver</strong> as this may be required in the unlikely event something goes wrong with the return to our warehouse.<br><br>
  
  
  Once collection has been successful, our refund process will begin, and the money will be returned to your account within ${refundETA} working days.<br><br>
  
  
  If there is anything further you need, please do not hesitate to let us know.<br><br>
  
  
      <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
          `,
    },
    {
      id: "DMGRefundPPCollection",
      title: "DamagedRefund PP Collection",
      text: `Dear ${name},<br><br>
        
    
  ${
    hour < 13 ? "Good morning, " : "Good afternoon, "
  }thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>
  
  
  We are sorry to hear that the product you have received is damaged, we are actively working to have this item returned and have your refund issued as soon as possible.<br><br>
  
  
  Our carrier <strong>Parcel Force</strong> has been requested to come to your original address on ${date}. Parcel Force are not always able to meet these requested collection dates, but they will contact you directly as soon as this date is fully booked in. Please note for any changes to this date, we require 48 hours’ notice to book it with the warehouse.<br><br>
  
  
  We kindly ask you to <strong>pack the goods safely</strong> in either their original box or a suitable box for transportation to avoid any damage in transit. Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.<br><br>
  
  
  Our driver will have a return label, this allows them to track the return through their network. <strong>Please ensure you obtain a collection receipt from the driver</strong> as this may be required in the unlikely event something goes wrong with the return to our warehouse.<br><br>
  
  
  Once collection has been successful, our refund process will begin, and the money will be returned to your PayPal account within ${refundETA} working days.<br><br>
  
  
  If there is anything further you need, please do not hesitate to let us know.<br><br>
  
  
      <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
          `,
    },
    {
      id: "DMGRefundWireCollection",
      title: "Damaged Refund Wire Collection",
      text: `Dear ${name},<br><br>
        
        
  ${
    hour < 13 ? "Good morning, " : "Good afternoon, "
  }thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>
  
  
  We are sorry to hear that the product you have received is damaged, we are actively working to have this item returned and have your refund issued as soon as possible.<br><br>
  
  
  Our carrier Parcel Force has been requested to come to your original address on ${date}. Parcel Force are not always able to meet these requested collection dates, but they will contact you directly as soon as this date is fully booked in. Please note for any changes to this date, we require 48 hours’ notice to book it with the warehouse.<br><br>
  
  
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
      id: "DMGRefundCCLabel",
      title: "Damaged Refund CC - Label",
      text: `Dear ${name},<br><br>
        
        
  ${
    hour < 13 ? "Good morning, " : "Good afternoon, "
  }thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>
  
  
  We are sorry to hear that the product you have received is damaged. We are now actively working to arrange the return and refund of your order through the Post Office. We will send the necessary labels to you via email in the next 5 working days.<br><br>
  
  
  We kindly ask you to <strong>pack the goods safely</strong> in either their original box or a suitable box for transportation to avoid any damage in transit. Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.<br><br>
  
  
  Please ensure you obtain a receipt from the Post Office as this may be required in the unlikely event something goes wrong with the return to our warehouse.<br><br>
  
  
  Once this item is returned to our warehouse, our refund process will begin, and the money will be returned to your account within ${refundETA} working days.<br><br>
  
  
  If there is anything further you need, please do not hesitate to let us know.<br><br>
  
  
      <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
          `,
    },
    {
      id: "DMGRefundPPLabel",
      title: "Damaged Refund PP - Label",
      text: `Dear ${name},<br><br>
        
        
  ${
    hour < 13 ? "Good morning, " : "Good afternoon, "
  }thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>
  
  
  We are sorry to hear that the product you have received is damaged. We are now actively working to arrange the return and refund of your order through the Post Office. We will send the necessary labels to you via email in the next 5 working days.<br><br>
  
  
  We kindly ask you to <strong>pack the goods safely</strong> in either their original box or a suitable box for transportation to avoid any damage in transit. Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.<br><br>
  
  
  Please ensure you obtain a receipt from the Post Office as this may be required in the unlikely event something goes wrong with the return to our warehouse.<br><br>
  
  
  Once this item is returned to our warehouse, our refund process will begin, and the money will be returned to your PayPal account within ${refundETA} working days.<br><br>
  
  
  If there is anything further you need, please do not hesitate to let us know.<br><br>
  
  
      <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
          `,
    },
    {
      id: "DMGRefundWireLabel",
      title: "Damaged Refund Wire Collection",
      text: `Dear ${name},<br><br>
        
        
  ${
    hour < 13 ? "Good morning, " : "Good afternoon, "
  }thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>
  
  
  We are sorry to hear that the product you have received is damaged. We are now actively working to arrange the return and refund of your order through the Post Office. We will send the necessary labels to you via email in the next 5 working days.<br><br>
  
  
  We kindly ask you to <strong>pack the goods safely</strong> in either their original box or a suitable box for transportation to avoid any damage in transit. Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the refund procedure.<br><br>
  
  
  Please ensure you obtain a receipt from the Post Office as this may be required in the unlikely event something goes wrong with the return to our warehouse.<br><br>
  
  
  As you have pre-paid your order via wire bank transfer, we require your bank details to allow us to transfer the funds for this item back into your account. Please provide the following bank details to enable us to process this refund:
  
  
  <strong><ul><li>IBAN:</li><li>SWIFT:</li><li>Bank Name:</li><li>Branch:</li><li>AccountName:</li><li>Sort Code:</li><li>Account Number:</li></ul>*(Important Information - Please complete all fields)</strong><br><br>
  
  
  After successful collection and arrival of the goods at our warehouse and provided bank details, we will proceed with the refund process. Your funds will be returned to your account within the next ${refundETA} working days.<br><br>
  
  
  If there is anything further you need, please do not hesitate to let us know.<br><br>
  
  
      <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
          `,
    },
    {
      id: "DMGPhotosRep",
      title: "Photos Needed - Rep ",
      text: `Dear ${name},<br><br>
        
        
  ${
    hour < 13 ? "Good morning, " : "Good afternoon, "
  }thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>
  
        We are sorry to hear that the product you have received is damaged, we are actively working to have this item returned and have your replacement issued as soon as possible.<br><br>
  In order to raise the issue with the warehouse, and organise your return can you please send us photos of the damage to the product and the box it was delivered in? You may send these photos to us at <strong>hpstore-uk@hp.com</strong>, please ensure to put your order number in the subject line of the email.<br><br>
  
  
  
  Thank you in advance.<br><br>
  
  
      <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
          `,
    },
    {
      id: "DMGPhotosRef",
      title: "Photos Needed - Ref ",
      text: `Dear ${name},<br><br>
        
        
  ${
    hour < 13 ? "Good morning, " : "Good afternoon, "
  }thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>
  
        We are sorry to hear that the product you have received is damaged, we are actively working to have this item returned and have your refund issued as soon as possible.<br><br>
  In order to raise the issue with the warehouse, and organise your return can you please send us photos of the damage to the product and the box it was delivered in? You may send these photos to us at <strong>hpstore-uk@hp.com</strong>, please ensure to put your order number in the subject line of the email.<br><br>
  
  Thank you in advance.<br><br>
  
  
      <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
          `,
    },
  ];

  const template = templates.find((template) => template.id === id);
  return template;
};

export { getDamageTemplates, damageLinks };
