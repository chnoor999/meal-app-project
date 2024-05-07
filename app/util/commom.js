import { widthPercentageToDP as wp} from "react-native-responsive-screen"

export const getColumnNum=()=>{
    if(wp(100)>=768){
        //tablet
        return 3
    }else{
        // mobile
        return 2
    }
}