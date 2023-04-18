import { FC, Fragment, PropsWithChildren } from "react";
import Navigation from "./Navigation";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <Fragment>
            <Navigation />
            <Fragment>{children}</Fragment>
        </Fragment>
    );
};

export default MainLayout;
