// MyPartial Type here loops over the type all the individual keys 
// using keyof in T, we use an intermediate type PartialType

type MyPartial<T> = {
  // ? for optional type
  [PartialType in keyof T]? : T[PartialType];
}


type T = {
  a: string  
  b: number  
  c: boolean
}
