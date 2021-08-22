import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import { observer } from 'mobx-react'
import React, { useContext, useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Input } from 'react-native-elements';
import { List } from 'react-native-paper';
import { RootStoreContext } from '../../../App';
import { ItemSelection } from '../../components';
import { TabNavigatorParams } from '../../interfaces';
import { Filter } from '../../utils';

type ShoeListScreenRouteProp = RouteProp<TabNavigatorParams,'ShoeList'>;
type ShoeListScreenNavigationProp = BottomTabNavigationProp<TabNavigatorParams,'ShoeList'>;
type Props = {
    route: ShoeListScreenRouteProp;
    navigation: ShoeListScreenNavigationProp;
};


const ShoeList = observer(({route,navigation}:Props) => {
    
    let {shoes}  = useContext(RootStoreContext).dataStore;
    const [filteredShoes,setFilteredShoes] = useState([]);
    const [search,setSearch] = useState('');
    
    useEffect(() => {
        let filtered = Filter(search,shoes)
        setFilteredShoes(filtered);
    }, [search])

    return (
        <View>
            <Input
                placeholder="Search Item Here!..."
                onChangeText={value=>setSearch(value)}
            />
            <ScrollView>
                <List.AccordionGroup>
                    {filteredShoes.map((shoe)=> (<ItemSelection Id={shoe.id} Brand={shoe.brand} Colors={shoe.colors} Sizes={shoe.sizes} Name={shoe.name}/>))}
                </List.AccordionGroup> 
            </ScrollView>
        </View>
    )
})

export default ShoeList

const styles = StyleSheet.create({})
