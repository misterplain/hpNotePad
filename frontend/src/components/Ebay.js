import Typography from "@mui/material/Typography";
import Snackbar from "@mui/material/Snackbar";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import Divider from "@mui/material/Divider";
import { BiCopy } from "react-icons/bi";

const Ebay = () => {
  const [open, setOpen] = useState(false);
  const copyToClipboard = (e) => {
    setOpen(true);
    navigator.clipboard.writeText(e.toString());
  };

  const templatesGeneral = [
    {
      id: 1,
      text: "Apologies for the delay in our reply."
    },
    {
      id: 2,
      text: "Apologies for the delay in receiving your order.",
    },
    {
      id: 3,
      text: "Unfortunately, we are unable to modify the prices as listed on the site or manually apply any discounts to an order.",
    },
    {
      id: 4,
      text: "Unfortunately we are not in control of the promotions or offers. The offers are available for limited times and their details are listed on the site.",
    },
    {
      id: 5,
      text: "All HP printers come with one starter ink cartridge that is about one third full, meant to get the device up and running."
    },
    {
      id: 6,
      text: "All HP products come with the standard 1 year manufacturers warranty.",
    },
    {
      id: 7,
      text: "All HP items will come new and factory sealed.",
    },
    {
      id: 8,
      text: "The invoice is created automatically and will be sent to you within 2-3 days of the order processing and shipping.",
    },
    {
      id: 9,
      text: "Our apologies if you have received an email that did not format properly, the IT department is currently working on a fix. If you have a query in relation to your order, please provide your order number in format XX-XXXXX-XXXXX and we will look into this.",
    },
    {
      id: 10,
      text: "We are happy to hear that you are happy with your order!"
    },
    {
      id: 11,
      text: "For a full technical explanation of the product specs, our support team contact info can be found below:\nhttps://www.hp.com/gb-en/shop/faq.aspx?p=customer-care#useful-links"
      
    },
    {
      id: 12,
      text: "Further information related to the Instant Ink subscription can be found below:\nhttps://instantink.hpconnected.com/uk/en/l/"
    },
    {
      id: 13,
      text: "This device will come with the Microsoft  Office pack installed, but not with the subscription key needed to access its full services."
    },
    {
      id: 14,
      text: "On the product page, the dropdown menus 'What's in the box' and 'Choose item' allow you to select the quantity and type of ink."
    },
  ];

  const templatesOrderStatus = [
    {
      id: 1,
      text: "Your order has shipped from our warehouse to the courier, please see your tracking link below:",
    },
    {
      id: 2,
      text: "Once they scan this into their system, your tracking will show further ETA information.",
    },
    {
      id: 3,
      text: "Unfortunately there was an error processing this order and it is being fully cancelled. You'll be notified automatically once this is complete. This will not ship / you will not be fully charged. If there is a charge on your end currently, it will be fully refunded.",
    },
    {
      id: 4,
      text: "Our apologies for the delay in receiving your order. We have escalated your case to the warehouse to try and expedite this out to the courier. As soon as it ships to the courier, you will receive the tracking link automatically.",
    },
  ];


  const templatesReturns = [
    {
      id: 1,
      text: "We are unable to assist directly as we are outside the 30 days after delivery.",
    },
    {
      id: 2,
      text: "We are sorry to hear that you are having these issues with your device.",
    },
    {
      id: 3,
      text: "For troubleshooting assistance, our support team contact info can be found below\nhttps://www.hp.com/gb-en/shop/faq.aspx?p=customer-care#useful-links",
    },
    {
      id: 4,
      text: "If they are unable to assist, or you simply wish to return this item, please raise the return and refund request from your end as seen below:",
    },
    {
      id: 5,
      text: "To start a return, select the item you want to send back from your recent purchases above, or follow the steps below:\n1.        Find the item in your Purchase history and select Return this item.\n2.        Select your reason for the return.\n3.        Select Send.\n\nWe will then raised your claim accordingly",
    },
    {
      id: 6,
      text: "Please find attached your parcel force return label, valid for 5 working days.\n\nPlease remember to get a receipt from the post office when you drop this off. ",
    },
  ];

  return (
    <>
      <Grid container sx={{ marginTop: "30px" }}>
      <Grid item xs={12} sx={{ backgroundColor: "lightyellow" }} marginBottom>
          <Typography variant='h4' sx={{ textAlign: "center" }} marginBottom>
            General
          </Typography>{" "}
          {templatesGeneral.map((template) => {
            return (
              <>
                <Grid item xs={12} sx={{ display: "flex" }} marginBottom>
                  <BiCopy
                    onClick={() => copyToClipboard(template.text)}
                    style={{
                      cursor: "pointer",
                      marginLeft: "10px",
                      marginRight: "10px",
                      color: "green",
                      display: "inline-block",
                      flexBasis: "2%",
                    }}
                  />
                  <Typography
                    key={template.id}
                    variant='body1'
                    style={{
                      whiteSpace: "pre-wrap",
                      display: "inline-block",
                      flexBasis: "98%",
                      borderBottom: "1px solid lightgray",
                    }}
                  >
                    {template.text}
                  </Typography>
                </Grid>
                <Grid item xs={12}></Grid>
                <Snackbar
                  open={open}
                  onClose={() => setOpen(false)}
                  autoHideDuration={2000}
                  message='Copied to clipboard'
                />
              </>
            );
          })}
        </Grid>
        <Grid item xs={12} sx={{ backgroundColor: "lightskyblue" }} marginBottom>
          <Typography variant='h4' sx={{ textAlign: "center" }} marginBottom>
            Delivery/Order Status
          </Typography>{" "}
          {templatesOrderStatus.map((template) => {
            return (
              <>
                <Grid item xs={12} sx={{ display: "flex" }} marginBottom>
                  <BiCopy
                    onClick={() => copyToClipboard(template.text)}
                    style={{
                      cursor: "pointer",
                      marginLeft: "10px",
                      marginRight: "10px",
                      color: "green",
                      display: "inline-block",
                      flexBasis: "2%",
                    }}
                  />
                  <Typography
                    key={template.id}
                    variant='body1'
                    style={{
                      whiteSpace: "pre-wrap",
                      display: "inline-block",
                      flexBasis: "98%",
                      borderBottom: "1px solid lightgray",
                    }}
                  >
                    {template.text}
                  </Typography>
                </Grid>
                <Grid item xs={12}></Grid>
                <Snackbar
                  open={open}
                  onClose={() => setOpen(false)}
                  autoHideDuration={2000}
                  message='Copied to clipboard'
                />
              </>
            );
          })}
        </Grid>
        <Grid item xs={12} sx={{ backgroundColor: "lightpink" }} marginBottom>
          <Typography variant='h4' sx={{ textAlign: "center" }} marginBottom>
            Returns (ret/ref in Templates)
          </Typography>{" "}
          {templatesReturns.map((template) => {
            return (
              <>
                <Grid item xs={12} sx={{ display: "flex" }} marginBottom>
                  <BiCopy
                    onClick={() => copyToClipboard(template.text)}
                    style={{
                      cursor: "pointer",
                      marginLeft: "10px",
                      marginRight: "10px",
                      color: "green",
                      display: "inline-block",
                      flexBasis: "2%",
                    }}
                  />
                  <Typography
                    key={template.id}
                    variant='body1'
                    style={{
                      whiteSpace: "pre-wrap",
                      display: "inline-block",
                      flexBasis: "98%",
                      borderBottom: "1px solid lightgray",
                    }}
                  >
                    {template.text}
                  </Typography>
                </Grid>
                <Grid item xs={12}></Grid>
                <Snackbar
                  open={open}
                  onClose={() => setOpen(false)}
                  autoHideDuration={2000}
                  message='Copied to clipboard'
                />
              </>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};

export default Ebay;
