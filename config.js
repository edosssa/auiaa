'use strict';

module.exports = {
  url: 'https://auiaa.netlify.com',
  pathPrefix: '/',
  title: 'Alumni Blog',
  subtitle: 'Official blog of the Augustine University Alumni Associatio \'19',
  copyright: `Copyright © ${new Date().getFullYear()} AUIAA`,
  disqusShortname: '',
  postsPerPage: 4,
  googleAnalyticsId: 'UA-73379983-2',
  useKatex: false,
  menu: [
    {
      label: 'Articles',
      path: '/'
    },
    {
      label: 'About',
      path: '/pages/about'
    },
    {
      label: 'Contact',
      path: '/pages/contacts'
    }
  ],
  author: {
    name: 'Alumni Blog',
    photo: '/photo.jpg',
    bio: 'Thoughts, thoughts and more thoughts',
    contacts: {
      email: '',
      facebook: '#',
      telegram: '',
      twitter: '#',
      github: '',
      rss: '',
      vkontakte: '',
      linkedin: '',
      instagram: '#',
      line: '',
      gitlab: '',
      weibo: '',
      codepen: '',
      youtube: '',
      soundcloud: '',
    }
  }
};
