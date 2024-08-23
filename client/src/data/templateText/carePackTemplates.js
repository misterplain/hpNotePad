const {refundETA, replacementETA} = require('../ref-rep-ETAs.js')

const carePackLinks = [
  {
    id: "CPNotCompat",
    title: "CP Not compatible",
    important: true,
  },
  {
    id: "CPCert",
    title: "Certificate Attached",
    important: false,
  },
  {
    id: "CPWrongDate",
    title: "Change Wrong Date",
    important: false,
  },
  {
    id: "CPHWNeeded",
    title: "Hardware Info Needed",
    important: false,
  },
  {
    id: "CPNotPhysical",
    title: "CP Not Physical",
    important: false,
  },
];

const getCarePackTemplates = (name, orderNumber, apology, date, hour, id) => {
  const templates = [
    {
      id: "CPCert",
      title: "Certificate Attached",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for your recent HP Store order. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


Please find attached your HP Care Pack certificate.<br><br>


If there is anything further we can assist you with, please feel free to reply to this email.<br><br>

    

    <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
`,
    },
    {
      id: "CPWrongDate",
      title: "Change Wrong Date",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting us regarding your HP Care Pack purchase ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


    We sincerely apologise that the details of your registration appear to have been incorrectly updated. We are actively reviewing this with our Care Pack registration team and will act to have the expiry date corrected accordingly.<br><br>
    Once this action is completed and our systems are updated, you will be sent your new Care Pack certificate, please note this process can take up to 2 weeks.<br><br>
    We apologise for any inconvenience this may have caused.<br><br>
    If there is anything further that we can assist you with, please feel free to reply to this email.<br><br>
    
    

    <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
`,
    },
    {
      id: "CPNotCompat",
      title: "Carepack not compatible",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


The Care Pack Team have advised that this Care Pack is not compatible with the hardware device you had tried to associate it with. <strong>Please confirm if you wish to have a refund on this Care Pack, or if you wish to associate this with a compatible hardware device</strong>.<br><br>

To speak directly with a Sales Agent regarding compatible Care Packs, you may contact them at 0207 660 3859 (Option 1 and Option 2 for Sales) or by writing them via email at hpstoresalesuk@hp.com.<br><br>
You may also visit the Care Pack Central to check on Care Pack compatibility with your device:<br>
<a href="https://cpc2.ext.hp.com/?countries=GB" target="__blank">https://cpc2.ext.hp.com/?countries=GB</a><br><br>

Our apologies for any frustrations seen through the purchase of this Care Pack.<br><br>



If there is anything further, we can assist you with please feel free to contact us.<br><br>
    

    <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
`,
    },
    {
      id: "CPNotPhysical",
      title: "Certificate Not Physical",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


Please be aware that the Care Pack Warranty purchased is not a physical product but is sent electronically to you via the email address you provided when ordering. This email will contain an activation link that will direct you to the HP website where you can continue to register the Care Pack Warranty to your HP product with the serial number of the specific unit.<br><br>


If you do not receive your activation email within the next 2 business days, please contact us again and we will request that this is resent to you as soon as is possible.<br><br>


More information on HP Store Care Pack Activation can be found on our <a href="https://www.hp.com/gb-en/shop/faq.aspx?p=returns#how-to-return-and-request-refund-or-replacement" target="__blank">FAQS Page.</a><br><br>


If you require any further assistance, please let us know.<br><br>
    

    <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,
`,
    },
    {
      id: "CPHWNeeded",
      title: "Hardware info needed",
      text: `Dear ${name},<br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for your recent HP Store order ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


To enable us to complete the registration of your Care Pack, HP requires the following information to be sent to our Care Pack Registration team at the earliest opportunity.<br><br>


Please copy and paste the below information into your mail.<br>
Send your email to: postsales.carepackregistration@hp.com<br><br>


Email Subject: Care Pack Registration for HP Store order SCEOXXXXXX<br><br>
Dear HP Care Pack Registration team,<br><br>
Please find below the following information to allow the completion of my Care Pack Registration.
<ul><li>Name:</li>
<li>Address:</li>
<li>Phone:</li>
<li>Email:</li>
<li>Product Code:</li>
<li>Serial No:</li>
<li>Invoice: (Please attach a copy of your original invoice)</li></ul>

Please note Care Pack Registration can take up to 2 weeks to complete, after which your certificate will be visible and available for download. Further information on Care Pack Registration can be found on our
<a href="https://www.hp.com/gb-en/shop/faq.aspx" target="__blank">FAQs Page</a><br><br>


If you require any further assistance after this timeframe, please do let us know.<br><br>
    
    
    <strong>Kindly note that this email address does not receive replies. If you wish to reply to this email, please call us at 0207 660 3859 or use our chat service, available from 9:00 am to 5:30 pm.</strong><br><br> Kind regards,



`,
    },
  ];

  const template = templates.find((template) => template.id === id);
  return template;
};

export { getCarePackTemplates, carePackLinks };
