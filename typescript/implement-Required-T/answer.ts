type MyRequired<T> = {
  // -? removes the optional modifier from the properties.
  [RequiredType in keyof T]-? : T[RequiredType]
}
  // your code here, please don't use Required<T> in your code
