import {useSelector} from 'react-redux';
import {authUserSelector} from '@/core/state/slices/authSlice';
import LoginToContinuePage from '@/pages/LoginToContinuePage';
import ThemedText from '@/components/ThemedText';

export default function BookShelfScreen() {
  const user = useSelector(authUserSelector);
  return user === null ? (
    <LoginToContinuePage />
  ) : (
    <ThemedText>TODO</ThemedText>
  );
}
