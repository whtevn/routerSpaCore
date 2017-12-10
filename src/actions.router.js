const Type = "Panel";

export const RENDER = `${Type} RENDER`;
export const Render = ( payload ) => {
  return {
    type: RENDER,
    payload
  }
}
