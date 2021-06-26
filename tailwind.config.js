module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'press-backdrop': "url('https://cdn.pixabay.com/photo/2016/01/28/14/36/press-conference-1166343_1280.jpg')",
        'orientation-backdrop': "url('https://cdn.pixabay.com/photo/2016/08/16/09/53/international-conference-1597531_1280.jpg')",
        'disec-backdrop': "url('https://images.unsplash.com/photo-1525711857929-4272fb4a040f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')",
        'odc-backdrop': "url('https://images.unsplash.com/photo-1620065692460-d8e110a47ffb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')",
        'sochum-backdrop': "url('https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29uc3RydWN0aW9uJTIwd29ya2VyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60')"
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
