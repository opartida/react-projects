import React from "react";
import { Box, View, Cylinder, Sphere, StyleSheet } from "react-vr";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Box dimWidth={2} 
        dimDepth={2} 
        dimHeight={1} 
        style={{ color: "red" }} />
      </View>
    );
  }
}
