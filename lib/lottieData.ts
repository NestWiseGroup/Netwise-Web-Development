// Curated, brand-tailored Lottie JSON animations for NestWise Group
// Formatted according to the official Bodymovin/Lottie specification

// 1. Dynamic Analytics & Yield Growth (for How We Work)
export const analyticsLottie = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 60,
  w: 200,
  h: 200,
  nm: "Analytics Growth",
  ddd: 0,
  assets: [],
  layers: [
    // Pulsing Gold Star / Diamond at Peak
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Peak Sparkle",
      sr: 1,
      ks: {
        o: {
          k: [
            { t: 0, s: [40] },
            { t: 30, s: [100] },
            { t: 60, s: [40] },
          ],
        },
        r: {
          k: [
            { t: 0, s: [0] },
            { t: 60, s: [180] },
          ],
        },
        p: { k: [160, 45, 0] },
        a: { k: [0, 0, 0] },
        s: {
          k: [
            { t: 0, s: [80, 80, 100] },
            { t: 30, s: [130, 130, 100] },
            { t: 60, s: [80, 80, 100] },
          ],
        },
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "sr",
              sy: 2,
              pt: { k: 4 },
              p: { k: [0, 0] },
              r: { k: 0 },
              or: { k: 12 },
              os: { k: 0 },
              ir: { k: 4 },
              is: { k: 0 },
            },
            {
              ty: "fl",
              c: { k: [0.72, 0.53, 0.04, 1] }, // Gold #B8860B
              o: { k: 100 },
            },
            {
              ty: "tr",
              p: { k: [0, 0] },
              a: { k: [0, 0] },
              s: { k: [100, 100] },
              r: { k: 0 },
              o: { k: 100 },
            },
          ],
        },
      ],
    },
    // Upward Trend Arrow Line
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Trend Line",
      sr: 1,
      ks: {
        o: { k: 100 },
        r: { k: 0 },
        p: { k: [0, 0, 0] },
        a: { k: [0, 0, 0] },
        s: { k: [100, 100, 100] },
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "sh",
              ks: {
                k: {
                  i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                  o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                  v: [[35, 140], [75, 110], [120, 80], [160, 45]],
                  c: false,
                },
              },
            },
            {
              ty: "st",
              c: { k: [0.83, 0.69, 0.22, 1] }, // Light Gold #D4AF37
              o: { k: 100 },
              w: { k: 4 },
              lc: 2,
              lj: 2,
            },
            {
              ty: "tr",
              p: { k: [0, 0] },
              a: { k: [0, 0] },
              s: { k: [100, 100] },
              r: { k: 0 },
              o: { k: 100 },
            },
          ],
        },
      ],
    },
    // Bar 3 (Tallest)
    {
      ddd: 0,
      ind: 3,
      ty: 4,
      nm: "Bar 3",
      sr: 1,
      ks: {
        o: { k: 100 },
        r: { k: 0 },
        p: { k: [145, 160, 0] },
        a: { k: [0, 0, 0] },
        s: {
          k: [
            { t: 0, s: [100, 90, 100] },
            { t: 30, s: [100, 105, 100] },
            { t: 60, s: [100, 90, 100] },
          ],
        },
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              p: { k: [0, -50] },
              s: { k: [22, 100] },
              r: { k: 6 },
            },
            {
              ty: "fl",
              c: { k: [0.12, 0.23, 0.54, 1] }, // Royal Blue #1E3A8A
              o: { k: 100 },
            },
            {
              ty: "tr",
              p: { k: [0, 0] },
              a: { k: [0, 0] },
              s: { k: [100, 100] },
              r: { k: 0 },
              o: { k: 100 },
            },
          ],
        },
      ],
    },
    // Bar 2 (Medium)
    {
      ddd: 0,
      ind: 4,
      ty: 4,
      nm: "Bar 2",
      sr: 1,
      ks: {
        o: { k: 90 },
        r: { k: 0 },
        p: { k: [105, 160, 0] },
        a: { k: [0, 0, 0] },
        s: {
          k: [
            { t: 0, s: [100, 95, 100] },
            { t: 25, s: [100, 85, 100] },
            { t: 60, s: [100, 95, 100] },
          ],
        },
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              p: { k: [0, -35] },
              s: { k: [22, 70] },
              r: { k: 6 },
            },
            {
              ty: "fl",
              c: { k: [0.72, 0.53, 0.04, 1] }, // Gold #B8860B
              o: { k: 90 },
            },
            {
              ty: "tr",
              p: { k: [0, 0] },
              a: { k: [0, 0] },
              s: { k: [100, 100] },
              r: { k: 0 },
              o: { k: 100 },
            },
          ],
        },
      ],
    },
    // Bar 1 (Base)
    {
      ddd: 0,
      ind: 5,
      ty: 4,
      nm: "Bar 1",
      sr: 1,
      ks: {
        o: { k: 80 },
        r: { k: 0 },
        p: { k: [65, 160, 0] },
        a: { k: [0, 0, 0] },
        s: {
          k: [
            { t: 0, s: [100, 85, 100] },
            { t: 35, s: [100, 100, 100] },
            { t: 60, s: [100, 85, 100] },
          ],
        },
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              p: { k: [0, -22] },
              s: { k: [22, 45] },
              r: { k: 6 },
            },
            {
              ty: "fl",
              c: { k: [0.12, 0.23, 0.54, 0.7] },
              o: { k: 80 },
            },
            {
              ty: "tr",
              p: { k: [0, 0] },
              a: { k: [0, 0] },
              s: { k: [100, 100] },
              r: { k: 0 },
              o: { k: 100 },
            },
          ],
        },
      ],
    },
  ],
};

