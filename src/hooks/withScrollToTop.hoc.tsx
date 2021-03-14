import React, { useEffect } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

const ScrollToTopComponent = ({ history }: RouteComponentProps) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, []);

  return null;
};

const ScrollToTop = withRouter(ScrollToTopComponent);

export { ScrollToTop };
