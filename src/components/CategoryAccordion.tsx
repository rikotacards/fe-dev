import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ProgressBar } from "./ProgressBar";
import { CategoryContent } from "./CategoryContent";
import { ProblemType } from "../categories";
import { getCompletionProblemsByCategory } from "../utils/countCompletion";
import { getLocalStorage } from "../localStorageUtil";

interface CategoryAccordionProps {
  categoryName: string;
  problems: ProblemType[];
}
export const CategoryAccordion: React.FC<CategoryAccordionProps> = (props) => {
  const { categoryName, problems } = props;
 const [completed, setCompleted] = React.useState(0);
 const [count, setCount] = React.useState(0);
 const [total , setTotal] = React.useState(0);
 const data = getLocalStorage();

  React.useEffect(() => {
    
    if(Object.keys(data).length === 0){
      return
    }
    const { completionRate, count, total } = getCompletionProblemsByCategory(
      categoryName,
      data
    );
    setCompleted(completionRate)
    setCount(count);
    setTotal(total)
  
  }, [count, data, categoryName])
  
  
  return (
    <div>
      <Accordion sx={{ margin: "4px 0 4px 0" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div
            style={{
              display: "flex",
              width: "100%",
             
            }}
          >
            <Typography
              sx={{
                whiteSpace: "normal",
                minWidth: "150px",
                flexGrow: 1,
                display: "flex",
                justifyItems: "flex-start",
                fontWeight: 'bold',
                marginRight: "8px",
                textAlign: 'left'
              }}
              variant="body1"
            >
              {categoryName}
            </Typography>
            <div
              style={{ width: "100%", display: "flex", alignItems: "center" }}
            >
              <div>
                <Typography
                  sx={{ marginRight: "4px" }}
                >{`${count}/${total}`}</Typography>
              </div>
              <ProgressBar completionRate={completed} />
            </div>
          </div>
        </AccordionSummary>
        <div>
          <CategoryContent categoryName={categoryName} problems={problems} />
        </div>
      </Accordion>
    </div>
  );
};
