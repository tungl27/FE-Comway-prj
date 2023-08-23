import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Protected(props) {
  let Cmp = props.Cmp;
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("IDLoginUser")) {
      navigate("/login");
    }
  }, []);
  return <Cmp />;
}
