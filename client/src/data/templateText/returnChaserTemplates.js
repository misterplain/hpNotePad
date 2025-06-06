const returnChaserLinks = [
  {
    id: "RETLabel1",
    title: "Failed label - 1",
    important: false,
  },
  {
    id: "RETLabel2",
    title: "Failed label - 2",
    important: false,
  },
  {
    id: "RETLabel3",
    title: "Failed label - 3",
    important: false,
  },
  {
    id: "RETCollect1",
    title: "Failed Collect - 1",
    important: false,
  },
  {
    id: "RETCollect2",
    title: "Failed Collect - 2",
    important: false,
  },
  {
    id: "RETCollect3",
    title: "Failed Collect - 3",
    important: false,
  },
  {
    id: "RETCancel",
    title: "Claim cancelled",
    important: false,
  },
  {
    id: "MSC2BillIssued",
    title: "Bill Issued",
    important: false,
  },
];

const getReturnChaserTemplates = (
  name,
  orderNumber,
  apology,
  date,
  hour,
  id
) => {
  const templates = [
    {
      id: "RETLabel1",
      title: "Failed Label 1",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for recent HP Store order. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


    We have been informed by our carrier that the label generated for the return of your HP Store order has not been used. To allow us to proceed with your claim, you may use the current label if it is still valid, or we will generate a fresh label for you if required. This will enable you to drop the parcel off at a local post office.<br><br>

   If your order has already been returned, we apologise for any confusion and kindly request that you send us a photo of the receipt provided by the Post Office upon return by emailing us at hpstore-uk@hp.com (please include your SCEO order number in the subjectof the email) or via our Chat service on the HP Store. We will forward this to the warehouse to ensure the goods are checked in properly.<br><br>
     
    Further details on the HP Store returns procedure can be found in our HP Store FAQs page on the HP Store website. <br><br>
    
    

If there is anything further we can help with, please feel free to contact us.<br><br>
    

    <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
`,
    },
    {
      id: "RETLabel2",
      title: "Failed Label 2",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for recent HP Store order. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


    We are writing again for HP Store regarding your recent return request.<br><br>

    We have been informed by our carrier that the label generated for the return of your HP Store order has not been used. To allow us to proceed with your claim, you may use the current label if it is still valid, or we will generate a fresh label for you if required. This will enable you to drop the parcel off at a local post office.<br><br>
     
   If your order has already been returned, we apologise for any confusion and kindly request that you send us a photo of the receipt provided by the Post Office upon return by emailing us at hpstore-uk@hp.com (please include your SCEO order number in the subjectof the email) or via our Chat service on the HP Store. We will forward this to the warehouse to ensure the goods are checked in properly.<br><br>
     
    Further details on the HP Store returns procedure can be found in our HP Store FAQs page on the HP Store website.<br><br>
    
    

If there is anything further we can help with, please feel free to contact us.<br><br>
    

    <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
`,
    },
    {
      id: "RETLabel3",
      title: "Failed Label 3",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for recent HP Store order. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


    Can we please request a response regarding your return request with HP Store?<br>
    <strong>*Please note that we need to provide a collection date to the warehouse within the next 24 hours, or the return request will be canceled.</strong><br><br>
    
    We have been informed by our carrier that the label generated for the return of your HP Store order has not been used. To allow us to proceed with your claim, you may use the current label if it is still valid, or we will generate a fresh label for you if required. This will enable you to drop the parcel off at a local post office.<br><br>
     
   If your order has already been returned, we apologise for any confusion and kindly request that you send us a photo of the receipt provided by the Post Office upon return by emailing us at hpstore-uk@hp.com (please include your SCEO order number in the subjectof the email) or via our Chat service on the HP Store. We will forward this to the warehouse to ensure the goods are checked in properly.<br><br>
     
    Further details on the HP Store returns procedure can be found in our HP Store FAQs page on the HP Store website.<br><br>
    
    

If there is anything further we can help with, please feel free to contact us.<br><br>
    

    <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
`,
    },
    {
      id: "RETCollect1",
      title: "Failed Collection 1",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for recent HP Store order. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


    We have been informed by our carrier that the planned collection of your HP Store order has been unsuccessful. To allow us to proceed with your claim we require you to reschedule this collection at the earliest opportunity.<br>
    <strong>*Please do note that 48 hours advance notice will be required to allow us to arrange your new collection with our carrier team.</strong><br><br>
    HP Store does not provide timed collections (i.e. a specific time to collect items). You will be notified by the driver of a time on the day of collection.<br>
    Our carrier operates Monday – Friday only, please note collections can be made up to 6pm in the evening.<br><br>

   If your order has already been returned, we apologise for any confusion and kindly request that you send us a photo of the receipt provided by the Post Office upon return by emailing us at hpstore-uk@hp.com (please include your SCEO order number in the subjectof the email) or via our Chat service on the HP Store. We will forward this to the warehouse to ensure the goods are checked in properly.<br><br>
     
    Further details on the HP Store returns procedure can be found in our HP Store FAQs page on the HP Store website.<br><br>
    
    

If there is anything further we can help with, please feel free to contact us.<br><br>
    

    <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
`,
    },
    {
      id: "RETCollect2",
      title: "Failed Collection 2",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for recent HP Store order. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>

    We are writing again for HP Store regarding your recent return request.<br><br>

    We have been informed by our carrier that the planned collection of your HP Store order has been unsuccessful. To allow us to proceed with your claim we require you to reschedule this collection at the earliest opportunity.<br>
    <strong>*Please do note that 48 hours advance notice will be required to allow us to arrange your new collection with our carrier team.</strong><br><br>
    HP Store does not provide timed collections (i.e. a specific time to collect items). You will be notified by the driver of a time on the day of collection.<br>
    Our carrier operates Monday – Friday only, please note collections can be made up to 6pm in the evening.<br><br>

   If your order has already been returned, we apologise for any confusion and kindly request that you send us a photo of the receipt provided by the Post Office upon return by emailing us at hpstore-uk@hp.com (please include your SCEO order number in the subjectof the email) or via our Chat service on the HP Store. We will forward this to the warehouse to ensure the goods are checked in properly.<br><br>
     
     
    Further details on the HP Store returns procedure can be found in our HP Store FAQs page on the HP Store website.<br><br>
    

If there is anything further we can help with, please feel free to contact us.<br><br>
    

    <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
`,
    },
    {
      id: "RETCollect3",
      title: "Failed Collection 3",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for recent HP Store order. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>

    Can we please request a response regarding your return request with HP Store?<br>
   <strong> *Please note that we need to provide a collection date to the warehouse within the next 24 hours, or the return request will be canceled.</strong><br><br>
    
    We have been informed by our carrier that the planned collection of your HP Store order has been unsuccessful. To allow us to proceed with your claim we require you to reschedule this collection at the earliest opportunity.<br>
    <strong>*Please do note that 48 hours advance notice will be required to allow us to arrange your new collection with our carrier team.</strong><br><br>
    HP Store does not provide timed collections (i.e. a specific time to collect items). You will be notified by the driver of a time on the day of collection.<br>
    Our carrier operates Monday – Friday only, please note collections can be made up to 6pm in the evening.<br><br>

   If your order has already been returned, we apologise for any confusion and kindly request that you send us a photo of the receipt provided by the Post Office upon return by emailing us at hpstore-uk@hp.com (please include your SCEO order number in the subjectof the email) or via our Chat service on the HP Store. We will forward this to the warehouse to ensure the goods are checked in properly.<br><br>
     
     
    Further details on the HP Store returns procedure can be found in our HP Store FAQs page on the HP Store website.<br><br>
    

If there is anything further we can help with, please feel free to contact us.<br><br>
    

    <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
`,
    },
    {
      id: "RETCancel",
      title: "Claim Cancelled",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for recent HP Store order. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


    Due to the lack of update on the return request, we have been informed by our warehouse that they will be cancelling this claim for return.<br><br>
If there is anything further we can help with, please feel free to contact us.<br><br>
    

    <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
`,
    },
    {
      id: "MSC2BillIssued",
      title: "Bill Issued ",
      text: `Dear ${name},<br><br>
        
        
  ${
    hour < 13 ? "Good morning, " : "Good afternoon, "
  }thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>
  
        Due to the lack of update on the collection request, we have been informed by our carrier that a bill will be now issued for the non-return and non-payment of this product.<br><br>
        You will receive the bill within 2-3 days with payment instructions.<br><br>
        If we can assist you with anything else, please let us know.<br><br>
        
        
        
  
  
  
  
      <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
          `,
    },
  ];

  const template = templates.find((template) => template.id === id);
  return template;
};

export { returnChaserLinks, getReturnChaserTemplates };
