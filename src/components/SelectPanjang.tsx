import { IonSelectOption } from '@ionic/react'

const SelectPanjang: React.FC = () => (
    <>
        <IonSelectOption value="meter">Meter(m)</IonSelectOption>
        <IonSelectOption value="kilometer">Kilometer(km)</IonSelectOption>
        <IonSelectOption value="sentimeter">Sentimeter(cm)</IonSelectOption>
    </>
)

export default SelectPanjang; 