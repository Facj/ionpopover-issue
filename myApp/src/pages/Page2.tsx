import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonSelect, IonSelectOption, IonItem, IonCard, IonLabel } from '@ionic/react';
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


const Page2: React.FC = () => {
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
        name: "Parameter 1",
        value: "mode-3",
        options: [
          { name: "Disabled", value: "mode-1" },
          { name: "Always enabled", value: "mode-2" },
          { name: "Sometimes enabled", value: "mode-3" }
        ]
      },
      {
        name: "Parameter 2",
        value: "3",
        options: [
          { name: "Option 1 ", value: "0" },
          { name: "Option 2 ", value: "1" },
          { name: "Option 3 ", value: "2" },
          { name: "Option 140000000000000000", value: "3" }
        ]
      }
    ];

    Parameters.forEach((param: Parameter, index: number) => {
      append(param);
    });
  }, [append]);

  const renderFormField = (field: any, index: number) => {
    const { name, value, type, options } = field;

    return (
      <IonItem key={index}>
        <IonLabel>{name}</IonLabel>
        <IonSelect
          value={value}
          interface="popover"
          //interfaceOptions={{size: "cover"}}
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
      </IonItem>
    );
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Page 2</IonTitle>
        </IonToolbar>
      </IonHeader>
        <IonContent>
        <IonCard>
          <form onSubmit={handleSubmit(onSubmit)}>
            {fields.map((field, index) => (
              <div key={index}>{renderFormField(field, index)}</div>
            ))}

            <div className="ion-padding">
              <IonButton type="submit" className="ion-no-margin submit-button">
                Submit
              </IonButton>
            </div>
          </form>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Page2;
