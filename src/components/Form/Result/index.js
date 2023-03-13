import {Text, View} from 'react-native';
import styles from './style';

export default function Result(){
    return(
        <View style={styles.resuldadoMedia}> 
            <Text style={styles.info}> Sua média foi: </Text>
            <Text style={styles.media}> 8.0 </Text>
            <Text style={[styles.msgResutado, styles.corAprovado]}> Mensagem </Text>
        </View>
    );

}