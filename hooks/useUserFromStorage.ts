import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {store} from '@/core/state/store';
import {auth_setUser} from '@/core/state/slices/authSlice';

export default function useUserFromStorage() {
  const [loaded, setLoaded] = useState(false);
  AsyncStorage.getItem('user').then(user => {
    store.dispatch(auth_setUser(user));
    setLoaded(true);
  });
  return loaded;
}
