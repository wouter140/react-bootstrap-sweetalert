import React, {CSSProperties, ReactNode} from "react";
import {footerStyle} from "../styles/SweetAlertStyles";

export default class Footer extends React.Component<{
    footer: ReactNode|string|boolean;
    customFooterStyle: CSSProperties;
}> {
    render() {
        const { footer, customFooterStyle} = this.props;
        return footer && typeof footer !== "boolean" ? (
            <div style={Object.assign({}, footerStyle, customFooterStyle)}>
                {footer}
            </div>
        ) : null;
    }
}