/* @flow */

import React from 'react';

type DropdownWidgetStateType = {
    value: string
};

class DropdownWidget extends React.Component<void, any, DropdownWidgetStateType> {
    state: DropdownWidgetStateType;

    _handleSelectionChange: (event: SyntheticEvent) => void;

    constructor(): void {
        super();

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
            <select value={this.state.value} onChange={this._handleSelectionChange}>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
            </select>
        );
    }
}

export default DropdownWidget;
