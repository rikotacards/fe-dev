import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ProblemRow } from './ProblemRow';
import { ProblemType } from '../categories';
import { useTheme } from "@mui/material/styles";

const columnHeading = [
  'Status', 'Example', 'knowledge Check','Study Resources','Difficulty'
]
interface ProblemsTableProps {
  problems: ProblemType[]
  categoryName: string;
}

export const ProblemsTable: React.FC<ProblemsTableProps> =(props) => {
  const {problems, categoryName} = props;
  const theme = useTheme();
  return (
  <TableContainer  component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead >
          <TableRow>
            {columnHeading.map((heading) =><TableCell sx={{fontWeight: 'bold', border: `2px solid ${theme.palette.divider}`}} align='left'  key={heading}>{heading}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {problems.map((p) => (
            <ProblemRow questionPrompts={p.questionPrompts} key={p.name} difficulty={p?.difficulty} categoryName={categoryName} status={false} name={p.name} url={p.url} studyResources={p.studyResources}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}