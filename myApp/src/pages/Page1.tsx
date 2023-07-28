import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonButton, IonPopover, IonList, IonItem } from '@ionic/react';
import './Home.css';

const Page1: React.FC = () => {
  const [showUserPopover, setShowUserPopover] = React.useState<{
    open: boolean;
    event: Event | undefined;
  }>({
    open: false,
    event: undefined
  });
  const [
    popoverRef,
    setPopoverRef
  ] = React.useState<HTMLIonPopoverElement | null>(null);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Page 1</IonTitle>
        </IonToolbar>
      </IonHeader>  
        <IonContent>
        <IonCard>
          <IonButton
            onClick={(e) =>
              setShowUserPopover({ open: true, event: e.nativeEvent })
            }
          >
            Click here
          </IonButton>
          <IonPopover
            ref={(ref) => setPopoverRef(ref)}
            isOpen={showUserPopover.open}
            event={showUserPopover.event}
            onDidDismiss={(e) =>
              setShowUserPopover({ open: false, event: undefined })
            }
          >
            <IonList>
              <IonItem>Option 1</IonItem>
              <IonItem>Option 2</IonItem>
              <IonItem>
                Option
                1400000000000000000000000000000000000
              </IonItem>
            </IonList>
          </IonPopover>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Page1;
