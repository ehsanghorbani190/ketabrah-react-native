export default function usernameValidator(username: string) {
  return (
    /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(username) ||
    /^[0-9]{11}$/.test(username)
  );
}
