const misc2Links = [
  {
    id: "MSC2TechDelay",
    title: "Tech Delay",
    important: false,
  },
  {
    id: "MSC2ReturnDelay",
    title: "Returns Delay",
    important: false,
  },
  {
    id: "MSC2LowVal",
    title: "Low Val - no collect",
    important: false,
  },
  {
    id: "MSC2AddressMod",
    title: "Address Mod Sent",
    important: false,
  },
  {
    id: "MSC2VouchOff",
    title: "Voucher - Offer",
    important: false,
  },
  {
    id: "MSC2VouchCode",
    title: "Voucher - Code",
    important: false,
  },
  {
    id: "MSC2ErrCancelled",
    title: "Error - Cancelled",
    important: false,
  },
  {
    id: "MSC2ARN",
    title: "ARN",
    important: false,
  },
];

const getMisc2Templates = (name, orderNumber, apology, date, hour, id) => {
  const templates = [
    {
      id: "MSC2LowVal",
      title: "Low Value - No Collect",
      text: `Dear ${name},<br><br>
    
    
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>

    In regards to your recent claim to have this item returned, we will not require return for your claim to process. You may dispose of this item as you see fit. You will soon begin to receive emails regarding your refund. If your claim was raised to have a replacement sent out, you'll soon begin to receive order status and shipment updates via email.<br><br>

<strong>Please note the return of the item is not necessary, please disregard any automated emails advising you are required to do so.</strong><br><br>
If there is anything further you need, please do not hesitate to let us know.<br><br>


    <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
      `,
    },
    {
      id: "MSC2AddressMod",
      title: "Address Mod Sent to LSP",
      text: `Dear ${name},<br><br>
    
    
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>

We have sent the address information directly to the warehouse to update with the courier. Please note that this process may delay delivery by 1-2 working days.<br><br>

You may monitor your tracking for further updates.<br><br>

If the courier is not able to update this address before the order is fully sent back to our warehouse, please confirm whether you prefer to receive a refund, or if you prefer to have a replacement order generated to the correct address.<br><br>


If there is anything further you need, please do not hesitate to let us know.<br><br>


    <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
      `,
    },
    {
      id: "MSC2VouchOff",
      title: "Voucher Offer",
      text: `Dear ${name},<br><br>
    
    
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>

    We are sorry to hear that you faced some issues and we did not achieve our normal high standards.<br><br>
    We sincerely apologise for any inconvenience this may have caused and would like to offer you a £** e-discount voucher in recognition of this experience, which you can use on your next HP Store purchase.<br><br>
Please confirm if you accept this voucher and we will escalate further for the code. <br><br>
    We look forward to seeing you back at HP Store in the future.<br><br>
    


    <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
      `,
    },
    {
      id: "MSC2VouchCode",
      title: "Voucher Code",
      text: `Dear ${name},<br><br>
    
    
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>

    We are sorry to hear that you faced some issues and we did not achieve our normal high standards.<br><br>
    We sincerely apologise for any inconvenience this may have caused and would like to offer you a £** e-discount voucher in recognition of this experience, which you can use on your next HP Store purchase.<br><br>
    Please find below the discount voucher code (*conditions apply) and the steps how to receive the discount online:

    <ul>    
    
    <li>Log on to your account.</li>
    <li>Choose the product(s) of your choice and add it/them to the basket</li>
    <li>Proceed to checkout.</li>
    <li>Select “Apply E-voucher” and enter your exclusive code in the field.</li>
    <li><strong>-Your code is:</strong></li>
    <li>A discount of the value of the voucher will be applied automatically<br><i>(your order needs to be above the value of voucher for this to apply)</i></li>
    <li>Confirm your order with the payment method of your choice<</li>
    
    </ul>



    <strong>**The voucher is valid until ***** on the UK HP Online Store. Please note - only 1 discount code can be applied per order, all vouchers are for single use only.</strong><br><br>
    
    We look forward to seeing you back at HP Store in the future.<br><br>
    


    <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
      `,
    },
    {
      id: "MSC2ErrCancelled",
      title: "System Error - order cancelled",
      text: `Dear ${name},<br><br>
    
    
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>

We are sorry to advise that due to an issue in processing your order and it has been fully cancelled. Any money taken will be on its way back to you within the next few working days. Please confirm if you do not receive your refund within the next few working days and we will raise an query with the Finance Team.<br><br>


If there is anything further you need, please do not hesitate to let us know.<br><br>


    <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
      `,
    },
    {
      id: "MSC2ReturnDelay",
      title: "Return Delay / collection or label ",
      text: `Dear ${name},<br><br>
    
    
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>

    We apologise for the ongoing delay with your return.<br><br>


    There are several factors currently affecting this, including the intermittent strikes with Parcel Force, and unfortunately our collection & return label services have been greatly affected.<br><br>
    
    
    Our management team is presently working to find a solution to these delays, and we will confirm the details of your return as soon as we can.<br><br>
    
    
    Please note that this delay does not in any way affect your request, or your right to return.<br><br>
    
    
    We sincerely apologise once again, for this inconvenience.<br><br>
    




    <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
      `,
    },
    {
      id: "MSC2TechDelay",
      title: "Tech Delay ",
      text: `Dear ${name},<br><br>
    
    
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>

Unfortunately, there was a data transfer issue at our warehouse which has caused delays.<br><br>

The good news is that the issue seems to have just been resolved in the last couple of hours and our warehouse has started shipping orders again.<br><br>

Once your order ships, you will receive an email with tracking information.<br><br>

I apologise for any inconvenience.<br><br>

If there is anything else, please let me know.<br><br>



    <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
      `,
    },
    {
      id: "MSC2ARN",
      title: "Return Delay / collection or label ",
      text: `Dear ${name},<br><br>
    
    
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>

    Thank you for your mail relating to the refund for our HP Store order ******<br><br>
    Our Finance Team have confirmed your refund was released on <**/**/****> and we attach the credit note invoice confirming this transaction was made from the HP bank. We also provide the following transaction reference number for the payment that was made by HPs bank < ***********>.<br><br>
    These funds should appear back as an available balance on your account within the next few days subject to your banks standard operating procedure.<br><br>
    For more information on our refund policy please visit our FAQ's page on the HP Store Website.<br><br>
    




    <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
      `,
    },
  ];

  const template = templates.find((template) => template.id === id);
  return template;
};

export { misc2Links, getMisc2Templates };
