import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Animated from "react-native-reanimated";

interface CachedImageProps {
  uri: string;
  style?: any;
}

export const CachedImage = ({ uri, style }: CachedImageProps) => {
  const [cachedSource, setCachedSource] = useState<any>(null);

  useEffect(() => {
    if (!uri) {
      console.error('No URI provided');
      return;
    }

    const getCacheImage = async () => {
      try {
        const cachedImageData = await AsyncStorage.getItem(uri);
        if (cachedImageData) {
          setCachedSource({ uri: cachedImageData });
        } else {
          const response = await fetch(uri);
          const imageBlob = await response.blob();

          const base64data = await new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(imageBlob);
            reader.onloadend = () => {
              if (reader.result) {
                resolve(reader.result as string);
              } else {
                reject("Failed to convert image to base64");
              }
            };
            reader.onerror = reject;
          });

          await AsyncStorage.setItem(uri, base64data);
          setCachedSource({ uri: base64data });
        }
      } catch (err) {
        console.error('Error fetching or caching image:', err);
        setCachedSource({ uri });
      }
    };

    getCacheImage();
  }, [uri]);


  if (!cachedSource) {
    return null;
  }

  return <Animated.Image source={cachedSource} style={style}/>;
};
