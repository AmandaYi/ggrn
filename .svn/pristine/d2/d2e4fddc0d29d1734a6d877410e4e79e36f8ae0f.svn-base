import React from "react";





import {
    View, Text, Modal, TouchableHighlight
} from "react-native"












export default class ModalCropSpecies extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: this.props.modalCropSpeciesValue
        } 

    }
    toggleModal(visible) {
        this.setState({ modalVisible: visible });
    }

 
    render = () => {
        return (
            <View >
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    hardwareAccelerated={true}
                    onRequestClose={() => {
                        alert('Modal has been closed.');
                    }}
                    // 苹果
                    onDismiss={() => {
                        alert('Modal has been closed');
                    }}
                    // presentationStyle="fullScreen"
                >

                    <View>
                        <View>
                            <Text></Text>

                            <TouchableHighlight
                                onPress={() => {
                                    this.toggleModal(!this.state.modalVisible);
                                }}>
                                <Text>隐藏</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>

                {/*
                <TouchableHighlight
                    onPress={() => {
                        this.toggleModal(true);
                    }}>
                    <Text>展示</Text>
                </TouchableHighlight>
                */} 
            </View>
        );
    }
}