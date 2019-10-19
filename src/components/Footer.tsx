import React from 'react';
import { IonContent, IonFooter, IonToolbar, IonTitle } from '@ionic/react';

export const Footer: React.FC = () => (
  <>
    <IonContent />

    <IonFooter>
      <IonToolbar color="tertiary">
        <IonTitle>underscoreanuj</IonTitle>
      </IonToolbar>
    </IonFooter>
  </>
);