import * as React from 'react';

interface IParentState {
    color: string;
}
export class Parent extends React.Component<{}, IParentState> {
    public constructor(props: any) {
        super(props);
        this.state = { color: 'purple' };
        this.setColor = this.setColor.bind(this);
    }
    public render() {
        return <div>
            <ColorForm colorChanger={this.setColor} />
            <ColorInfo color={this.state.color} />
        </div>;
    }
    setColor(newColor: string): void {
        this.setState({ color: newColor });
    }
}


interface IColorFormState {
    color: string;
}
interface IColorFormProps {
    colorChanger(x: string): void;
}
class ColorForm extends React.Component<IColorFormProps, IColorFormState> {
    public constructor(props: any) {
        super(props);
        this.state = { color: 'green' };
        this.handleChange = this.handleChange.bind(this);
    }
    public render() {
        return <div className="colorform">
            Please enter your favorite color:
                <input type="text"
                placeholder="Favorite color"
                value={this.state.color}
                onChange={this.handleChange} />
        </div>;
    }
    public handleChange(event: any) {
        this.setState({ color: event.target.value });
        this.props.colorChanger(event.target.value);
    }
}


interface IColorInfoProps {
    color: string;
}
class ColorInfo extends React.Component<IColorInfoProps, {}> {
    public render() {
        return <div className="colorinfo">
            Your favorite color is: {this.props.color}
        </div>;
    }
}
