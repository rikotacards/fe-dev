import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';

interface ProgressBarProps {
  completionRate: number;
}
export const ProgressBar: React.FC<ProgressBarProps> = (props) => {
  const {completionRate} = props;
  return (
    <LinearProgress  color='primary' sx={{color: 'green', borderRadius: "10px", height: '10px', width: '100%'}} value={completionRate} variant='determinate'/>
  )
}