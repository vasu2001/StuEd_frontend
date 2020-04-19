import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import StateContext from '../../context/StateContext';
import {SearchBar} from 'react-native-elements';
import {FlatList} from 'react-native-gesture-handler';
import TopicListItem from '../../components/TopicListItem';
import AddTopicButton from '../../components/AddTopicButton';

const TopicSelect = ({route, navigation}) => {
  const {teacherUI} = useContext(StateContext).data;
  const {subjectName} = route.params;
  const [search, setSearch] = useState('');
  const originalTopicList = [
    'A',
    'B',
    'C',
    'AB',
    'ABCD',
    'FJF',
    'DFDS',
    'AS',
    'ASDF',
    'DFG',
    'ETRER',
  ]; //server data
  const [topicList, setTopicList] = useState(originalTopicList);

  const updateSearch = search => {
    setSearch(search);
    setTopicList(
      originalTopicList.filter(item =>
        item.toLowerCase().includes(search.toLowerCase()),
      ),
    );
  };

  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={require('../../assets/bg2.png')}
        style={styles.backgroundImage}
        imageStyle={{resizeMode: 'stretch'}}>
        {/* header view comprising of searchbar and its label text */}
        <View style={styles.header}>
          <Text style={styles.labelSearchbar}>Select a Topic</Text>
          <SearchBar
            placeholder="Search for a topic...."
            containerStyle={styles.searchbar}
            onChangeText={updateSearch}
            value={search}
            inputContainerStyle={{opacity: 1}}
            lightTheme
            round
          />
        </View>
        {/* list section containing the list and add topic button for teacherUI */}
        <View style={styles.listSection}>
          <FlatList
            style={styles.list}
            data={topicList.map(item => ({
              key: item,
            }))}
            renderItem={({item}) => (
              <TopicListItem
                topicName={item.key}
                navigation={navigation}
                teacherUI={teacherUI}
                subjectName={subjectName}
              />
            )}
            keyExtractor={item => item.key}
            ListFooterComponent={teacherUI && AddTopicButton}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default TopicSelect;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
  },
  header: {
    flex: 0.25,
    justifyContent: 'flex-end',
  },
  labelSearchbar: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
  },
  searchbar: {
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    marginHorizontal: 10,
  },
  listSection: {
    flex: 0.75,
    padding: 10,
    marginTop: 10,
    justifyContent: 'space-between',
    paddingBottom: 0,
  },
  list: {
    flex: 1,
  },
});
