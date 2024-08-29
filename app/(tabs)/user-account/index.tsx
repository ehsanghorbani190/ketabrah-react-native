import ThemedText from '@/components/ThemedText';
import {useSelector} from 'react-redux';
import {authUserSelector} from '@/core/state/slices/authSlice';
import LoginToContinuePage from '@/pages/LoginToContinuePage';
export default function UserAccountScreen() {
  const user = useSelector(authUserSelector);
  return user === null ? (
    <LoginToContinuePage />
  ) : (
    <ThemedText>TODO</ThemedText>
  );
}
