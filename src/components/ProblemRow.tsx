import {
  Checkbox,
  Chip,
  LinearProgress,
  Link,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { ProblemType } from "../categories";
import { StateContext } from "../Context";
import { getLocalStorage, toggleProblemStatus } from "../localStorageUtil";
import { useTheme } from "@mui/material/styles";
import { DifficultyChip } from "./DifficultyChip";

interface ProblemRowProps extends ProblemType {
  difficulty?: string;
  status: boolean;
  categoryName: string;
}


export const ProblemRow: React.FC<ProblemRowProps> = (props) => {
  const {
    questionPrompts,
    name,
    categoryName,
    status,
    studyResources,
    url,
    difficulty,
  } = props;
  const [isChecked, setIsChecked] = React.useState<boolean>(false);
  const { state, dispatch } = React.useContext(StateContext);
  const hasQuestionPrompts = questionPrompts.length > 0;
  const data = getLocalStorage();
  React.useEffect(() => {
    const isChecked = data?.[categoryName]?.[name];
    setIsChecked(isChecked);
  }, [isChecked, categoryName, name, data]);
  const theme = useTheme();
  if (!Object.keys(state).length) {
    return <LinearProgress />;
  }

  const onClick = () => {
    setIsChecked(!isChecked);
    toggleProblemStatus(categoryName, name);
    dispatch({
      type: "TOGGLE",
      payload: { categoryName: categoryName, problemName: name },
    });
  };

  return (
    <TableRow
      key={name}
      sx={{ background: isChecked ? theme.palette.action.selected : undefined }}
    >
      <TableCell
        sx={{ width: "6%", border: `2px solid ${theme.palette.divider}` }}
        component="th"
        scope="row"
      >
        <Checkbox onClick={onClick} checked={isChecked || status} />
      </TableCell>

      <TableCell
        sx={{ width: "30%", border: `2px solid ${theme.palette.divider}` }}
        align="left"
      >
        <Link style={{pointerEvents:url.length  ?undefined: 'none'}} color={url.length ? 'primary': 'secondary'} underline="none" rel="noreferrer" target={"_blank"} href={url}>
          <Typography sx={{ fontWeight: "bold" }}>{name}</Typography>
        </Link>
        {!url.length && <Chip size="small" label='Pending Example'/>}
      </TableCell>
      {hasQuestionPrompts && (
        <TableCell
          sx={{ width: "50%", border: `2px solid ${theme.palette.divider}` }}
          align="left"
        >
          {questionPrompts.map((prompt) => (
            <li>{prompt}</li>
          ))}
        </TableCell>
      )}
      <TableCell
        sx={{ width: "40%", border: `2px solid ${theme.palette.divider}` }}
        align="left"
      >
        {studyResources.map((res) => (
          <li key={res.resourceName}>
            <Link rel="noreferrer" target={"_blank"} href={res.resourceUrl}>
              {res.resourceName}
            </Link>
          </li>
        ))}
      </TableCell>
      <TableCell
        sx={{ width: "40%", border: `2px solid ${theme.palette.divider}` }}
        align="left"
      >
        {difficulty && <DifficultyChip label={difficulty} />}
      </TableCell>
    </TableRow>
  );
};
