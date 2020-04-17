import React, {Component} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import {TouchableOpacity} from 'react-native-gesture-handler';

var fetchedData = [];

class SlotsExpandableView extends Component {
  state = {
    activeSections: [0],
    slotsFetched: [],
  };

  teacherId = this.props.teacherId;

  _renderHeader = (section, index, isActive) => {
    const finalStyle = isActive
      ? {
          ...styles.header,
          borderBottomEndRadius: 0,
          borderBottomStartRadius: 0,
          borderBottomWidth: 0,
        }
      : styles.header;

    return (
      <View style={finalStyle}>
        <Text style={styles.headerText}>{section.slotTime}</Text>
        {/* replace the below line with icon saying ongoing */}
        {section.started && (
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../assets/ongoingicon.png')}
              style={styles.ongoingIcon}
            />
            <Text style={{fontSize: 12}}>Started</Text>
          </View>
        )}
      </View>
    );
  };

  _renderContent = (section, index, isActive) => {
    if (!isActive) return null;

    // check if the slot has been previously fetched if not then fetch it
    if (this.state.slotsFetched[index] === undefined) {
      // fetch the slots and store data into fetchData and then set value of slotsFetched[index]=1
      const {slotId} = section;
      //api call
      fetchedData[index] = {
        topicDesc:
          'Fugiat dolore excepteur pariatur dolore ea anim pariatur consectetur et.',
        fees: 100,
        venue2: 'h3 hostel',
        genderPreference: 'both',
        estMarks: 15,
        estTime: '1 hour',
      };
      var temp = this.state.slotsFetched;
      temp[index] = 1;
      this.setState({slotsFetched: temp});

      // retun placeholders with loading
      return (
        <View style={styles.contentContainer}>
          <Text>Loading...</Text>
        </View>
      );
    } //return full content
    else {
      const data = fetchedData[index];

      return (
        <View style={styles.contentContainer}>
          <View style={styles.detailColumn}>
            <View style={styles.dataRow}>
              <Text style={styles.labelText}>Topic Description</Text>
              <Text style={styles.dataText}>{data.topicDesc}</Text>
            </View>

            <View style={styles.dataRow}>
              <Text style={styles.labelText}>Venue</Text>
              <Text style={styles.dataText}>{data.venue2}</Text>
            </View>

            <View style={styles.dataRow}>
              <Text style={styles.labelText}>Estimated Marks</Text>
              <Text style={styles.dataText}>{data.estMarks}</Text>
            </View>

            <View style={styles.dataRow}>
              <Text style={styles.labelText}>Estimated Time</Text>
              <Text style={styles.dataText}>{data.estTime}</Text>
            </View>

            <View style={styles.dataRow}>
              <Text style={styles.labelText}>Slots Booked</Text>
              <Text style={styles.dataText}>
                {section.currentStudents.toString()}/
                {section.maxStudents.toString()}
              </Text>
            </View>

            <View style={styles.dataRow}>
              <Text style={styles.labelText}>Fees</Text>
              <Text style={styles.dataText}>Rs. {data.fees}</Text>
            </View>

            <View style={styles.dataRow}>
              <Text style={styles.labelText}>Gender Preference</Text>
              <View style={{paddingHorizontal: 5}}>
                {data.genderPreference == 'male' ? (
                  <Image
                    source={require('../assets/male.png')}
                    style={styles.gendericon}
                  />
                ) : data.genderPreference == 'female' ? (
                  <Image
                    source={require('../assets/female.png')}
                    style={styles.gendericon}
                  />
                ) : (
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 2,
                    }}>
                    <Image
                      source={require('../assets/male.png')}
                      style={styles.gendericon}
                    />
                    <Image
                      source={require('../assets/female.png')}
                      style={styles.gendericon}
                    />
                  </View>
                )}
              </View>
            </View>
          </View>

          <View style={styles.buyContainer}>
            <TouchableOpacity style={styles.buyButton}>
              <Image
                source={require('../assets/buyicon.png')}
                style={styles.buyIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  };

  _updateSections = activeSections => {
    this.setState({activeSections});
  };

  render() {
    const {slotIds} = this.props;

    return (
      <Accordion
        sections={slotIds}
        activeSections={this.state.activeSections}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
        onChange={this._updateSections}
        touchableComponent={TouchableOpacity}
      />
    );
  }
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 30,
    color: '#000000',
  },
  contentContainer: {
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: 'white',
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: 'grey',
    flexDirection: 'row',
  },
  header: {
    backgroundColor: '#7785AC',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 10,
    borderRadius: 15,
    marginTop: 4,
    borderWidth: 1,
    borderColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buyIcon: {
    width: 40,
    height: 40,
  },
  buyContainer: {
    justifyContent: 'center',
    marginVertical: 20,
    borderColor: 'grey',
    borderLeftWidth: 1,
  },
  labelText: {
    color: 'grey',
    textAlign: 'center',
    flex: 0.3,
    marginRight: 1,
    textAlignVertical: 'center',
  },
  dataText: {
    color: 'black',
    flex: 1,
    textAlignVertical: 'center',
  },
  detailColumn: {
    flex: 1,
  },
  dataRow: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  buyButton: {
    paddingVertical: 20,
    paddingHorizontal: 2,
  },
  gendericon: {
    height: 20,
    width: 20,
    marginRight: 10,
    marginTop: 5,
  },
  ongoingIcon: {
    height: 30,
    width: 30,
  },
});

export default SlotsExpandableView;