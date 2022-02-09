import { styled } from "@stitches/react";

export const Container = styled("div", {
  width: "100%",
  height: "100vh",
  display: "flex",
});

export const Headers = styled("div", {
  marginBottom: "28px",
  h1: {
    lineHeight: "72px",
  },
  span: {
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "36px",

    color: "rgba(0,0,0,0.7)",
  },
});

export const BoxLogin = styled("div", {
  width: "50%",

  backgroundColor: "#F6F6F6",

  padding: "15px 100px 0 100px",

  button: {
    width: "60%",
    height: "48px",

    color: "#fff",

    border: "none",
    borderRadius: "15px",

    cursor: "pointer",

    background: "linear-gradient(122.33deg, #53E0FF 30.62%, #1E94E9 100%)",
    boxShadow: "5px 5px 20px rgba(0, 224, 255, 0.15)",

    fontWeight: 600,
    fontSize: "18px",
    lineHeight: "45px",

    marginTop: "20px",

    transition: "transform 0.5s",

    "&:hover": {
      transform: "scale(1.05)",
    },
  },
});

export const BoxImage = styled("div", {
  width: "50%",
  backgroundColor: "#83D5FF",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  img: {
    width: "70%",
  },
});

export const InputBox = styled("div", {
  display: "flex",
  flexDirection: "column",
  span: {
    fontWeight: 500,
    lineHeight: "25px",
  },
  div: {
    width: "100%",
    height: "48px",

    position: "relative",

    display: "flex",
    alignItems: "center",
    justifyContent: "end",

    svg: {
      margin: "0 8px",
      position: "absolute",
    },
    input: {
      width: "100%",
      height: "48px",

      padding: "0 40px 0 20px",

      border: "1px solid #D8D8D8",
      borderRadius: "15px",

      background: "transparent",

      "&::placeholder": {
        color: "rgba(0,0,0,0.4)",
        fontWeight: 600,
        lineHeight: "39px",
      },
    },
    marginBottom: "20px",
  },
});

export const CheckBox = styled("div", {
  display: "flex",
  alignItems: "flex-start",
  width: "90%",

  span: {
    color: "rgba(0,0,0,0.7)",

    order: 1,
    flexGrow: 0,

    margin: "0 19px",

    lineHeight: "25px",
    fontWeight: 500,
  },
  input: {
    width: "35px",
    height: "35px",
    cursor: "pointer",
  },
});

export const HasAccount = styled("div", {
  display: "flex",
  alignItems: "center",

//   backgroundColor: 'red',

  width: "100%",

  margin: '-10px 0',
  
  button: {
    background: "transparent",
    color: "#4CB5EA",
    width: '20%',
    height: 0,
    fontSize: "16px",   
  },
  span: {
    fontSize: "16px",
  },
});
