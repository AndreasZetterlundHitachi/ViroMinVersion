import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {
    ViroARScene,
    ViroText,
    ViroConstants,
    ViroARSceneNavigator,
    ViroARTrackingTargets,
    ViroARImageMarker,
    ViroBox,
    Viro3DObject, 
    ViroAmbientLight,
    ViroMaterials,
  } from '@viro-community/react-viro';





class HelloWorldSceneAR extends Component {
    constructor(props) {
        super(props);
        // Set initial state here
        this.state = {
        text: 'Initializing AR...',
        texture: "white",
        };
        // bind 'this' to functions
        this._onInitialized = this._onInitialized.bind(this);
        ViroARTrackingTargets.createTargets({
        "targetOne" : {
            source : require('../res/qrcode.jpeg'),
            orientation : "Up",
            physicalWidth : 0.25 // real world width in meters
        }
        }); 
    }
    render() {
        return (
          <ViroARScene onTrackingUpdated={this._onInitialized} autofocus={true}>
            <ViroARImageMarker target={'targetOne'}>
            <Viro3DObject
                scale={[0.1,0.1, 0.1]}
                source={require('../res/tesla/object_car.obj')}
                resources={[require('../res/tesla/object_car.mtl'),
                            ]}
                type="OBJ"
                materials={this.state.texture}
                onClick={this._toggleButtons} />
            </ViroARImageMarker>
            <ViroAmbientLight color="#FFFFFF" />
          </ViroARScene>
        );
      }  

      _onInitialized(state, reason) {
        if (state == ViroConstants.TRACKING_NORMAL) {
          this.setState({
            text: 'Hello Worldlll!',
          });
        } else if (state == ViroConstants.TRACKING_NONE) {
          // Handle loss of tracking
        }
      }
}

ViroMaterials.createMaterials({
    white: {
      lightingModel: "PBR",
      diffuseTexture: require('../res/tesla/object_car_main_Base_Color.png'),
      metalnessTexture: require('../res/tesla/object_car_main_Metallic.png'),
      roughnessTexture: require('../res/tesla/object_car_main_Roughness.png'),
    },
});
export default class AR extends React.Component{
    render() {
        return (
            <ViroARSceneNavigator
              autofocus={true}
              initialScene={{
                scene: HelloWorldSceneAR,
              }}
              style={{flex: 1}}
            />
          );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
});