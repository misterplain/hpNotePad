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
      text: "xxxxx\nline break",
    },
    {
      id: 2,
      text: "xxx\n\nwith spacing",
    },
  ];

  const templatesOrderStatus = [
    {
      id: 1,
      text: "xxxxx\nline break",
    },
    {
      id: 2,
      text: "xxx\n\nwith spacing",
    },
  ];


  const templatesReturns = [
    {
      id: 1,
      text: "xxxxx\nline break",
    },
    {
      id: 2,
      text: "xxx\n\nwith spacing",
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
      text: "xxxxx\nline break",
    },
    {
      id: 2,
      text: "xxx\n\nwith spacing",
    },
  ];

  return (
    <>
      <Grid container sx={{ marginTop: "30px" }}>
        <Grid item xs={12} sx={{backgroundColor: 'lightyellow'}} marginBottom>
          <Typography variant="h4" sx={{textAlign: 'center'}} marginBottom>General</Typography>{" "}
          {templatesGeneral.map((template) => {
            return (
              <>
                <Grid item xs={12}>
                  <BiCopy
                    onClick={() => copyToClipboard(template.text)}
                    style={{
                      cursor: "pointer",
                      marginLeft: "10px",
                      marginRight: "10px",
                      color: "green",
                      display: "inline-block",
                    }}
                  />
                  <Typography
                    key={template.id}
                    variant='body1'
                    style={{ whiteSpace: "pre-wrap", display: "inline-block" }}
                  >
                    {template.text}
                  </Typography>
                  <hr />
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
        <Grid item xs={12} sx={{backgroundColor: 'lightskyblue'}} marginBottom>
          <Typography variant="h4" sx={{textAlign: 'center'}} marginBottom>Delivery/Order Status</Typography>{" "}
          {templatesOrderStatus.map((template) => {
            return (
              <>
                <Grid item xs={12}>
                  <BiCopy
                    onClick={() => copyToClipboard(template.text)}
                    style={{
                      cursor: "pointer",
                      marginLeft: "10px",
                      marginRight: "10px",
                      color: "green",
                      display: "inline-block",
                    }}
                  />
                  <Typography
                    key={template.id}
                    variant='body1'
                    style={{ whiteSpace: "pre-wrap", display: "inline-block" }}
                  >
                    {template.text}
                  </Typography>
                  <hr />
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
        <Grid item xs={12} sx={{backgroundColor: 'lightpink'}} marginBottom>
          <Typography variant="h4" sx={{textAlign: 'center'}} >Returns (ret/ref in Templates)</Typography>{" "}
          {templatesReturns.map((template) => {
            return (
              <>
                <Grid item xs={12}>
                  <BiCopy
                    onClick={() => copyToClipboard(template.text)}
                    style={{
                      cursor: "pointer",
                      marginLeft: "10px",
                      marginRight: "10px",
                      color: "green",
                      display: "inline-block",
                    }}
                  />
                  <Typography
                    key={template.id}
                    variant='body1'
                    style={{ whiteSpace: "pre-wrap", display: "inline-block" }}
                  >
                    {template.text}
                  </Typography>
                  <hr />
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
        <Grid item xs={12} sx={{backgroundColor: 'mediumaquamarine'}}>
          <Typography variant="h4" sx={{textAlign: 'center'}} marginBottom>Tech/Instant Ink</Typography>{" "}
          {templatesTech.map((template) => {
            return (
              <>
                <Grid item xs={12}>
                  <BiCopy
                    onClick={() => copyToClipboard(template.text)}
                    style={{
                      cursor: "pointer",
                      marginLeft: "10px",
                      marginRight: "10px",
                      color: "green",
                      display: "inline-block",
                    }}
                  />
                  <Typography
                    key={template.id}
                    variant='body1'
                    style={{ whiteSpace: "pre-wrap", display: "inline-block" }}
                  >
                    {template.text}
                  </Typography>
                  <hr />
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
