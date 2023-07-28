import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton routerLink='/page1'>Popover with button</IonButton>
        <IonButton routerLink='/page2'>IonSelect with popover interface</IonButton>
        <IonButton routerLink='/page3'>Nested IonSelect with popover interface</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
