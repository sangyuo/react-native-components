import {StyleSheet} from 'react-native';
import {fontSize, moderateScale} from '../utils';

const textColorStyle = StyleSheet.create({
  'text-amber-100': {color: 'rgb(254,243,199)'},
  'text-amber-200': {color: 'rgb(253,230,138)'},
  'text-amber-300': {color: 'rgb(252,211,77)'},
  'text-amber-400': {color: 'rgb(251,191,36)'},
  'text-amber-50': {color: 'rgb(255,251,235)'},
  'text-amber-500': {color: 'rgb(245,158,11)'},
  'text-amber-600': {color: 'rgb(217,119,6)'},
  'text-amber-700': {color: 'rgb(180,83,9)'},
  'text-amber-800': {color: 'rgb(146,64,14)'},
  'text-amber-900': {color: 'rgb(120,53,15)'},
  'text-amber-950': {color: 'rgb(69,26,3)'},
  'text-black': {color: 'rgb(0,0,0)'},
  'text-blue-100': {color: 'rgb(219,234,254)'},
  'text-blue-200': {color: 'rgb(191,219,254)'},
  'text-blue-300': {color: 'rgb(147,197,253)'},
  'text-blue-400': {color: 'rgb(96,165,250)'},
  'text-blue-50': {color: 'rgb(239,246,255)'},
  'text-blue-500': {color: 'rgb(59,130,246)'},
  'text-blue-600': {color: 'rgb(37,99,235)'},
  'text-blue-700': {color: 'rgb(29,78,216)'},
  'text-blue-800': {color: 'rgb(30,64,175)'},
  'text-blue-900': {color: 'rgb(30,58,138)'},
  'text-blue-950': {color: 'rgb(23,37,84)'},
  'text-cyan-100': {color: 'rgb(207,250,254)'},
  'text-cyan-200': {color: 'rgb(165,243,252)'},
  'text-cyan-300': {color: 'rgb(103,232,249)'},
  'text-cyan-400': {color: 'rgb(34,211,238)'},
  'text-cyan-50': {color: 'rgb(236,254,255)'},
  'text-cyan-500': {color: 'rgb(6,182,212)'},
  'text-cyan-600': {color: 'rgb(8,145,178)'},
  'text-cyan-700': {color: 'rgb(14,116,144)'},
  'text-cyan-800': {color: 'rgb(21,94,117)'},
  'text-cyan-900': {color: 'rgb(22,78,99)'},
  'text-cyan-950': {color: 'rgb(8,51,68)'},
  'text-emerald-100': {color: 'rgb(209,250,229)'},
  'text-emerald-200': {color: 'rgb(167,243,208)'},
  'text-emerald-300': {color: 'rgb(110,231,183)'},
  'text-emerald-400': {color: 'rgb(52,211,153)'},
  'text-emerald-50': {color: 'rgb(236,253,245)'},
  'text-emerald-500': {color: 'rgb(16,185,129)'},
  'text-emerald-600': {color: 'rgb(5,150,105)'},
  'text-emerald-700': {color: 'rgb(4,120,87)'},
  'text-emerald-800': {color: 'rgb(6,95,70)'},
  'text-emerald-900': {color: 'rgb(6,78,59)'},
  'text-emerald-950': {color: 'rgb(2,44,34)'},
  'text-fuchsia-100': {color: 'rgb(250,232,255)'},
  'text-fuchsia-200': {color: 'rgb(245,208,254)'},
  'text-fuchsia-300': {color: 'rgb(240,171,252)'},
  'text-fuchsia-400': {color: 'rgb(232,121,249)'},
  'text-fuchsia-50': {color: 'rgb(253,244,255)'},
  'text-fuchsia-500': {color: 'rgb(217,70,239)'},
  'text-fuchsia-600': {color: 'rgb(192,38,211)'},
  'text-fuchsia-700': {color: 'rgb(162,28,175)'},
  'text-fuchsia-800': {color: 'rgb(134,25,143)'},
  'text-fuchsia-900': {color: 'rgb(112,26,117)'},
  'text-fuchsia-950': {color: 'rgb(74,4,78)'},
  'text-gray-100': {color: 'rgb(243,244,246)'},
  'text-gray-200': {color: 'rgb(229,231,235)'},
  'text-gray-300': {color: 'rgb(209,213,219)'},
  'text-gray-400': {color: 'rgb(156,163,175)'},
  'text-gray-50': {color: 'rgb(249,250,251)'},
  'text-gray-500': {color: 'rgb(107,114,128)'},
  'text-gray-600': {color: 'rgb(75,85,99)'},
  'text-gray-700': {color: 'rgb(55,65,81)'},
  'text-gray-800': {color: 'rgb(31,41,55)'},
  'text-gray-900': {color: 'rgb(17,24,39)'},
  'text-gray-950': {color: 'rgb(3,7,18)'},
  'text-green-100': {color: 'rgb(220,252,231)'},
  'text-green-200': {color: 'rgb(187,247,208)'},
  'text-green-300': {color: 'rgb(134,239,172)'},
  'text-green-400': {color: 'rgb(74,222,128)'},
  'text-green-50': {color: 'rgb(240,253,244)'},
  'text-green-500': {color: 'rgb(34,197,94)'},
  'text-green-600': {color: 'rgb(22,163,74)'},
  'text-green-700': {color: 'rgb(21,128,61)'},
  'text-green-800': {color: 'rgb(22,101,52)'},
  'text-green-900': {color: 'rgb(20,83,45)'},
  'text-green-950': {color: 'rgb(5,46,22)'},
  'text-indigo-100': {color: 'rgb(224,231,255)'},
  'text-indigo-200': {color: 'rgb(199,210,254)'},
  'text-indigo-300': {color: 'rgb(165,180,252)'},
  'text-indigo-400': {color: 'rgb(129,140,248)'},
  'text-indigo-50': {color: 'rgb(238,242,255)'},
  'text-indigo-500': {color: 'rgb(99,102,241)'},
  'text-indigo-600': {color: 'rgb(79,70,229)'},
  'text-indigo-700': {color: 'rgb(67,56,202)'},
  'text-indigo-800': {color: 'rgb(55,48,163)'},
  'text-indigo-900': {color: 'rgb(49,46,129)'},
  'text-indigo-950': {color: 'rgb(30,27,75)'},
  'text-lime-100': {color: 'rgb(236,252,203)'},
  'text-lime-200': {color: 'rgb(217,249,157)'},
  'text-lime-300': {color: 'rgb(190,242,100)'},
  'text-lime-400': {color: 'rgb(163,230,53)'},
  'text-lime-50': {color: 'rgb(247,254,231)'},
  'text-lime-500': {color: 'rgb(132,204,22)'},
  'text-lime-600': {color: 'rgb(101,163,13)'},
  'text-lime-700': {color: 'rgb(77,124,15)'},
  'text-lime-800': {color: 'rgb(63,98,18)'},
  'text-lime-900': {color: 'rgb(54,83,20)'},
  'text-lime-950': {color: 'rgb(26,46,5)'},
  'text-neutral-100': {color: 'rgb(245,245,245)'},
  'text-neutral-200': {color: 'rgb(229,229,229)'},
  'text-neutral-300': {color: 'rgb(212,212,212)'},
  'text-neutral-400': {color: 'rgb(163,163,163)'},
  'text-neutral-50': {color: 'rgb(250,250,250)'},
  'text-neutral-500': {color: 'rgb(115,115,115)'},
  'text-neutral-600': {color: 'rgb(82,82,82)'},
  'text-neutral-700': {color: 'rgb(64,64,64)'},
  'text-neutral-800': {color: 'rgb(38,38,38)'},
  'text-neutral-900': {color: 'rgb(23,23,23)'},
  'text-neutral-950': {color: 'rgb(10,10,10)'},
  'text-orange-100': {color: 'rgb(255,237,213)'},
  'text-orange-200': {color: 'rgb(254,215,170)'},
  'text-orange-300': {color: 'rgb(253,186,116)'},
  'text-orange-400': {color: 'rgb(251,146,60)'},
  'text-orange-50': {color: 'rgb(255,247,237)'},
  'text-orange-500': {color: 'rgb(249,115,22)'},
  'text-orange-600': {color: 'rgb(234,88,12)'},
  'text-orange-700': {color: 'rgb(194,65,12)'},
  'text-orange-800': {color: 'rgb(154,52,18)'},
  'text-orange-900': {color: 'rgb(124,45,18)'},
  'text-orange-950': {color: 'rgb(67,20,7)'},
  'text-over-light': {color: 'rgba(113, 114, 122, 0.17)'},
  'text-over-shadow': {color: 'rgba(0, 0, 0, 0.45)'},
  'text-pink-100': {color: 'rgb(252,231,243)'},
  'text-pink-200': {color: 'rgb(251,207,232)'},
  'text-pink-300': {color: 'rgb(249,168,212)'},
  'text-pink-400': {color: 'rgb(244,114,182)'},
  'text-pink-50': {color: 'rgb(253,242,248)'},
  'text-pink-500': {color: 'rgb(236,72,153)'},
  'text-pink-600': {color: 'rgb(219,39,119)'},
  'text-pink-700': {color: 'rgb(190,24,93)'},
  'text-pink-800': {color: 'rgb(157,23,77)'},
  'text-pink-900': {color: 'rgb(131,24,67)'},
  'text-pink-950': {color: 'rgb(80,7,36)'},
  'text-purple-100': {color: 'rgb(243,232,255)'},
  'text-purple-200': {color: 'rgb(233,213,255)'},
  'text-purple-300': {color: 'rgb(216,180,254)'},
  'text-purple-400': {color: 'rgb(192,132,252)'},
  'text-purple-50': {color: 'rgb(250,245,255)'},
  'text-purple-500': {color: 'rgb(168,85,247)'},
  'text-purple-600': {color: 'rgb(147,51,234)'},
  'text-purple-700': {color: 'rgb(126,34,206)'},
  'text-purple-800': {color: 'rgb(107,33,168)'},
  'text-purple-900': {color: 'rgb(88,28,135)'},
  'text-purple-950': {color: 'rgb(59,7,100)'},
  'text-red-100': {color: 'rgb(254,226,226)'},
  'text-red-200': {color: 'rgb(254,202,202)'},
  'text-red-300': {color: 'rgb(252,165,165)'},
  'text-red-400': {color: 'rgb(248,113,113)'},
  'text-red-50': {color: 'rgb(254,242,242)'},
  'text-red-500': {color: 'rgb(239,68,68)'},
  'text-red-600': {color: 'rgb(220,38,38)'},
  'text-red-700': {color: 'rgb(185,28,28)'},
  'text-red-800': {color: 'rgb(153,27,27)'},
  'text-red-900': {color: 'rgb(127,29,29)'},
  'text-red-950': {color: 'rgb(69,10,10)'},
  'text-rose-100': {color: 'rgb(255,228,230)'},
  'text-rose-200': {color: 'rgb(254,205,211)'},
  'text-rose-300': {color: 'rgb(253,164,175)'},
  'text-rose-400': {color: 'rgb(251,113,133)'},
  'text-rose-50': {color: 'rgb(255,241,242)'},
  'text-rose-500': {color: 'rgb(244,63,94)'},
  'text-rose-600': {color: 'rgb(225,29,72)'},
  'text-rose-700': {color: 'rgb(190,18,60)'},
  'text-rose-800': {color: 'rgb(159,18,57)'},
  'text-rose-900': {color: 'rgb(136,19,55)'},
  'text-rose-950': {color: 'rgb(76,5,25)'},
  'text-sky-100': {color: 'rgb(224,242,254)'},
  'text-sky-200': {color: 'rgb(186,230,253)'},
  'text-sky-300': {color: 'rgb(125,211,252)'},
  'text-sky-400': {color: 'rgb(56,189,248)'},
  'text-sky-50': {color: 'rgb(240,249,255)'},
  'text-sky-500': {color: 'rgb(14,165,233)'},
  'text-sky-600': {color: 'rgb(2,132,199)'},
  'text-sky-700': {color: 'rgb(3,105,161)'},
  'text-sky-800': {color: 'rgb(7,89,133)'},
  'text-sky-900': {color: 'rgb(12,74,110)'},
  'text-sky-950': {color: 'rgb(8,47,73)'},
  'text-slate-100': {color: 'rgb(241,245,249)'},
  'text-slate-200': {color: 'rgb(226,232,240)'},
  'text-slate-300': {color: 'rgb(203,213,225)'},
  'text-slate-400': {color: 'rgb(148,163,184)'},
  'text-slate-50': {color: 'rgb(248,250,252)'},
  'text-slate-500': {color: 'rgb(100,116,139)'},
  'text-slate-600': {color: 'rgb(71,85,105)'},
  'text-slate-700': {color: 'rgb(51,65,85)'},
  'text-slate-800': {color: 'rgb(30,41,59)'},
  'text-slate-900': {color: 'rgb(15,23,42)'},
  'text-slate-950': {color: 'rgb(2,6,23)'},
  'text-stone-100': {color: 'rgb(245,245,244)'},
  'text-stone-200': {color: 'rgb(231,229,228)'},
  'text-stone-300': {color: 'rgb(214,211,209)'},
  'text-stone-400': {color: 'rgb(168,162,158)'},
  'text-stone-50': {color: 'rgb(250,250,249)'},
  'text-stone-500': {color: 'rgb(120,113,108)'},
  'text-stone-600': {color: 'rgb(87,83,78)'},
  'text-stone-700': {color: 'rgb(68,64,60)'},
  'text-stone-800': {color: 'rgb(41,37,36)'},
  'text-stone-900': {color: 'rgb(28,25,23)'},
  'text-stone-950': {color: 'rgb(12,10,9)'},
  'text-teal-100': {color: 'rgb(204,251,241)'},
  'text-teal-200': {color: 'rgb(153,246,228)'},
  'text-teal-300': {color: 'rgb(94,234,212)'},
  'text-teal-400': {color: 'rgb(45,212,191)'},
  'text-teal-50': {color: 'rgb(240,253,250)'},
  'text-teal-500': {color: 'rgb(20,184,166)'},
  'text-teal-600': {color: 'rgb(13,148,136)'},
  'text-teal-700': {color: 'rgb(15,118,110)'},
  'text-teal-800': {color: 'rgb(17,94,89)'},
  'text-teal-900': {color: 'rgb(19,78,74)'},
  'text-teal-950': {color: 'rgb(4,47,46)'},
  'text-transparent': {color: 'transparent'},
  'text-violet-100': {color: 'rgb(237,233,254)'},
  'text-violet-200': {color: 'rgb(221,214,254)'},
  'text-violet-300': {color: 'rgb(196,181,253)'},
  'text-violet-400': {color: 'rgb(167,139,250)'},
  'text-violet-50': {color: 'rgb(245,243,255)'},
  'text-violet-500': {color: 'rgb(139,92,246)'},
  'text-violet-600': {color: 'rgb(124,58,237)'},
  'text-violet-700': {color: 'rgb(109,40,217)'},
  'text-violet-800': {color: 'rgb(91,33,182)'},
  'text-violet-900': {color: 'rgb(76,29,149)'},
  'text-violet-950': {color: 'rgb(46,16,101)'},
  'text-white': {color: 'rgb(255,255,255)'},
  'text-yellow-100': {color: 'rgb(254,249,195)'},
  'text-yellow-200': {color: 'rgb(254,240,138)'},
  'text-yellow-300': {color: 'rgb(253,224,71)'},
  'text-yellow-400': {color: 'rgb(250,204,21)'},
  'text-yellow-50': {color: 'rgb(254,252,232)'},
  'text-yellow-500': {color: 'rgb(234,179,8)'},
  'text-yellow-600': {color: 'rgb(202,138,4)'},
  'text-yellow-700': {color: 'rgb(161,98,7)'},
  'text-yellow-800': {color: 'rgb(133,77,14)'},
  'text-yellow-900': {color: 'rgb(113,63,18)'},
  'text-yellow-950': {color: 'rgb(66,32,6)'},
  'text-zinc-100': {color: 'rgb(244,244,245)'},
  'text-zinc-200': {color: 'rgb(228,228,231)'},
  'text-zinc-300': {color: 'rgb(212,212,216)'},
  'text-zinc-400': {color: 'rgb(161,161,170)'},
  'text-zinc-50': {color: 'rgb(250,250,250)'},
  'text-zinc-500': {color: 'rgb(113,113,122)'},
  'text-zinc-600': {color: 'rgb(82,82,91)'},
  'text-zinc-700': {color: 'rgb(63,63,70)'},
  'text-zinc-800': {color: 'rgb(39,39,42)'},
  'text-zinc-900': {color: 'rgb(24,24,27)'},
  'text-zinc-950': {color: 'rgb(9,9,11)'},
});

