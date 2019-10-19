import React from 'react';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar

} from '@ionic/react';

const NewItem: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                <IonTitle>New Item</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent></IonContent>
        </IonPage>
    );
};

export default NewItem;
