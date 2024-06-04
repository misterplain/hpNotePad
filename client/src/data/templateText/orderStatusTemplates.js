const orderStatusLinks = [
  {
    id: "OSAddressNeeded",
    title: "Address Needed",
    important: false,
  },
  {
    id: "OSChangeAddTooLate",
    title: "Change Address - Too Late",
    important: false,
  },
  {
    id: "OSChangeAddOver300",
    title: "Change Address - Over 300",
    important: false,
  },
  {
    id: "OSChangeAddUnder300",
    title: "Change Address - Under 300",
    important: false,
  },
  {
    id: "OSDelivered",
    title: "Delivered",
    important: false,
  },
  {
    id: "OSDeliveryToday",
    title: "Delivery Today",
    important: false,
  },
  {
    id: "OSNoTracking",
    title: "Shipped - No Tracking",
    important: false,
  },
  {
    id: "OSCollectPO",
    title: "Collect PO",
    important: false,
  },
];

const getOrderStatusTemplates = (
  name,
  orderNumber,
  apology,
  date,
  hour,
  id
) => {
  const templates = [
    {
      id: "OSAddressNeeded",
      title: "Address Needed",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for recent HP Store order. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


We have received a request from the warehouse asking you to confirm your full delivery address.<br><br>


Please contact us at your earliest convenience so we can confirm your full address. <br><br>

Thank you in advance and I look forward to hearing from you.<br><br>


Kind regards,
`,
    },
    {
      id: "OSChangeAddTooLate",
      title: "Address Change Too Late",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for recent HP Store order. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


    We have received your request to change the delivery address on this order. I apologise but unfortunately it is too late to carry out this request, as the order has already been shipped from our warehouse for delivery.<br><br>

    If it is not possible to deliver at the provided address, the order will be returned to the warehouse as a failed delivery. If this happens, please let us know, as we can then send a replacement order to the new address.<br><br>

    We welcome any further queries you may have regarding this.<br><br>


Kind regards,
`,
    },
    {
      id: "OSChangeAddOver300",
      title: "Change Address over 300",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for recent HP Store order. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>

    We have received your request to change the delivery address on this order. Please note that this can cause a 48-hour delay in order processing, as the new address will need approval from our finance team.<br><br>

    We will be back in touch shortly with the outcome of the approval request. If this is approved then you will begin to receive automated emails from the system letting you know when it is on its way.<br><br>


Kind regards,
`,
    },
    {
      id: "OSChangeAddUnder300",
      title: "Change Address Under 300",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for recent HP Store order. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>

    We have received your request to change the delivery address on this order. Please note that this can cause a delay in order processing, while the warehouse updates your address.<br><br>

    You will begin to receive automated emails from the system letting you know when it is on its way.<br><br>

    We welcome any further queries you may have regarding this.<br><br>


Kind regards,
`,
    },
    {
      id: "OSDelivered",
      title: "Delivered",
      text: `Dear ${name},<br><br>
  
  
  ${
    hour < 13 ? "Good morning, " : "Good afternoon, "
  }thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>
  
  
  Our tracking shows that your order has now been delivered.<br><br>
  
  <strong>INSERT TRACKING</strong><br><br>
  
  
  If you need anything further, please let us know.<br><br>
  
  
  Kind regards,
   `,
    },
    {
      id: "OSDeliveryToday",
      title: "Delivery Today",
      text: `Dear ${name},<br><br>
  
  
  ${
    hour < 13 ? "Good morning, " : "Good afternoon, "
  }thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>
  
  
        We can confirm that your order is out for delivery today and the tracking currently states:<br><br>
  
  <strong>INSERT TRACKING</strong><br><br>
  
  
  If you have any further queries in the meantime, please let us know.<br><br>
  
  
  Kind regards,
   `,
    },
    {
      id: "OSCollectPO",
      title: "Collect from PO",
      text: `Dear ${name},<br><br>
  
  
  ${
    hour < 13 ? "Good morning, " : "Good afternoon, "
  }thank you for recent HP Store order. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>
  
  
  Due to failed deliveries, we have been unable to deliver your order. We have now arranged for your order to be collected from the local Post Office. Please reference your tracking information for further information.<br><br>
  
  You may find further information related to the depot where this is located by using the following tool:<br>
  <a href="https://www.parcelforce.com/depot-finder" target="__blank">https://www.parcelforce.com/depot-finder</a><br><br>
  
  If you are unable to collect, please confirm if you wish to have a full refund on the order, or if you wish to have a replacement order generated. If you wish to have a replacement order generated, please confirm the full and complete delivery address so as to prevent further failed deliveries. <br><br>
  If you need anything further, please let us know.<br><br>
  
  
  Kind regards,
   `,
    },
    {
      id: "OSNoTracking",
      title: "Shipped - No Tracking ",
      text: `Dear ${name},<br><br>
  
  
  ${
    hour < 13 ? "Good morning, " : "Good afternoon, "
  }thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>
  
        We are sorry you are not in receipt of your order.<br><br>
  
        We can confirm that your order was shipped on *****.<br><br>
  We are in contact with our logistics team for a delivery status update, and we will update you as soon as possible.<br><br>
  We appreciate your patience whilst we check this for you.<br><br>
  If you have any further queries in the meantime, please let us know.<br><br>
  
  
  
  
  Kind regards,
   `,
    },
  ];

  const template = templates.find((template) => template.id === id);
  return template;
};

export { getOrderStatusTemplates, orderStatusLinks };
