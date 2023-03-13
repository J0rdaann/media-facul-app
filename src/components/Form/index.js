import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import styles from './style';
import Result from './Result'

export default function Form(){
    return(
        <View style={styles.form}>
            <Text style={styles.label}>Média da Etapa 1</Text>
            <TextInput style={styles.imput}/>

            <Text style={styles.label}>Média da Etapa 2</Text>
            <TextInput style={styles.imput}/>

            <TouchableOpacity>
            <Text style={styles.button}>Calcular Média</Text>
            </TouchableOpacity>

            <Result />
        </View>
    );
}