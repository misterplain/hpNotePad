const {refundETA, replacementETA} = require('../ref-rep-ETAs.js')


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
    id: "ETAShippingToday",
    title: "ETA - Shipping Today",
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


    <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
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


    <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
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


    <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
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


    <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
`,
    },
    {
      id: "ETAShippingToday",
      title: "ETA - Shipping Today",
      text: `Dear ${name},<br><br>
  
  
  ${
    hour < 13 ? "Good morning, " : "Good afternoon, "
  }thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>
  
  
We confirm your order has been successfully processed by our warehouse and shipment is expected to take place today with delivery within the next 1-2 business days.<br><br>
 
You will receive a shipping confirmation email once your order has fully dispatched, the tracking link within your order shipment confirmation email allows you to track you order on our carrier site, alternatively you can track your order via your HP Store account in <a href="https://www.hp.com/gb-en/shop/Order.aspx?view=login" target="__blank">My Orders</a>.<br><br>
 
Please let us know if you require any further assistance.<br><br>
 
You can also review your order details below and status online via our <a href="https://www.hp.com/gb-en/shop/order.aspx?view=login" target="__blank">Track My Order</a> page.<br><br>

  
  
      <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
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
  
  
      <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
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
  
  
      <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
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
  
<strong>INSERT POST OFFICE ADDRESS HERE</strong><br><br>

   Please take 2 forms of ID proving address as well as the tracking number to ensure collection.<br><br>
  
 If you are unable to collect, please confirm if you wish to have a full refund on the order, and we will have the order returned to HP and raise a refund for you.<br><br>
  If you need anything further, please let us know.<br><br>
  
  
      <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
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
  
  
  
  
      <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
   `,
    },
  ];

  const template = templates.find((template) => template.id === id);
  return template;
};

export { getOrderStatusTemplates, orderStatusLinks };

//collect PO bit about post office
// You may find further information related to the depot where this is located by using the following tool:<br>
// <a href="https://www.parcelforce.com/depot-finder" target="__blank">https://www.parcelforce.com/depot-finder</a><br><br>