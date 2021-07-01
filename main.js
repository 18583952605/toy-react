import {ToyReact} from './ToyReact'

class Div {
  
  constructor() {
    this.children = []
  }
  
  append(child) {
    this.children.push(child)
    this.child = document.createElement('div')
    this.children.forEach(item => this.child.append(item))
  }
  
  render() {
    return (
        <div>
          {this.child}
        </div>
    )
  }
  
}

let div = (
    <div id='div'>
      <div>444</div>
      <div>666</div>
    </div>
)

let div2 = (
    <Div>
      <div>444</div>
      <Div>
        <div>555</div>
        <div>666</div>
      </Div>
    </Div>
)

let div3 = (
    <div>
      <div>444</div>
      <Div>
        <div>555</div>
        <div>666</div>
      </Div>
    </div>
)

ToyReact.render(div, document.body)
// ToyReact.render(div2, document.body)
// ToyReact.render(div3, document.body)
