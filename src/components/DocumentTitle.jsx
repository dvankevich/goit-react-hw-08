/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet-async";

export default function DocumentTitle({ children }) {
  return (
    <Helmet>
      <title>{children}</title>
    </Helmet>
  );
}
