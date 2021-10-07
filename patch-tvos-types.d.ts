import 'react-native/tvos-types.d';

declare module 'react-native' {
  interface PressableStateCallbackType {
    readonly focused: boolean;
  }
}
