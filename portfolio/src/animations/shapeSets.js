// One cluster per project tab. w/h are % of the cluster; spin is full turns per scroll
// through the list (negative = counter-clockwise, 0 = still).
export const shapeSets = {
  code: [
    { kind: "rect", w: 64, h: 44, spin: 1 },
    { kind: "rect", w: 40, h: 72, spin: -1 },
    { kind: "rect", w: 50, h: 50, spin: 0.5 },
    // { kind: "rect", w: 22, h: 22, spin: -2 },
  ],
  art: [
    { kind: "triangle", w: 76, h: 66, spin: 1 },
    { kind: "triangle", w: 56, h: 50, spin: -1.5 },
    { kind: "circle", w: 56, h: 56, spin: 0 },
    // { kind: "triangle", w: 24, h: 21, spin: 2 },
  ],
};
