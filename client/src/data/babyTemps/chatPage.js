const templatesChatGeneral = [
  {
    id: 1,
    text: "Hello. How can I help you?",
  },
  {
    id: 20,
    text: "Is there anything else I can assist you with before we close the chat?",
  },
  {
    id: 21,
    text: "Understood, apologies for the inconvenience. If at any stage you wish to get a complaint over to be escalated for review, you may send this to ukstore.postsales@hp.com. ",
  },
  {
    id: 2,
    text: "Is this regarding an order placed through our UK HP Online Store?",
  },
  {
    id: 3,
    text: "Of course.",
  },
  { id: 14, text: "We are sorry to hear that this has happened." },
  {
    id: 4,
    text: "Can I take your Web Order number, as well as the name on the order and the first line of the billing address, please?",
  },
  {
    id: 5,
    text: "Thank you. One moment.",
  },
  {
    id: 6,
    text: "Can you please confirm your name and the first line of your billing address?",
  },
  {
    id: 12,
    text: "Order numbers will be in format SCEOxxxxxxxx",
  },
  {
    id: 15,
    text: "What is the email address you used to place this order?",
  },
  {
    id: 7,
    text: "I would recommend speaking with one of our Sales team regarding this.  They can be contacted either via email (hpstoresalesuk@hp.com) or by telephone (0207 660 3859) Option 1 and then Option 2 again.",
  },
  {id:22,
    text: "Sorry, I'm on the Post-Sales team and we're not trained on product specifications. I'll transfer you to someone who can answer your question."
  },
  {
    id: 8,
    text: "We are only able to assist directly with orders placed on the HP Store. If you purchased through the HP Store, please respond with your order number in format SCEOxxxxxxxx. If you´ve purchased through a third party reseller, you may direct your query directly to them or to the Tech Support Team for assistance. ",
  },
  {
    id: 13,
    text: "We are unable to assist directly as we are outside the 30 days after delivery.",
  },
  {
    id: 9,
    text: "I will get back to you via email with further information as soon I have it.",
  },
  {
    id: 10,
    text: "You're welcome. Is there anything else I can help you with in the meantime?",
  },
  {
    id: 11,
    text: "Thank you. Have a nice day!",
  },
];

const templatesChatOrderStatus = [
  {
    id: 1,
    text: "The stock info on the site is not 100% live updated, so sometimes you can place an order for a product that is just then going out of stock, I do apologise for the inconvenience. ",
  },
  {
    id: 20,
    text: "Our apologies for the delay in receiving your order, there has been a stock delay. As the ETA of new stock of this item is today, your order is expected to ship to the courier within 1-2 working days.",
  },
  {
    id: 21,
    text: "The warehouse is unfortunately delayed currently. but your order is in stock so this should be shipped to the courier within 1-2 working days at which point you´ll be notified automatically. ",
  },
  {
    id: 22,
    text: "If at any stage you prefer to cancel, please let us know and we will recall the order. Alternatively, you may refuse the delivery to initiate a full refund if it arrives too late. \n\nOur apologies for the delay in receiving your order.",
  },
  {
    id: 23,
    text: "Unfortunately there was an error in processing this order and it is being fully cancelled. You will be notified as soon as it is. If any money has been taken for this order it will be refunded within 3-5 working days. Apologies for the inconvenience.",
  },
  {
    id: 24,
    text: "We can´t confirm the exact reason why this order failed, whether it was a system issue or a payment related issue, due to the financial details being data protected.",
  },
  {
    id: 2,
    text: "We do not charge until an order ships, so if we cancel your order you will not be charged, the processing charge currently still with your bank will just be released back to you.",
  },
  {
    id: 3,
    text: "If your order is shipped before the cancellation is complete, you may refuse the delivery to trigger the full refund. Please let us know when you do and we will raise your claim. ",
  },
  {
    id: 4,
    text: "Apologies for the delay in receiving your order.",
  },
  {
    id: 5,
    text: "Unfortunately we or the courier are not always able to meet delivery estimates. ",
  },
  {
    id: 6,
    text: "We cannot modify an order once it is placed. We can request to re-route this delivery which may delay delivery by a day or two. ",
  },
];

const templatesChatReturns = [
  {
    id: 1,
    text: "Do you wish to return this via the Post Office with a free returns label, or for a collection from your address with our courier Parcel Force?",
  },
  {
    id: 2,
    text: "We will request to send you a label via email within 2-3 working days for return through your local post office. The label will be valid for 5 working days from when you receive it. Please remember to get a receipt from the post office when you drop this off.",
  },
  {
    id: 4,
    text: "We have requested the collection date for XXX. Please note that Parcel Force are not always able to meet the requested dates, and will contact you directly when the date is fully booked in. Please remember to get a receipt from the driver when they collect",
  },
  {
    id: 3,
    text: "Once the goods are received into the warehouse, your refund will initiate 3-5 working days from there and will arrive back to your original payment method.",
  },
  {
    id: 5,
    text: "Claim raised, you'll receive further info via email",
  },
];

const templatesChatTech = [
  {
    id: 1,
    text: "Is this in regards to an Instant Ink subscription?",
  },
  {
    id: 2,
    text: "Ok, you would need to speak with our Instant Ink team directly on- 0207 660 6027. They will be happy to assist you.",
  },
  {
    id: 3,
    text: "Sometimes they have a Virtual Agent available:\
      https://instantink.hpconnected.com/uk/en/l/",
  },
  {
    id: 4,
    text: "We are sorry to hear you are having this issue with your device.",
  },
  {
    id: 5,
    text: "We would recommend you contact our Tech Support team. They will be happy to assist you. Their number can be found below:\nConsumer Products: 0207 660 0596\nBusiness Products: 0207 660 0403",
  },
  {
    id: 6,
    text: "If they determine the device is faulty, they will provide you with the necessary case ID and case notes to move forward with a return claim. Please specify to them whether you prefer a refund or a replacement device.",
  },
];

export {
  templatesChatGeneral,
  templatesChatOrderStatus,
  templatesChatReturns,
  templatesChatTech,
};
