const getTemplates = (name, orderNumber, apology, date, hour, id) => {
  const templates = [
    {
      id: "test",
      title: "test title 1",
      text: `<p>test <strong>information</strong> 1<p> ${name} ${orderNumber}, ${
        apology
          ? "Apologies for <br><a href='google.com'>link</a>the delay in our reply"
          : ""
      } ${date}`,
    },
    {
      id: "DOARepCollection",
      title: "DOA Replacemet Collection",
      text: `Dear ${name}, <br><br>
${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>
We are sorry to hear that the product you have received is defective, we are actively working to have this item returned and have your replacement issued as soon as possible.<br><br>
Our carrier Parcel Force has been requested to come to your original address on ${date}. Parcel Force are not always able to meet these requested collection dates, but they will contact you directly as soon as this date is fully booked in. Please note for any changes to this date, we require 48 hours’ notice to book it with the warehouse.<br><br>
We kindly ask you to <strong>pack the goods safely</strong> in either their original box or a suitable box for transportation to avoid any damage in transit. Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the replacement procedure.<br><br>
Our driver will have a return label, this allows them to track the return through their network. <strong>Please ensure you obtain a collection receipt from the driver</strong> as this may be required in the unlikely event something goes wrong with the return to our warehouse.<br><br>
Once collection has been successful, the replacement process will begin, and your order will be shipped to you within 2-3 working days.<br><br>
If there is anything further you need, please do not hesitate to let us know.<br><br>
Kind regards,
      `,
    },
    {
      id: "DOARepLabel",
      title: "DOA Rep Label",
      text: `Dear ${name}, <br><br>


${
  hour < 13 ? "Good morning, " : "Good afternoon, "
}thank you for contacting the HP Store. ${
        apology ? "Apologies for the delay in our reply." : ""
      }<br><br>


We are sorry to hear that the product you have received is defective, we are actively working to have this item returned and have your replacement issued as soon as possible.<br><br>We will send you the necessary returns label via email within 5 working days so that you may return through your local Post Office.<br><br>


We kindly ask you to <strong>pack the goods safely</strong> in either their original box or a suitable box for transportation to avoid any damage in transit. Please write the HP Store order number ${orderNumber} on the box as well as removing your own name and address, this will ensure faster return process of the goods at our warehouse and speed up the replacement procedure.<br><br>


Please ensure that you get a receipt from the Post Office when you return this, this may be required in the unlikely event something goes wrong with the return to our warehouse.<br><br>


Once the return has been successful, the replacement process will begin, and your order will be shipped to you within 2-3 working days.<br><br>


If there is anything further you need, please do not hesitate to let us know.<br><br>


Kind regards,
      `,
    },
  ];
  const template = templates.find((template) => template.id === id);
  return template;
};

export default getTemplates;
