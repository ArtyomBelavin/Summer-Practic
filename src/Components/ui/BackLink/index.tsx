import React from "react";
import "./index.scss"
import { Link } from "react-router-dom";

export const BackLink: React.FC = () => {
  return <Link className="backlink" to="/">Вернуться на главную ←</Link>;
};
