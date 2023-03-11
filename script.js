
class CssPropControl {
    constructor(element) {
      this.element = element
    }
    get(varName) {
      return getComputedStyle(this.element).getPropertyValue(varName)
    }
    set(varName, val) {
      return this.element.style.setProperty(varName, val)
    }
  }
  
  const bodyCssProps = new CssPropControl(document.body)
  
  let toggle = document.querySelector('#dark-mode-toggle')
  toggle.addEventListener('click', () => { 
    let mode = toggle.checked ? 'dark' : 'light'
    bodyCssProps.set('--background', bodyCssProps.get(`--${mode}-background`))
    bodyCssProps.set('--primary', bodyCssProps.get(`--${mode}-primary`))
    bodyCssProps.set('--link', bodyCssProps.get(`--${mode}-link`))
  })
  
  var bowling = document.getElementById('bowling');
  var project = document.getElementById('project');
  var laundro = document.getElementById('laundro');
  var zombie = document.getElementById('zombie');
  
  //fade out
  //function FadeOutOnScroll(element) {
  //    if (!element) {
  //        return;
  //    }
  
  //    var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
  //    var elementHeight = element.offsetHeight;
  //    var scrollTop = document.documentElement.scrollTop;
  //    var opacity = 1;
  
  //    if (scrollTop > distanceToTop) {
  //        opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
  //    }
  
  //    if (opacity >= 0) {
  //        element.style.opacity = opacity;
  //    }
  //}
  
  //function scrollHandler() {
  //    FadeOutOnScroll(bowling);
  //    FadeOutOnScroll(project);
  //    FadeOutOnScroll(laundro);
  //    FadeOutOnScroll(zombie);
  //}
  
  //window.addEventListener('scroll', scrollHandler)