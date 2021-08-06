import { IonButton, IonCard, IonContent, IonInput, IonItem, IonLabel } from '@ionic/react';
import React, { useContext, useState } from 'react';
import CuestionaryContext from '../context/CuestionaryContext';


const DetalleCuestionario:React.FC = () => {
    const [nombre, setNombre] = useState(''); 
    const cuestionary = useContext(CuestionaryContext); 
    const handleSiguiente = () => {
        cuestionary.setCuestionario({
            id: 1, 
            nombre: nombre,
            preguntas: []
        })
    }

    
    
    return(
        <IonContent>
            <IonCard>
                <IonLabel> Nombre del cuestionario </IonLabel>
                <IonInput onIonChange={(e) => setNombre(e.detail.value!)} />
                <IonItem routerLink="/cuestionario/pregunta/1">
                    <IonButton onClick={handleSiguiente} > Siguiente </IonButton>
                </IonItem>
            </IonCard>
            <IonCard>
                {cuestionary.cuestionario.nombre}
            </IonCard>
        </IonContent>
    )
}

export default DetalleCuestionario; 