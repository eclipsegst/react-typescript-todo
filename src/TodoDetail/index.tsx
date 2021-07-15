import React, { useState, FunctionComponent } from 'react';
import { RouteComponentProps } from "@reach/router"

interface Props {
  id: string;
}

const TodoDetail: FunctionComponent<RouteComponentProps<Props>> = ({
  id
}) => {
 

  return (
    <>
      Todo id: { id }
    </>
  );
};

export default TodoDetail;