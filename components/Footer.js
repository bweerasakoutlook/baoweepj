import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Footer = ({subTitle, year}) => {
    const users = [
        {id: 1, name: 'John', age: 35},
        {id: 2, name: 'Marry', age:45},
    ]

    const [count, setCount] = useState(0)
    useEffect( () => {
        console.log('use Effect')
    }
    )

    useEffect( () => {
        console.log('use Effect 2')
    },[]
    )

    useEffect( () => {
        console.log('use Effect 3')
    },[count]
    )

    return (
        <View>
            <Text>{subTitle}</Text>
            <Text> พ.ศ. {year + 543}</Text>
            <Button title='Click Me Footer' onPress = {
                () => {
                    // setCount(5)
                    setCount(count+1)
                }
            }></Button>
            <Text style = {styles.title}>TOT Coding Thailand {count} </Text>
            {
                users.map( (user, index) => {
                    return <Text key = {user.id}>  {index+1}  {user.name} age : {user.age}</Text>
                }) 
            }
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    title:{
        fontSize: 20,
        color: 'magenta',
    }    
})
