
export interface Sudoku {
    boxes:      Cell[][];
    rows:       Cell[][];
    cols:       Cell[][];
    
}

export interface Cell { // 9 times
    value:       number;
    id:          number;
    box:         number;
    row:         number;
    col:         number;
    pencils:     number[];
    highlighted: boolean;
    clicked:     boolean;
}

