import React, { useState } from "react";
import { useSelector} from "react-redux";
import {
  Box,
  Grid,
  Typography,
  Modal,
} from "@mui/material";
import {
  TbZodiacAries,
  TbZodiacTaurus,
  TbZodiacGemini,
  TbZodiacCancer,
  TbZodiacLeo,
  TbZodiacVirgo,
  TbZodiacLibra,
  TbZodiacScorpio,
  TbZodiacSagittarius,
  TbZodiacCapricorn,
  TbZodiacAquarius,
  TbZodiacPisces,
} from "react-icons/tb";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Horoscope = () => {
  const [openModal, setOpenModal] = useState(false);
  const [horoscopeTitle, setHoroscopeTitle] = useState("");
  const [horoscopeContent, setHoroscopeContent] = useState("");
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const dashboardState = useSelector((state) => state.dashboard);
  const { dashboardData, loading, error } = dashboardState;

  //horoscope icons
  const horoscopeIcons = {
    aries: <TbZodiacAries />,
    taurus: <TbZodiacTaurus />,
    gemini: <TbZodiacGemini />,
    cancer: <TbZodiacCancer />,
    leo: <TbZodiacLeo />,
    virgo: <TbZodiacVirgo />,
    libra: <TbZodiacLibra />,
    scorpio: <TbZodiacScorpio />,
    sagittarius: <TbZodiacSagittarius />,
    capricorn: <TbZodiacCapricorn />,
    aquarius: <TbZodiacAquarius />,
    pisces: <TbZodiacPisces />,
  };

  //modal style
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "5px solid #33118F",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      {" "}
      <Grid
        item
        xs={12}
        sm={10}
        md={5}
        sx={{
          height: { xs: "500px", sm: "300px" },

          padding: "0px",
          margin: "0px",
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        {Object.keys(dashboardData?.horoscope?.data).map((sign, text) => (
          <Grid
            item
            key={sign}
            xs={4}
            sm={3}
            sx={{
              border: "1px solid #ABAC3C",
              borderRadius: "10px",
              boxShadow: " 8px 5px 8px -1px #8888D2;",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "40px",
              color: "#33118F",
              padding: "10px",
              margin: "3px",
            }}
            onClick={() => {
              setHoroscopeContent(dashboardData.horoscope.data[sign]);
              setHoroscopeTitle(sign);
              handleOpen();
            }}
          >
            {horoscopeIcons[sign]}
          </Grid>
        ))}
      </Grid>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {horoscopeTitle}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {horoscopeContent}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default Horoscope;
