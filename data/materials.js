/* Material take-off data. Regenerated 2026-08-04 with the D_SE wall re-laid to the
   architect's drawn extent (WD300 South / WD215), so red is 5,792 not 5,964.
   Recipe is PER 47mm brick. Each 215x65x47 brick is sliced (losing a 3mm kerf)
   into TWO 22mm slips, so: bricks_to_make = equivalent-whole-slips / 2, and
   material = bricks_to_make x recipe. Equivalent-whole-slip = whole + half/2.
   HALF RULE: a slip counts as a half when its cut face AREA is <= 7,150 mm^2,
   applied to the +/-5mm grouped type schedule (brick_types.json area_per) - NOT a
   bounding-box test on 107.5 x 65, which is what earlier notes said and which does
   not reproduce these figures. Red is split 10/40/50 across B2 / R-Y101-3 / D1 by
   largest remainder. B2 is supplied by Wuhan -> shown for quantities but no material
   calc. Red = B2 + R-Y101-3 + D1; Black = B-3. */
window.DATA_materials = {
  brick_mm: 47, slip_mm: 22, kerf_mm: 3, surplus: 0.15,
  mats: ["Sand", "Lime", "Additives", "O", "RY101", "B"],
  rows: [
    { id: "B2",       colour: "red",   pct: 10,  whole: 549,  half: 32,  equiv: 565,    wuhan: true },
    { id: "R-Y101-3", colour: "red",   pct: 40,  whole: 2195, half: 130, equiv: 2260,
      recipe: { Sand: 1.009556, Lime: 0.135193, Additives: 0.201382, RY101: 0.036637 } },
    { id: "D1",       colour: "red",   pct: 50,  whole: 2743, half: 162, equiv: 2824,
      recipe: { Sand: 1.007271, Lime: 0.134887, Additives: 0.200927, O: 0.029064, RY101: 0.009766, B: 0.000488 } },
    { id: "B-3",      colour: "black", pct: 100, whole: 1230, half: 503, equiv: 1481.5,
      recipe: { Sand: 1.009556, Lime: 0.135193, Additives: 0.201382, B: 0.036637 } }
  ]
};
