import React from 'react';
import Entity from 'Entity'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  asset,
  AmbientLight,
  PointLight
} from 'react-360';

export class test360 extends React.Component {
  render() {
    return (
        <View style={styles.panel}>
          <View style={styles.greetingBox}>
            <Text style={styles.greeting}>
              leare says hello world
            </Text>
          </View>
        </View>
    );
  }
};

export class coffee extends React.Component {
	render() {
		return(
			<View>
        <AmbientLight intensity={0.7} />
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
            obj: asset('coffee.obj'), 
            mtl: asset('coffee.mtl')
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

export class laptop extends React.Component {
	render() {
		return(
			<View>
        <AmbientLight intensity={0} />
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
            obj: asset('laptop.obj'), 
            mtl: asset('laptop.mtl')
            }} 

            lit={true}
            style={{
              color: "#FFF",
              transform: [
                {translate: [-4, 0, 0]},
                {scale: 0.02}
              ]
            }}
        />
			</View>
        );
	}
}

export class plane extends React.Component {
	render() {
		return(
			<View>
        <AmbientLight intensity={0.3} />
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
            obj: asset('plane.obj'), 
            mtl: asset('plane.mtl')
            }} 

            lit={true}
            style={{
              color: "#FFF",
              transform: [
                {translate: [30, 0, 0]},
                {scale: 0.02}
              ]
            }}
        />

			</View>
        );
        
	}
}

export class spaceship extends React.Component {
	render() {
		return(
			<View>
        <AmbientLight intensity={0.3} />
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
            obj: asset('spaceship.obj'), 
            mtl: asset('spaceship.mtl')
            }} 

            lit={true}
            style={{
              color: "#FFF",
              transform: [
                {translate: [3, 0, 10]},
                {scale: 3}
              ]
            }}
        />

			</View>
        );
        
	}
}

export class planets extends React.Component {
	render() {
		return(
			<View>
        <AmbientLight intensity={-1} />
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
            obj: asset('planets.obj'), 
            mtl: asset('planets.mtl')
            }} 

            lit={true}
            style={{
              color: "#FFF",
              transform: [
                {translate: [9, 0, 10]},
                {scale: 3}
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
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
  // coffee: {
  //   width: 10500,
  //   height: 10500
  // }
});

AppRegistry.registerComponent('test360',  () => test360);
AppRegistry.registerComponent('coffee',  () => coffee);
AppRegistry.registerComponent('laptop',  () => laptop);
AppRegistry.registerComponent('plane',  () => plane);
AppRegistry.registerComponent('spaceship',  () => spaceship);
AppRegistry.registerComponent('planets',  () => planets);