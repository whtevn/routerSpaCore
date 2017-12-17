const Type = "Panel";

export const RENDER = `${Type} RENDER`;
export const Render = ( payload ) => {
  return {
    type: RENDER,
    payload
  }
}

export const GOTO = `${Type} GOTO`;
export const Goto = ( payload ) => {
  return {
    type: GOTO,
    payload
  }
}
