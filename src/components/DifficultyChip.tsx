import { Chip } from '@mui/material';
import React from 'react';

interface DifficultyChipProp {
  label: string;
}
type color = "primary" | "warning" | "error" | "default" | "secondary" | "info" | "success" | undefined
export const DifficultyChip: React.FC<DifficultyChipProp> = (props) => {
  const {label} = props;
  const colors:{[key: string]: color } = {
    easy: 'primary', 
    medium: 'warning', 
    hard: 'error'
  }
  return (
    <Chip size='small' color={colors[label]} label={label}/>
  )
}