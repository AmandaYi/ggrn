import React from 'react'
import Toast from 'react-native-root-toast'
import {height, width} from "./variable";
import {View, ActivityIndicator, StyleSheet} from 'react-native'

export function toast(message, position = 'bottom') {
    let toast_position;
    switch (position) {
        case 'center':
            toast_position = Toast.positions.CENTER;
            break;
        case 'top':
            toast_position = Toast.positions.TOP;
            break;
        default:
            toast_position = Toast.positions.BOTTOM

    }
    Toast.show(message, {
        duration: Toast.durations.SHORT,
        position: toast_position,
        shadow: true,
    })
}

  export const loading = (isShow) => {
        let loadingBox = null
        if (isShow) {
            loadingBox = (<View style={styles.loadingWrapper}>
                <ActivityIndicator
                    size='large'
                    color='#2cbc55'
                />
            </View>)
        }
        return loadingBox

}

const styles = StyleSheet.create({
  loadingWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 150,
    width: width,
    height: height,
    position: 'absolute',
    zIndex: 9999,
  }
})


