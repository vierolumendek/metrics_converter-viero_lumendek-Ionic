import { IonSelectOption } from '@ionic/react'

const SelectSuhu: React.FC = () => (
    <>
        <IonSelectOption value="celcius">Celcius(C)</IonSelectOption>
        <IonSelectOption value="fahrenheit">Fahrenheit(F)</IonSelectOption>
        <IonSelectOption value="kelvin">Kelvin(K)</IonSelectOption>
    </>
)

export default SelectSuhu; 