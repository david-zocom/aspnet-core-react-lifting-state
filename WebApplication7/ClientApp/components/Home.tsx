import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Parent } from './Colors';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <Parent />;
    }
}
