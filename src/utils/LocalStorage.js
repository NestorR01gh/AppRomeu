import AsyncStorage from '@react-native-async-storage/async-storage';


export class LocalStorage {
    static storeData = async (key, value) => {
        try {
            await AsyncStorage.setItem(key, value)
        } catch (e) {
            console.error(e);
        }
    }

    static getData = async (storeKey) => {
        try {
            const value = await AsyncStorage.getItem(storeKey)
            return value;
        } catch (e) {
            console.error(e);
        }
    }
}