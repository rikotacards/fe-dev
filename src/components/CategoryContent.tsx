import React from 'react';
import { ProblemType } from '../categories';
import { ProblemsTable } from './ProblemsTable';

interface CategoryContentProps {
  problems: ProblemType[];
  categoryName: string;
}
export const CategoryContent: React.FC<CategoryContentProps> = (props) => {
  const {problems, categoryName} = props;
  return (
    <ProblemsTable categoryName={categoryName} problems={problems}/>
  )
}