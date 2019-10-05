import React, {CSSProperties} from "react";
import { overlay as overlayStyle, sweetAlertContainer as containerStyle } from "../styles/SweetAlertStyles";

export default class Overlay extends React.Component<{
  show: boolean;
  onClick: Function;
  onKeyDown: Function;
  customContainerStyle: CSSProperties;
}> {

  private overlayElement: HTMLDivElement = null;

  componentDidMount() {
    if (this.overlayElement) {
      this.overlayElement.scrollTop = 0;
    }
  }

  setOverlayElementRef = (element: HTMLDivElement) => {
    this.overlayElement = element;
  };

  render() {
    const { show, onClick, onKeyDown, children, customContainerStyle } = this.props;
    return show ? (
      <div
        ref={this.setOverlayElementRef}
        style={Object.assign({}, overlayStyle, containerStyle, customContainerStyle)}
        onClick={(e) => onClick(e)}
        tabIndex={0}
        onKeyDown={(e) => onKeyDown(e)}
      >
        {children}
      </div>
    ) : (
      <div style={containerStyle} tabIndex={0} onKeyDown={(e) => onKeyDown(e)}>
        {children}
      </div>
    )
  }
}