// 2. Smart IoT Shield & Security Telemetry (for About / Security)
export const securityShieldLottie = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 60,
  w: 200,
  h: 200,
  nm: "Security Shield",
  ddd: 0,
  assets: [],
  layers: [
    // Outer Pulsing Halo
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Shield Pulse Halo",
      sr: 1,
      ks: {
        o: {
          k: [
            { t: 0, s: [20] },
            { t: 30, s: [60] },
            { t: 60, s: [20] },
          ],
        },
        r: { k: 0 },
        p: { k: [100, 100, 0] },
        a: { k: [0, 0, 0] },
        s: {
          k: [
            { t: 0, s: [90, 90, 100] },
            { t: 30, s: [115, 115, 100] },
            { t: 60, s: [90, 90, 100] },
          ],
        },
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "el",
              p: { k: [0, 0] },
              s: { k: [130, 130] },
            },
            {
              ty: "st",
              c: { k: [0.72, 0.53, 0.04, 1] },
              o: { k: 100 },
              w: { k: 3 },
            },
            {
              ty: "tr",
              p: { k: [0, 0] },
              a: { k: [0, 0] },
              s: { k: [100, 100] },
              r: { k: 0 },
              o: { k: 100 },
            },
          ],
        },
      ],
    },
    // Center Shield Shape
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Main Shield",
      sr: 1,
      ks: {
        o: { k: 100 },
        r: { k: 0 },
        p: { k: [100, 100, 0] },
        a: { k: [0, 0, 0] },
        s: {
          k: [
            { t: 0, s: [100, 100, 100] },
            { t: 30, s: [104, 104, 100] },
            { t: 60, s: [100, 100, 100] },
          ],
        },
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "sh",
              ks: {
                k: {
                  i: [[0, 0], [15, 0], [0, 20], [0, 0], [-15, 0]],
                  o: [[-15, 0], [0, 20], [0, 0], [0, -20], [0, 0]],
                  v: [[0, -45], [40, -35], [35, 15], [0, 48], [-35, 15]],
                  c: true,
                },
              },
            },
            {
              ty: "fl",
              c: { k: [0.12, 0.23, 0.54, 1] }, // Royal Blue
              o: { k: 100 },
            },
            {
              ty: "st",
              c: { k: [0.83, 0.69, 0.22, 1] }, // Gold border
              o: { k: 100 },
              w: { k: 4 },
            },
            {
              ty: "tr",
              p: { k: [0, 0] },
              a: { k: [0, 0] },
              s: { k: [100, 100] },
              r: { k: 0 },
              o: { k: 100 },
            },
          ],
        },
      ],
    },
    // Center Gold Checkmark
    {
      ddd: 0,
      ind: 3,
      ty: 4,
      nm: "Center Checkmark",
      sr: 1,
      ks: {
        o: { k: 100 },
        r: { k: 0 },
        p: { k: [98, 98, 0] },
        a: { k: [0, 0, 0] },
        s: {
          k: [
            { t: 0, s: [95, 95, 100] },
            { t: 30, s: [110, 110, 100] },
            { t: 60, s: [95, 95, 100] },
          ],
        },
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "sh",
              ks: {
                k: {
                  i: [[0, 0], [0, 0], [0, 0]],
                  o: [[0, 0], [0, 0], [0, 0]],
                  v: [[-12, -2], [-3, 8], [15, -10]],
                  c: false,
                },
              },
            },
            {
              ty: "st",
              c: { k: [0.99, 0.98, 0.96, 1] }, // Clean Ivory
              o: { k: 100 },
              w: { k: 5 },
              lc: 2,
              lj: 2,
            },
            {
              ty: "tr",
              p: { k: [0, 0] },
              a: { k: [0, 0] },
              s: { k: [100, 100] },
              r: { k: 0 },
              o: { k: 100 },
            },
          ],
        },
      ],
    },
  ],
};

