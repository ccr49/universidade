import logo from "../../images/logo.svg";
import * as React from "react";
import {makeStyles} from "@material-ui/core";

export const Logo = ({ alt, ...otherProps }) => {

    const styles = {
        root: {
            minHeight: 40,
            maxHeight: 70,
            minWidth: 70,
        }
    };
    const useStyles = makeStyles(styles, { name: "Logo" });

    const { root } = useStyles();

    return (
        <img {...otherProps} alt={alt} aria-hidden={true} className={root} src={logo} />
    );
}