import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";
import { CleverTap } from "@ionic-native/clevertap";
import { Component } from "react";

export class Home extends Component {
  constructor(props: any) {
    super(props);
    CleverTap.setDebugLevel(3);
    CleverTap.createNotificationChannel(
      "testkk123",
      "KK Notification",
      "KK Notification Test",
      5,
      true
    );
    CleverTap.onUserLogin({
      Name: "Test 38",
      Identity: "test38",
      Email: "test38@test.com",
      Phone: "+91123456789",
      Gender: "M",
      "MSG-email": true,
      "MSG-push": true,
      "MSG-sms": true,
      "MSG-whatsapp": true,
    });
  }
  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Blank</IonTitle>
            </IonToolbar>
          </IonHeader>
          <ExploreContainer />
        </IonContent>
      </IonPage>
    );
  }
}

export default Home;