export const textFontSizeStyle = StyleSheet.create({
  'text-xs': {
    fontSize: fontSize(10),
    lineHeight: moderateScale(18),
  },
  'text-sm': {
    fontSize: fontSize(12),
    lineHeight: moderateScale(20),
  },
  'text-base': {
    fontSize: fontSize(14),
    lineHeight: moderateScale(22),
  },
  'text-md': {
    fontSize: fontSize(16),
    lineHeight: moderateScale(24),
  },
  'text-lg': {
    fontSize: fontSize(18),
    lineHeight: moderateScale(26),
  },
  'text-xl': {
    fontSize: fontSize(20),
    lineHeight: moderateScale(26),
  },
  'text-2xl': {
    fontSize: fontSize(24),
    lineHeight: moderateScale(32),
  },
  'text-3xl': {
    fontSize: fontSize(30),
    lineHeight: moderateScale(36),
  },
  'text-4xl': {
    fontSize: fontSize(36),
    lineHeight: moderateScale(40),
  },
  'text-5xl': {
    fontSize: fontSize(48),
  },
  'text-6xl': {
    fontSize: fontSize(60),
  },
  'text-7xl': {
    fontSize: fontSize(72),
  },
  'text-8xl': {
    fontSize: fontSize(96),
  },
  'text-9xl': {
    fontSize: fontSize(128),
  },
});

