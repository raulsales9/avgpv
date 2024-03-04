import { View, Text, ScrollView, FlatList } from 'react-native';

const Page = () => {
    return (
        <ScrollView contentInsetAdjustmentBehavior='automatic' contentContainerStyle={{paddingBottom: 40}}>
            <FlatList scrollEnabled={false} keyExtractor={(item) => item.id}/>
        </ScrollView>
    );
}