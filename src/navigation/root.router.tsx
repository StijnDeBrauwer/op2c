import React, { FC } from "react";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import { Footer } from "../components/footer/footer.component";
import { Header } from "../components/header/header.component";
import { Routes } from "./routes.const";

import "./rootRouter.style.scss";
import { ScrollToTop } from "../hooks/withScrollToTop.hoc";

const RootRouter: FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="root-router">
        <Header />
        <div className="root-router__content">
          <Switch>
            <Route exact path="/">
              <Redirect to="/home"></Redirect>
            </Route>
            {Routes.map((route) => {
              return (
                <Route key={route.label} path={route.route}>
                  {route.component}
                </Route>
              );
            })}
          </Switch>
        </div>
        <Footer className="root-router__footer" />
      </div>
    </HashRouter>
  );
};

export default RootRouter;
