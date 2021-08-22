import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import { observer } from 'mobx-react';
import React, { useContext, useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Input } from 'react-native-elements';
import { List } from 'react-native-paper';
import { RootStoreContext } from '../../../App';
import { ItemSelection } from '../../components';
import { TabNavigatorParams } from '../../interfaces';
import { Filter } from '../../utils';

type PantsListScreenRouteProp = RouteProp<TabNavigatorParams,'PantsList'>;
type PantsListScreenNavigationProp = BottomTabNavigationProp<TabNavigatorParams,'PantsList'>;
type Props = {
    route: PantsListScreenRouteProp;
    navigation: PantsListScreenNavigationProp;
};

const PantsList = observer(({route,navigation}:Props) => {

    let {shirts}  = useContext(RootStoreContext).dataStore;
    const [filteredPantss,setFilteredPantss] = useState([]);
    const [search,setSearch] = useState('');
    
    useEffect(() => {
        let filtered = Filter(search,shirts)
        setFilteredPantss(filtered);
    }, [search])

    return (
        <View>
            <Input
                placeholder="Search Item Here!..."
                onChangeText={value=>setSearch(value)}
            />
            <ScrollView>
                <List.AccordionGroup>
                    {filteredPantss.map((shirt)=> (<ItemSelection Id={shirt.id} Brand={shirt.brand} Colors={shirt.colors} Sizes={shirt.sizes} Name={shirt.name}/>))}
                </List.AccordionGroup> 
            </ScrollView>
        </View>
    )
})

export default PantsList