// 3. Concierge & Rapid Response Radar (for FAQ page)
export const conciergeRadarLottie = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 60,
  w: 200,
  h: 200,
  nm: "Concierge Radar",
  ddd: 0,
  assets: [],
  layers: [
    // Pulse Ring 2
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Outer Ring",
      sr: 1,
      ks: {
        o: {
          k: [
            { t: 0, s: [0] },
            { t: 30, s: [60] },
            { t: 60, s: [0] },
          ],
        },
        r: { k: 0 },
        p: { k: [100, 100, 0] },
        a: { k: [0, 0, 0] },
        s: {
          k: [
            { t: 0, s: [50, 50, 100] },
            { t: 60, s: [140, 140, 100] },
          ],
        },
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "el",
              p: { k: [0, 0] },
              s: { k: [100, 100] },
            },
            {
              ty: "st",
              c: { k: [0.72, 0.53, 0.04, 1] },
              o: { k: 100 },
              w: { k: 2 },
            },
            {
              ty: "tr",
              p: { k: [0, 0] },
              a: { k: [0, 0] },
              s: { k: [100, 100] },
              r: { k: 0 },
              o: { k: 100 },
            },
          ],
        },
      ],
    },
    // Center Dispatch Bubble
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Core Disc",
      sr: 1,
      ks: {
        o: { k: 100 },
        r: { k: 0 },
        p: { k: [100, 100, 0] },
        a: { k: [0, 0, 0] },
        s: {
          k: [
            { t: 0, s: [95, 95, 100] },
            { t: 30, s: [105, 105, 100] },
            { t: 60, s: [95, 95, 100] },
          ],
        },
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "el",
              p: { k: [0, 0] },
              s: { k: [70, 70] },
            },
            {
              ty: "fl",
              c: { k: [0.12, 0.23, 0.54, 1] }, // Royal Blue
              o: { k: 100 },
            },
            {
              ty: "st",
              c: { k: [0.83, 0.69, 0.22, 1] },
              o: { k: 100 },
              w: { k: 3 },
            },
            {
              ty: "tr",
              p: { k: [0, 0] },
              a: { k: [0, 0] },
              s: { k: [100, 100] },
              r: { k: 0 },
              o: { k: 100 },
            },
          ],
        },
      ],
    },
    // Floating Rotating Dots
    {
      ddd: 0,
      ind: 3,
      ty: 4,
      nm: "Dot 1",
      sr: 1,
      ks: {
        o: { k: 100 },
        r: {
          k: [
            { t: 0, s: [0] },
            { t: 60, s: [360] },
          ],
        },
        p: { k: [100, 100, 0] },
        a: { k: [0, 0, 0] },
        s: { k: [100, 100, 100] },
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "el",
              p: { k: [0, -45] },
              s: { k: [10, 10] },
            },
            {
              ty: "fl",
              c: { k: [0.72, 0.53, 0.04, 1] },
              o: { k: 100 },
            },
            {
              ty: "tr",
              p: { k: [0, 0] },
              a: { k: [0, 0] },
              s: { k: [100, 100] },
              r: { k: 0 },
              o: { k: 100 },
            },
          ],
        },
      ],
    },
  ],
};

// 4. Five-Star Luxury Crown / Superhost Seal (for About page)
export const superhostCrownLottie = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 60,
  w: 200,
  h: 200,
  nm: "Superhost Crown",
  ddd: 0,
  assets: [],
  layers: [
    // Pulsing Star 1
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Center Star",
      sr: 1,
      ks: {
        o: { k: 100 },
        r: {
          k: [
            { t: 0, s: [0] },
            { t: 60, s: [180] },
          ],
        },
        p: { k: [100, 75, 0] },
        a: { k: [0, 0, 0] },
        s: {
          k: [
            { t: 0, s: [90, 90, 100] },
            { t: 30, s: [125, 125, 100] },
            { t: 60, s: [90, 90, 100] },
          ],
        },
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "sr",
              sy: 1,
              pt: { k: 5 },
              p: { k: [0, 0] },
              r: { k: 0 },
              or: { k: 22 },
              os: { k: 0 },
              ir: { k: 10 },
              is: { k: 0 },
            },
            {
              ty: "fl",
              c: { k: [0.83, 0.69, 0.22, 1] }, // Bright Gold
              o: { k: 100 },
            },
            {
              ty: "tr",
              p: { k: [0, 0] },
              a: { k: [0, 0] },
              s: { k: [100, 100] },
              r: { k: 0 },
              o: { k: 100 },
            },
          ],
        },
      ],
    },
    // Laurel Leaves / Crown Base
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Crown Base Arc",
      sr: 1,
      ks: {
        o: { k: 100 },
        r: { k: 0 },
        p: { k: [100, 125, 0] },
        a: { k: [0, 0, 0] },
        s: {
          k: [
            { t: 0, s: [100, 100, 100] },
            { t: 30, s: [106, 106, 100] },
            { t: 60, s: [100, 100, 100] },
          ],
        },
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "sh",
              ks: {
                k: {
                  i: [[0, 0], [0, 15], [0, 0]],
                  o: [[0, 15], [0, 0], [0, 0]],
                  v: [[-45, -15], [0, 15], [45, -15]],
                  c: false,
                },
              },
            },
            {
              ty: "st",
              c: { k: [0.12, 0.23, 0.54, 1] }, // Navy
              o: { k: 100 },
              w: { k: 5 },
              lc: 2,
            },
            {
              ty: "tr",
              p: { k: [0, 0] },
              a: { k: [0, 0] },
              s: { k: [100, 100] },
              r: { k: 0 },
              o: { k: 100 },
            },
          ],
        },
      ],
    },
  ],
};
