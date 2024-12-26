type FontPropsType = {
    weight?: number
    lineHeight?: number
    Fmax?: number
    Fmin?: number
}

export const font = ({weight, lineHeight, Fmax, Fmin}: FontPropsType) => `
font-weight: ${weight};
line-height: ${lineHeight || 1.2};
font-size: clamp(${Fmin}px,  calc( (100vw - 360px)/(1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px ), ${Fmax}px);
`