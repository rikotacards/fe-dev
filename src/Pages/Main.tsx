import { Typography } from "@mui/material";
import React from "react";
import { Categories } from "../components/Categories";
import { ProgressBar } from "../components/ProgressBar";
import {  StateContext } from "../Context";


export const MainPage: React.FC = () => {
  const context = React.useContext(StateContext)
  const [completed, setCompleted] = React.useState(0);
  const [total, setTotal] = React.useState(0);

  React.useEffect(()=> {
    setCompleted(context.count)
    setTotal(context.total)
  }, [context.completionRate, context.total, context.count]) 
  return (
    <>
    <div style={{marginBottom: '24px'}}>
    <Typography sx={{fontWeight: 'bold'}} variant='h6'>{completed}/{total}</Typography>
      <ProgressBar completionRate={context.completionRate} />
    </div>
      <Categories />
    </>
  );
};
