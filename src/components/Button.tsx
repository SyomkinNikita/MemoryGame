import * as React from 'react';


export class Button extends React.Component<any, any> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: any) {
    super(props);
  }

  a = 'b';

  render() {
    return <button>{this.a}</button>;
  }
}