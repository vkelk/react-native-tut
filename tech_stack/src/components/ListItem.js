import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
    renderDescription() {
        const { library, expanded } = this.props;

        if (expanded) {
            return (
                <Text>{library.description}</Text>
            );
        }
    }

    render() {
        const { id, title } = this.props.library;
        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                <CardSection>
                    <Text style={styles.titleStyle}>
                        {title}
                    </Text>
                </CardSection>
                {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
        color: 'black',
    }
};

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;

    return { expanded: expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
