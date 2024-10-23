import React from 'react';
import {StatusBar, ScrollView} from 'react-native';
import Boats from './components/Boats.js'

const App = () => {
  return (
      <ScrollView>
        <StatusBar hidden={true}/>
        <Boats name="Sea Ray 500 Sundancer"
               desc="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
               icon_name="peace"
               poster={require("./img2/sea_ray.jpg")}/>
        <Boats name="Four Winns Horizon 180"
               desc="A sporty look and refined details truly set the Horizon 180 above all others."
               icon_name="peace"
               poster={require("./img2/four_winns.jpg")}/>
          <Boats name="Flipper 640 ST"
                 desc="A modern take on the classic, traditional hardtop and perfect for a family picnic."
                 icon_name="peace"
                 poster={require("./img2/flipper.jpg")}/>
          <Boats name="Princess V48"
                 desc="AThere is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."
                 icon_name="peace"
                 poster={require("./img2/princess.jpg")}/>
          <Boats name="Bayliner 175 Bowrider"
                 desc="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."
                 icon_name="peace"
                 poster={require("./img2/bayliner.jpg")}/>
          <Boats name="Fairline Targa 47"
                 desc="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
                 icon_name="peace"
                 poster={require("./img2/fairline.jpg")}/>
      </ScrollView>
  );
}

export default App;




