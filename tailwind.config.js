module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hcc-backdrop': "url('../images/hcc_bg.jpg')",
        'orientation-backdrop': "url('https://cdn.pixabay.com/photo/2016/08/16/09/53/international-conference-1597531_1280.jpg')",
        'disec-backdrop': "url('../images/disec_bg.jpg')",
        'aippm-backdrop': "url('../images/aippm_bg.jpeg')",
        'sochum-backdrop': "url('../images/sochum_bg.jpg')",
        'misc-backdrop': "url('https://images.unsplash.com/photo-1544396821-4dd40b938ad3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1506&q=80')"
      })
    },
  },
  variants: {
    extend: {
      opacity: ['group-hover'],
    }
  },
  plugins: [],
}