export const textFontSizeNoneScaleStyle = StyleSheet.create({
  'text-xs': {
    fontSize: 10,
    lineHeight: 18,
  },
  'text-sm': {
    fontSize: 12,
    lineHeight: 20,
  },
  'text-base': {
    fontSize: 14,
    lineHeight: 22,
  },
  'text-md': {
    fontSize: 16,
    lineHeight: 24,
  },
  'text-lg': {
    fontSize: 18,
    lineHeight: 26,
  },
  'text-xl': {
    fontSize: 20,
    lineHeight: 26,
  },
  'text-2xl': {
    fontSize: 24,
    lineHeight: 32,
  },
  'text-3xl': {
    fontSize: 30,
    lineHeight: 36,
  },
  'text-4xl': {
    fontSize: 36,
    lineHeight: 40,
  },
  'text-5xl': {
    fontSize: 48,
  },
  'text-6xl': {
    fontSize: 60,
  },
  'text-7xl': {
    fontSize: 72,
  },
  'text-8xl': {
    fontSize: 96,
  },
  'text-9xl': {
    fontSize: 128,
  },
});

const textFontStyle = StyleSheet.create({
  'text-center': {
    textAlign: 'center',
  },
  'text-left': {
    textAlign: 'left',
  },
  'text-right': {
    textAlign: 'right',
  },
  'text-auto': {
    textAlign: 'auto',
  },
  'text-justify': {
    textAlign: 'justify',
  },
  'font-thin': {
    fontWeight: '100',
  },
  'font-extraLight': {
    fontWeight: '200',
  },
  'font-light': {
    fontWeight: '300',
  },
  'font-normal': {
    fontWeight: '400',
  },
  'font-medium': {
    fontWeight: '500',
  },
  'font-semibold': {
    fontWeight: '600',
  },
  'font-bold': {
    fontWeight: '700',
  },
  'font-extrabold': {
    fontWeight: '800',
  },
  'font-black': {
    fontWeight: '900',
  },
});

export const textStyles = {
  ...textColorStyle,
  ...textFontSizeStyle,
  ...textFontStyle,
};
