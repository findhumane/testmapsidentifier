import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

const markers = [
  { id: "1", title: "Test1", description: "Hello World", location: { latitude: 30.270652526064772, longitude: -97.75368988587985 } },
  { id: "2", title: "Test2", description: "Hello World", location: { latitude: 30.265367698173810, longitude: -97.74469483868448 } },
  { id: "3", title: "Test3", description: "Hello World", location: { latitude: 30.261920499918144, longitude: -97.75005925680142 } },
];

export default function App() {
  const renderMarker = (marker) => (
    <Marker
      identifier={marker.id}
      key={marker.id}
      coordinate={marker.location}
      title={marker.title}
      description={marker.description}
      tracksViewChanges={false}
    />
  );

  const onCalloutPress = (event) => {
    if (event && event.nativeEvent) {
      console.log("onCalloutPress id: " + event.nativeEvent.id);
      if (event._targetInst && event._targetInst.return) {
        console.log("onCalloutPress return key: " + event._targetInst.return.key);
      }
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 30.26714,
          longitude: -97.74259,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onCalloutPress={onCalloutPress}
      >
        {markers.map(renderMarker)}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
