import React, { ReactNode } from 'react';

interface InfoItem {
    children?: ReactNode;
    className: string;
}

const ProjectsProp = (props: InfoItem) => {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
};

export default ProjectsProp;
