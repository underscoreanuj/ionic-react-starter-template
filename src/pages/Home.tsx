import { 
  IonContent,
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonList,
  IonItem,
  IonCheckbox,
  IonLabel,
  IonNote,
  IonBadge,
  IonFab,
  IonFabButton,
  IonIcon
} from '@ionic/react';
import React from 'react';
import { add } from 'ionicons/icons';
import { RouteComponentProps } from 'react-router';

const Home: React.FC<RouteComponentProps> = (props) => {
  return (
    <IonPage>
      <IonToolbar>
        <IonTitle> </IonTitle>
      </IonToolbar>
      <IonContent className="ion-padding">
        React - Ionic

        <IonList>
          <IonItem>
            <IonCheckbox slot="start" />
            <IonLabel>
              <h1>App Idea</h1>
              <IonNote>Make Native Cross-platform Apps</IonNote>
            </IonLabel>
            <IonBadge color="success" slot="end">
              5 Days
            </IonBadge>
          </IonItem>
        </IonList>

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() => props.history.push('/new')}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>

      </IonContent>
    </IonPage>
  );
};

export default Home;