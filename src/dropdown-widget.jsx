/* @flow */

import React from 'react';

type DropdownWidgetDefaultPropType = {
    size: number
};

type DropdownWidgetPropType = DropdownWidgetDefaultPropType & {
    data: Array<string>
};

type DropdownWidgetStateType = {
    value: string
};

class DropdownWidget extends React.Component<DropdownWidgetDefaultPropType, DropdownWidgetPropType, DropdownWidgetStateType> {
    static defaultProps: DropdownWidgetDefaultPropType;
    props: DropdownWidgetPropType;
    state: DropdownWidgetStateType;

    _handleSelectionChange: (event: SyntheticEvent) => void;

    constructor(props: DropdownWidgetPropType): void {
        super(props);

        this.state = { value: 'lime' };

        this._handleSelectionChange = this._handleSelectionChange.bind(this);
    }

    _handleSelectionChange(event: SyntheticEvent) {
        if (event.target instanceof HTMLSelectElement) {
            this.setState({ value: event.target.value });
        }
    }

    render() {
        return (
            <select value={this.state.value} onChange={this._handleSelectionChange} size={this.props.size}>
                {this.props.data.map((value) => {
                    return (
                        <option key={value} value={value}>{value}</option>
                    );
                })}
            </select>
        );
    }
}

DropdownWidget.propTypes = {
    data: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    size: React.PropTypes.number
};

DropdownWidget.defaultProps = {
    size: 0
};

export default DropdownWidget;
