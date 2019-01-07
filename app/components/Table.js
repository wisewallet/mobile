import React from 'react';

import { Text, View } from 'react-native'

export default class Table extends React.Component {

    renderRow(row) {
        return (
            <View style={{ flex: 1, flexDirection: 'row', padding: 10 }}>
                {
                    row.map((column) => {
                        return (
                            this.renderColumn(column)
                        )
                    })
                }
            </View>
        );
    }

    renderColumn(column) {
        return (
            <View style={{
                flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
            }}>
                {
                    column.map((item) => {
                        return (
                          <Text> test </Text>
                        )
                    })
                }
            </View>
        )
    }

    render() {
        const data = this.props.dataSource;
        console.log(data);
        return (
            <View style={{
                alignSelf: 'stretch',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                {
                    data.map((row) => {
                        return this.renderRow(row);
                    })
                }
            </View>
        );
    }
}
