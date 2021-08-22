import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import { observer } from 'mobx-react';
import React, { useEffect, useState,useContext } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Input } from 'react-native-elements';
import { List } from 'react-native-paper';
import { RootStoreContext } from '../../../App';
import { ItemSelection } from '../../components';
import { TabNavigatorParams } from '../../interfaces';
import { Filter } from '../../utils';


type ShirtListScreenRouteProp = RouteProp<TabNavigatorParams,'ShirtList'>;
type ShirtListScreenNavigationProp = BottomTabNavigationProp<TabNavigatorParams,'ShirtList'>;
type Props = {
    route: ShirtListScreenRouteProp;
    navigation: ShirtListScreenNavigationProp;
};

const ShirtList = observer(({route,navigation}:Props) => {

    let {shirts}  = useContext(RootStoreContext).dataStore;
    const [filteredShirts,setFilteredShirts] = useState([]);
    const [search,setSearch] = useState('');
    
    useEffect(() => {
        let filtered = Filter(search,shirts)
        setFilteredShirts(filtered);
    }, [search])

    return (
        <View>
            <Input
                placeholder="Search Item Here!..."
                onChangeText={value=>setSearch(value)}
            />
            <ScrollView>
                <List.AccordionGroup>
                    {filteredShirts.map((shirt)=> (<ItemSelection Id={shirt.id} Brand={shirt.brand} Colors={shirt.colors} Sizes={shirt.sizes} Name={shirt.name}/>))}
                </List.AccordionGroup> 
            </ScrollView>
        </View>
    )
})

export default ShirtList

const styles = StyleSheet.create({})
