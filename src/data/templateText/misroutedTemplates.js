const misroutedLinks = [
  {
    id: "MSRTech",
    title: "Tech",
    important: false,
  },
  {
    id: "MSRSales",
    title: "Sales",
    important: false,
  },
  {
    id: "MSRSapos",
    title: "Sapos",
    important: false,
  },
  {
    id: "MSRRecycling",
    title: "Recycling",
    important: false,
  },
  {
    id: "MSRPromotions",
    title: "Promotions",
    important: false,
  },
  {
    id: "MSRNonHP",
    title: "Non-HP",
    important: false,
  },
  {
    id: "MSRInstantInk",
    title: "Instant Ink",
    important: false,
  },
  {
    id: "MSREbay",
    title: "ebay",
    important: false,
  },
  {
    id: "MSRHyper",
    title: "Hyper-X",
    important: false,
  },
];

const getMisroutedTemplates = (name, orderNumber, apology, date, hour, id) => {
  const templates = [
    {
      id: "MSRTech",
      title: "Misrouted - Tech",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


We are sorry to hear that you are experiencing some technical issues with your HP product and we want to direct you to our HP Technical Support team who will be happy to assist and support to resolve your issue as quickly as possible.<br><br>


Please contact our experienced Technical Support team under the phone number:<br>

Consumer Products:   0207 660 0596<br>
Business Products:    0207 660 0403<br><br>


Important Information: Prior to calling our Technical Support please have your order details on hand, which should include the serial number of the device and a copy of the invoice if available.<br><br>


Please ensure you have enough time to support the call which may be extended if the agent is required to do some testing/troubleshooting on your product.<br><br>


If you have received your HP Store order within the last 30 days, and the Tech Support Team cannot assist directly and your item is marked as faulty, please revert back to us with the case notes and case ID provided by the Tech Team, and we will raise your claim for return of this device. Please specify if you prefer a replacement or a refund.<br><br>


For more information on the HP Technical support please review our FAQs page.<br><br>


Kind regards,`,
    },
    {
      id: "MSRSales",
      title: "Misrouted - Sales",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>

     
Please contact our experienced sales team on<br>
     
Consumer 0207 660 3859<br>
     
Business 0207 660 3858<br><br>


You may also contact them via email at hpstoresalesuk@hp.com.<br><br>
     
They will assist you in choosing the correct product for your needs.<br><br>
     
Kind Regards,
     `,
    },
    {
      id: "MSRSapos",
      title: "Misrouted- Sapos",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


We are sorry to advise that we are unable to assist you directly with your sales enquiry.<br><br>


Please contact our experienced Sales Team, who will be happy to assist you and can be reached under the phone number:<br>

0207 660 3115 (Mon-Fri, office hours).<br><br>


If there is anything further we can do to assist please let us know.<br><br>


Kind regards,
 `,
    },
    {
      id: "MSRRecycling",
      title: "Recycling",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


Thank you for contacting HP Store Post sales.<br><br>


You can find all information on HP recycling at the HP Website below:<br>
<a href="https://www8.hp.com/uk/en/home/recycling.html">https://www8.hp.com/uk/en/home/recycling.html</a><br><br>


If you require any further assistance, please let us know.<br><br>


Kind regards,
`,
    },
    {
      id: "MSRPromotions",
      title: "Misrouted - Promotions",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


Unfortunately, we are unable to assist you with this enquiry.<br><br>


Please contact our Promotions team, who will be happy to assist you and can be reached at the following email address: promotions@GPS1.hp.com.<br><br>


More information can be found on current HP promotions on our FAQs page below:<br>
<a href="https://www.hp.com/gb-en/shop/faq.aspx">https://www.hp.com/gb-en/shop/faq.aspx</a><br><br>


Kind regards,
`,
    },
    {
      id: "MSRNonHP",
      title: "Misrouted - Non-HP",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


We can only assist with orders placed directly on the HP Store. If this relates to an HP Store order, please provide your order number in format SCEOxxxxxxxx and we will look into your query. If you've purchased from another seller, you may contact them directly for assistance.<br><br>


Kind regards,
`,
    },
    {
      id: "MSRInstantInk",
      title: "Misrouted - Instant Ink",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


    Please contact the Instant Ink team directly on 0207 660 6027.<br><br>
    If you require any further assistance, please let us know.
    <br><br>


Kind regards,
`,
    },
    {
      id: "MSREbay",
      title: "Misrouted - EBay",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


    As your HP Store order was purchased through the Ebay platform, you will have to contact the HP Store within Ebay directly related to this query, they will assist you further there. <br><br>

    For returns within 30 days of delivery, you may follow the below instructions to raise your request. <br><br>
    
    To start a return, select the item you want to send back from your recent purchases above, or follow the steps below:<br><br>
    1.        Find the item in your Purchase history and select Return this item.<br>
    2.        Select your reason for the return.<br>
    3.        Select Send.<br><br>
    
    They will then raised your claim accordingly<br><br>
    


Kind regards,
`,
    },
    {
      id: "MSRHyper",
      title: "Misrouted - Hyper X",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>
    
As this is a HyperX order, please contact the HyperX team at:<br><br>
Email: <br>
eu_care@hyperx.com<br>
shopeurope@hyperx.com<br><br>

Chat: <br>
<a href="https://row.hyperx.com/pages/support" target="_blank" >https://row.hyperx.com/pages/support</a><br><br>

They will be able to assist you with your needs.<br><br>


Kind regards,
`,
    },
    {
      id: "MSRInstantInk",
      title: "Misrouted - Instant Ink",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


Please contact the Instant Ink team directly on 0207 660 0596.<br><br>
    

If you require any further assistance, please let us know.<br><br>
    

Kind regards,
`,
    },
  ];

  const template = templates.find((template) => template.id === id);
  return template;
};

export { misroutedLinks, getMisroutedTemplates };
