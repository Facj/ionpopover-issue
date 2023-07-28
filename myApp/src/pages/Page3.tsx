import React from 'react';
import { IonContent, 
      IonHeader, 
      IonPage, 
      IonTitle, 
      IonToolbar,
      IonSelect,
      IonSelectOption,
      IonButton,
      IonGrid,
      IonRow,
      IonCol,
      IonLabel,
      IonCard,
      IonCardHeader,
      IonCardSubtitle,
      IonCardTitle,
      IonCardContent
    } from '@ionic/react';
import { useForm, useFieldArray } from "react-hook-form";
import './Home.css';

interface Parameter {
  name: string;
  value: string;
  options?: Option[];
}

interface Option {
  name: string;
  value: string;
}

const Page3: React.FC = () => {
  const { handleSubmit, register, control, reset, setValue } = useForm();

  const { fields, append } = useFieldArray({
    control: control, // control props comes from useForm (optional: if you are using FormContext)
    name: "parameters" // unique name for your Field Array
    // keyName: "id", default to "id", you can change the key name
  });

  const onSubmit = (data:any) => {
    alert(JSON.stringify(data));
    //reset(initialValues);
  };

  React.useEffect(() => {
    reset({ parameters: [] });

    const Parameters = [
      {
        name: "Parameter 3",
        value: "mode-3",
        options: [
          { name: "Disabled", value: "mode-1" },
          { name: "Always enabled", value: "mode-2" },
          { name: "Sometimes enabled", value: "mode-3" }
        ]
      },
      {
        name: "Parameter 4",
        value: "3",
        options: [
          { name: "Option 1 ", value: "0" },
          { name: "Option 2 ", value: "1" },
          { name: "Option 3 ", value: "2" },
          { name: "Option 14000000000000000000000", value: "3" }
        ]
      }
    ];

    Parameters.forEach((param: Parameter) => {
      append(param);
    });
  }, [append]);

  const renderFormField = (field: any, index: number) => {
    const { name, value, options } = field;

    return (
      <IonRow key={index}>
        <IonCol size="6">
          <IonLabel>{name}</IonLabel>
        </IonCol>
        <IonCol size="11" className='parameter-col'>
          <IonSelect
            value={value}
            interface="popover"
            //interfaceOptions={{size: "cover"}}}
            onIonChange={(selected) => {
              setValue(`parameters.${index}.value`, selected.detail.value);
            }}
            {...register(`parameters.${index}.value`, {
              required: true
            })}
          >
            {options?.map((option: any, optionIndex: number) => (
              <IonSelectOption key={optionIndex} value={option.value}>
                {option.name}
              </IonSelectOption>
            ))}
          </IonSelect>
        </IonCol>
      </IonRow>
    );
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Page 3</IonTitle>
        </IonToolbar>
      </IonHeader>
        <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCardHeader>
                <IonCardSubtitle>Form 2</IonCardSubtitle>
              </IonCardHeader>
              <form onSubmit={handleSubmit(onSubmit)}>
                <IonRow>
                  <IonCol size="12" class="device-col">
                    <IonCard className="device-card">
                      <IonCardHeader>
                        <IonCardTitle>Group 1</IonCardTitle>
                      </IonCardHeader>
                      <IonCardContent>
                        <IonGrid>
                          <IonRow>
                            <IonCol size="12" class="device-col">
                              <IonCard className="device-card  card-without-border">
                                <IonCardSubtitle>Group 2</IonCardSubtitle>
                                <IonCardContent>
                                  <IonGrid>
                                    {fields.map((field, index) => (
                                      <div key={index}>
                                        {renderFormField(field, index)}
                                      </div>
                                    ))}
                                  </IonGrid>
                                </IonCardContent>
                              </IonCard>
                            </IonCol>

                            <div className="ion-padding">
                              <IonButton
                                type="submit"
                                className="ion-no-margin submit-button"
                              >
                                Submit
                              </IonButton>
                            </div>
                          </IonRow>
                        </IonGrid>
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
                </IonRow>
              </form>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Page3;
