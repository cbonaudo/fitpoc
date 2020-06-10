/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Header, Colors} from 'react-native/Libraries/NewAppScreen';

import Fitness from '@ovalmoney/react-native-fitness';

const permissions = [
  {kind: Fitness.PermissionKind.Step, access: Fitness.PermissionAccess.Read},
];

Fitness.requestPermissions(permissions)
  .then(authorized => {
    // Do something
    console.log('Request Perm step', authorized);

    Fitness.isAuthorized(permissions)
      .then(authorized => {
        // Do something
        console.log('Get Perm step', authorized);

        Fitness.getSteps({
          startDate: "01 Jun 2020 00:00:00 GMT",
          endDate: "10 Jun 2020 00:00:00 GMT",
        })
          .then(authorized => {

            console.log('Get steps', authorized);
          })
          .catch(error => {
            
        // Do something
        console.log('error', error);
          });
      })
      .catch(error => {
        // Do something
        console.log('error', error);
      });
  })
  .catch(error => {
    // Do something
    console.log('error', error);
  });

const App: () => React$Node = () => {
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <Header />

        {global.HermesInternal == null ? null : (
          <View style={styles.engine}>
            <Text style={styles.footer}>Engine: Hermes</Text>
          </View>
        )}

        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Step One</Text>
            <Text style={styles.sectionDescription}>
              Edit <Text style={styles.highlight}>App.js</Text> to change this
              screen and then come back to see your edits.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
