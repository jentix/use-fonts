import * as React from 'react';

import styled from 'utils/ui/styled';

export type IProps = {
  title?: string;
  fontName: string;
  fontUrl: string;
};

export type IState = {
  inputValue: string;
};

export const StyledFontInput = styled.input<IProps>`
  @font-face {
    font-family:  ${props => props.fontName};
    src: url(${props => props.fontUrl});
  }
  font-size: 16px;
  font-family: ${props => props.fontName};
`;

export default class FontInput extends React.Component<IProps, IState> {

  public constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  componentDidMount() {
    const { fontName } = this.props;
    this.setState({
      inputValue: fontName,
    });
  }

  onInputChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  }

  public render() {
    return (
      <React.Fragment>
        <StyledFontInput
          type="text"
          fontName={this.props.fontName}
          fontUrl={this.props.fontUrl}
          value={this.state.inputValue}
          onChange={this.onInputChange}
        />
      </React.Fragment>
    );
  }

}
