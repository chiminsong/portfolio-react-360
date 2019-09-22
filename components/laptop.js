
import React from 'react';
import {asset, View} from 'react-360';
import Entity from 'Entity'; // also a part of react-360 but imported separately
import AmbientLight from 'AmbientLight';
import PointLight from 'PointLight';

export class laptop extends React.Component {
	render() {
		return(
			<View>
        <AmbientLight intensity={1} />
        <PointLight
          style={{
            color: 'white',
            transform: [
              {translate: [0, 0, 0]}
            ]
          }}
        />
        <Entity 
          source={{
            gltf2: asset('laptop.gltf')
            }} 

            lit={true}
            style={{
              color: "#FFF",
              transform: [
                {translate: [-4, 0, 0]},
                {scale: 0.25}
              ]
            }}
        />
			</View>
        );
	}
}

const styles = StyleSheet.create({
    panel: {
      width: 200,
      height: 200,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

AppRegistry.registerComponent('laptop',  () => laptop);