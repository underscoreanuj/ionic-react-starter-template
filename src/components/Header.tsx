import React from 'react';
import { IonHeader, IonContent, IonToolbar, IonButtons, IonBackButton, IonTitle } from '@ionic/react';

export const Header: React.FC = () => (
  <>
    <IonHeader>
      <IonToolbar color="tertiary">
        <IonButtons slot="start">
          <IonBackButton defaultHref="/" />
        </IonButtons>
        <IonTitle>My Native App</IonTitle>
      </IonToolbar>

    </IonHeader>

    <IonContent>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">My Native App</IonTitle>
        </IonToolbar>
      </IonHeader>
    </IonContent>
  </>
);