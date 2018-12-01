import * as React from 'react';

import styled from 'utils/ui/styled';

export type FontObject = {
  fontName: string;
  fontUrl: any;
  fontWeight: string;
  fontStyle: string;
};

export type IProps = {
  title?: string;
  fontObject: FontObject;
};

export type IState = {
  inputValue: string;
};

export type StyledFontInputProps = {
  fontObject: FontObject;
};

export const StyledFontInput = styled.input<StyledFontInputProps>`
  @font-face {
    font-family:  ${props => props.fontObject.fontName};
    src: url(${props => props.fontObject.fontUrl});
    font-weight: normal;
    font-style: normal;
  }

  font-size: 4rem;
  font-family: ${props => props.fontObject.fontName};

  width: 80vw;
`;

export default class FontInput extends React.Component<IProps, IState> {

  public constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  componentDidMount() {
    const { fontObject } = this.props;
    this.setState({
      inputValue: fontObject.fontName,
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
          fontObject={this.props.fontObject}
          value={this.state.inputValue}
          onChange={this.onInputChange}
        />
      </React.Fragment>
    );
  }

}
