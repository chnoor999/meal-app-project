import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

const useAsyncStorage = (key,intialValue) => {
  const [data, setData] = useState(intialValue);

  useEffect(() => {
    (async () => {
      const res = await AsyncStorage.getItem(key);
      if (res != null) {
        setData(JSON.parse(res));
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    })();
  }, [data]);

  return [data, setData];
};

export default useAsyncStorage;
