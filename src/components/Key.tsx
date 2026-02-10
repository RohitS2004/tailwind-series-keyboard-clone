import type { IKey } from "../types";

const Key = (prop: IKey) => {
    return (
        <div></div>
    )
}

export default Key;

/**
 * TODO
 * The Key component will be a reusable component which will be used for regular key (A,B,C...) and for all the other keys like SHIFT, CTRL, SPACE
 * 
 * HP Compact 350 - Different types of keycaps
 * 1. Alphabetical (Regular)
 * 2. Numerics (Regular)
 * 3. Function (Half the height of regular keys)
 * 4. Spacebar (5 times the widht of regular keys)
 * 5. Enter 
 * 6. Left and Right Shift 
 * 7. Capslock
 * 8. Tab
 * 9. Backspace
 * 10. Arrow Left and Right (Regular)
 * 11. Arrow Up and Down
 * 
 * We will receive the props of type IKey
 */