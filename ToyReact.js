export let ToyReact = {
  
  createElement(type, attr, ...children) {
    
    let el = null
    
    if (typeof type === 'string') {
      
      el = document.createElement(type)
      for (let key in attr) el.setAttribute(key, attr[key])
      for (let key in children) el.append(children[key])
      
    } else {
      
      el = new type
      for (let key in attr) el[key] = attr[key]
      for (let key in children) el.append(children[key])
      el = el.render()
      
    }
    
    return el
    
  },
  
  render(el, parent) {
    parent.append(el)
  }
  
}