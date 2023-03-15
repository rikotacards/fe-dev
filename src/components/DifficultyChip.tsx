import { Chip, ChipProps } from '@mui/material';
import React from 'react';

interface DifficultyChip {
  label: string;
}
type color = "primary" | "warning" | "error" | "default" | "secondary" | "info" | "success" | undefined
export const DifficultyChip: React.FC<DifficultyChip> = (props) => {
  const {label} = props;
  const colors:{[key: string]: color } = {
    easy: 'primary', 
    medium: 'warning', 
    hard: 'error'
  }
  return (
    <Chip color={colors[label]} label={label}/>
  )
}