import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Logo = () => {
    const title = 'ทีโอที'
    const isTH = true
    const showData = () => <Text>Hello Function</Text>

    return (
        <View>
            <Text style={{color: 'magenta', fontSize: 20}}>TOT</Text>
            {
                isTH === true && <Text style={{color: 'magenta', fontSize: 20}}>{title}</Text>
            }
            {
                isTH === true ? <Text style={{color: 'magenta', fontSize: 20}}>{title}</Text> : <Text>TOT</Text>
            }
            {showData()}
                        
        </View>
    )
}

export default Logo

const styles = StyleSheet.create({})
