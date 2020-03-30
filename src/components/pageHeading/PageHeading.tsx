import React from 'react';
import './PageHeading.scss';

interface Props {
  title: string;
}

const PageHeading: React.FC<Props> = ({ title }) => {
  return <h1 className="page-headline">{title}</h1>;
};
export default PageHeading;
