import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const MoodyTheme: CustomThemeConfig = {
  name: 'moody',
  properties: {
    // =~= Theme Properties =~=
    '--theme-font-family-base': `system-ui`,
    '--theme-font-family-heading': `system-ui`,
    '--theme-font-color-base': '0 0 0',
    '--theme-font-color-dark': '255 255 255',
    '--theme-rounded-base': '12px',
    '--theme-rounded-container': '8px',
    '--theme-border-base': '2px',
    // =~= Theme On-X Colors =~=
    '--on-primary': '255 255 255',
    '--on-secondary': '255 255 255',
    '--on-tertiary': '255 255 255',
    '--on-success': '0 0 0',
    '--on-warning': '0 0 0',
    '--on-error': '0 0 0',
    '--on-surface': '0 0 0',
    // =~= Theme Colors  =~=
    // primary | #B74EFE
    '--color-primary-50': '244 228 255', // #f4e4ff
    '--color-primary-100': '241 220 255', // #f1dcff
    '--color-primary-200': '237 211 255', // #edd3ff
    '--color-primary-300': '226 184 255', // #e2b8ff
    '--color-primary-400': '205 131 254', // #cd83fe
    '--color-primary-500': '183 78 254', // #B74EFE
    '--color-primary-600': '165 70 229', // #a546e5
    '--color-primary-700': '137 59 191', // #893bbf
    '--color-primary-800': '110 47 152', // #6e2f98
    '--color-primary-900': '90 38 124', // #5a267c
    // secondary | #181818
    '--color-secondary-50': '220 220 220', // #dcdcdc
    '--color-secondary-100': '209 209 209', // #d1d1d1
    '--color-secondary-200': '197 197 197', // #c5c5c5
    '--color-secondary-300': '163 163 163', // #a3a3a3
    '--color-secondary-400': '93 93 93', // #5d5d5d
    '--color-secondary-500': '24 24 24', // #181818
    '--color-secondary-600': '22 22 22', // #161616
    '--color-secondary-700': '18 18 18', // #121212
    '--color-secondary-800': '14 14 14', // #0e0e0e
    '--color-secondary-900': '12 12 12', // #0c0c0c
    // tertiary | #5D5D5D
    '--color-tertiary-50': '231 231 231', // #e7e7e7
    '--color-tertiary-100': '223 223 223', // #dfdfdf
    '--color-tertiary-200': '215 215 215', // #d7d7d7
    '--color-tertiary-300': '190 190 190', // #bebebe
    '--color-tertiary-400': '142 142 142', // #8e8e8e
    '--color-tertiary-500': '93 93 93', // #5D5D5D
    '--color-tertiary-600': '84 84 84', // #545454
    '--color-tertiary-700': '70 70 70', // #464646
    '--color-tertiary-800': '56 56 56', // #383838
    '--color-tertiary-900': '46 46 46', // #2e2e2e
    // success | #77d638
    '--color-success-50': '235 249 225', // #ebf9e1
    '--color-success-100': '228 247 215', // #e4f7d7
    '--color-success-200': '221 245 205', // #ddf5cd
    '--color-success-300': '201 239 175', // #c9efaf
    '--color-success-400': '160 226 116', // #a0e274
    '--color-success-500': '119 214 56', // #77d638
    '--color-success-600': '107 193 50', // #6bc132
    '--color-success-700': '89 161 42', // #59a12a
    '--color-success-800': '71 128 34', // #478022
    '--color-success-900': '58 105 27', // #3a691b
    // warning | #e6cd28
    '--color-warning-50': '251 248 223', // #fbf8df
    '--color-warning-100': '250 245 212', // #faf5d4
    '--color-warning-200': '249 243 201', // #f9f3c9
    '--color-warning-300': '245 235 169', // #f5eba9
    '--color-warning-400': '238 220 105', // #eedc69
    '--color-warning-500': '230 205 40', // #e6cd28
    '--color-warning-600': '207 185 36', // #cfb924
    '--color-warning-700': '173 154 30', // #ad9a1e
    '--color-warning-800': '138 123 24', // #8a7b18
    '--color-warning-900': '113 100 20', // #716414
    // error | #e23c3c
    '--color-error-50': '251 226 226', // #fbe2e2
    '--color-error-100': '249 216 216', // #f9d8d8
    '--color-error-200': '248 206 206', // #f8cece
    '--color-error-300': '243 177 177', // #f3b1b1
    '--color-error-400': '235 119 119', // #eb7777
    '--color-error-500': '226 60 60', // #e23c3c
    '--color-error-600': '203 54 54', // #cb3636
    '--color-error-700': '170 45 45', // #aa2d2d
    '--color-error-800': '136 36 36', // #882424
    '--color-error-900': '111 29 29', // #6f1d1d
    // surface | #FFFFFF
    '--color-surface-50': '255 255 255', // #ffffff
    '--color-surface-100': '255 255 255', // #ffffff
    '--color-surface-200': '255 255 255', // #ffffff
    '--color-surface-300': '255 255 255', // #ffffff
    '--color-surface-400': '255 255 255', // #ffffff
    '--color-surface-500': '255 255 255', // #FFFFFF
    '--color-surface-600': '230 230 230', // #e6e6e6
    '--color-surface-700': '191 191 191', // #bfbfbf
    '--color-surface-800': '153 153 153', // #999999
    '--color-surface-900': '125 125 125', // #7d7d7d
  },
};
