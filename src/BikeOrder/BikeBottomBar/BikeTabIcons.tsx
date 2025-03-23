
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export const iocns:any={
    Bike:(props:any)=>   <MaterialIcon name="pedal-bike" size={24} {...props}/>,
    Store:(props:any)=>   <Icon name="map" size={24}  {...props}/>,
    Cart:(props:any)=>   <Icon name="cart" size={24} {...props}/>,
    Profile:(props:any)=>   <Icon name="person" size={24} {...props}/>,
    History:(props:any)=>   <Icon name="document-text" size={24} {...props}/>,
}
