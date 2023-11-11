import React from "react";
import Typography from "@mui/material/Typography";
import Snackbar from "@mui/material/Snackbar";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { BiCopy } from "react-icons/bi";
import {
  templatesChatGeneral,
  templatesChatOrderStatus,
  templatesChatReturns,
  templatesChatTech,
} from "../data/babyTemps/chatPage";
import QuickTemplateSection from "../components/QuickTemplateSection/QuickTemplateSection";
import QuickTemplateItem from "../components/QuickTemplateItem/QuickTemplateItem";

const ChatScreen = () => {
  const [open, setOpen] = useState(false);
  const copyToClipboard = (e) => {
    setOpen(true);
    navigator.clipboard.writeText(e.toString());
  };
  return (
    <>
      <Grid container>
        <QuickTemplateSection backgroundColor="lightyellow" title="Chat - General">
          {templatesChatGeneral.map((template) => (
            <QuickTemplateItem template={template} />
          ))}
        </QuickTemplateSection>
        <QuickTemplateSection
          backgroundColor="lightskyblue"
          title="Delivery/Order Status"
        >
          {templatesChatOrderStatus.map((template) => (
            <QuickTemplateItem template={template} />
          ))}
        </QuickTemplateSection>
        <QuickTemplateSection backgroundColor="lightPink" title="Returns">
          {templatesChatReturns.map((template) => (
            <QuickTemplateItem template={template} />
          ))}
        </QuickTemplateSection>
        <QuickTemplateSection
          backgroundColor="mediumaquamarine"
          title="Tech/Instant Ink"
        >
          {templatesChatTech.map((template) => (
            <QuickTemplateItem template={template} />
          ))}
        </QuickTemplateSection>
      </Grid>
    </>
  );
};

export default ChatScreen;
