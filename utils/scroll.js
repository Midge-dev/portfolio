const scrollToSection = {
    aboutme: 30,
    projects: 160,
    contact: 0
  }

export const executeScroll = (e, id) => {
    const n = e.view.document.getElementById(id);
    window.scrollTo({ top: n.offsetTop - scrollToSection[id], behavior: 'smooth' });
};