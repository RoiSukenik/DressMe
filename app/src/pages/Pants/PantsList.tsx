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

    let {dataStore,setStore}  = useContext(RootStoreContext);
    let {pants} = dataStore;
    let {addPantsId,addPantsColor,addPantsSize} = setStore;

    const [filteredPants,setFilteredPants] = useState([]);
    const [search,setSearch] = useState('');
    
    useEffect(() => {
        let filtered = Filter(search,pants)
        setFilteredPants(filtered);
    }, [search])

    return (
        <View>
            <Input
                placeholder="Search Pants Here!..."
                onChangeText={value=>setSearch(value)}
            />
            <ScrollView>
                <List.AccordionGroup>
                    {filteredPants.map((pants)=> (<ItemSelection 
                        Id={pants.id} 
                        Brand={pants.brand} 
                        Colors={pants.colors} 
                        Sizes={pants.sizes} 
                        Name={pants.name}
                        SaveId={addPantsId} 
                        SaveColor={addPantsColor} 
                        SaveSize={addPantsSize}/>))}
                </List.AccordionGroup> 
            </ScrollView>
        </View>
    )
})

export default PantsList
