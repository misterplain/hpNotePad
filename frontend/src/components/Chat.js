import Typography from "@mui/material/Typography";
import Snackbar from "@mui/material/Snackbar";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import Divider from "@mui/material/Divider";
import { BiCopy } from "react-icons/bi";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const copyToClipboard = (e) => {
    setOpen(true);
    navigator.clipboard.writeText(e.toString());
  };

  const templatesGeneral = [
    {
      id: 1,
      text: "Hello. How can I help you?",
    },
    {
      id: 2,
      text: "Is this regarding an order placed through our UK HP Online Store?",
    },
    {
      id: 3,
      text: "Of course.",
    },
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
      text: "Order numbers will be in format SCEOxxxxxxxx"
    },
    {
      id: 7,
      text: "I would recommend speaking with one of our Sales team regarding this.  They can be contacted either via email (hpstoresalesuk@hp.com) or by telephone (0207 660 3859) Option 1 and then Option 1 again.",
    },
    {
      id: 8,
      text: "We are only able to assist directly with orders placed on the HP Store. If you purchased through the HP Store, please respond with your order number in format SCEOxxxxxxxx. If you´ve purchased through a third party reseller, you may direct your query directly to them or to the Tech Support Team for assistance. ",
    },
    {
      id: 13, 
      text: "We are unable to assist directly as we are outside the 30 days after delivery."
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

  const templatesOrderStatus = [
    {
      id: 1,
      text: "The stock info on the site is not 100% live updated, so sometimes you can place an order for a product that is just then going out of stock, I do apologise for the inconvenience. ",
    },
    {
      id: 2,
      text: "We do not charge until an order ships, so if we cancel your order you will not be charged, the processing charge currently still with your bank will just be released back to you."
    },
    {
      id: 3,
      text: "If your order is shipped before the cancellation is complete, you may refuse the delivery to trigger the full refund. Please let us know when you do and we will raise your claim. "
    },

  ];

  const templatesReturns = [
    {
      id: 1,
      text: "Do you wish to return this via the Post Office with a free returns label, or for a collection from your address with our courier Parcel Force?",
    },
    {
      id: 2,
      text: "We will request to send you a label via email within 2-3 working days for return through your local post office. The label will be valid for 5 working days from when you receive it. Please remember to get a receipt from the post office when you drop this off.",
    },
    {
      id: 3,
      text: "Once the goods are received into the warehouse, your refund will initiate 3-5 working days from there and will arrive back to your original payment method.",
    },
  ];

  //   const templatesGeneral = [
  //     {
  //       id: 1,
  //       text: "xxxxx\nline break",
  //     },
  //     {
  //       id: 2,
  //       text: "xxx\n\nwith spacing",
  //     },
  //   ];

  const templatesTech = [
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
      https://instantink.hpconnected.com/uk/en/l/"
    }
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
            Returns 
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
        <Grid item xs={12} sx={{ backgroundColor: "mediumaquamarine" }} marginBottom>
          <Typography variant='h4' sx={{ textAlign: "center" }} marginBottom>
            Tech/Instant Ink
          </Typography>{" "}
          {templatesTech.map((template) => {
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

export default Chat;
