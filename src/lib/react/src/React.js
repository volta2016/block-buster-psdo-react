class Component {
  // State
  constructor(props = {}, state = {}) {
    this.props = props,
    this.state = state
  }
  updater() {}
  #updater() {
    this.update(this.render())
    this.componentDidUpdate()
  }
  // Life Cycle
  // se llama antes que se renderice el componente
  componentWillMount() {

  }
  // Cuando el componente ya se pinto en el navegador
  componentDidMount() {

  }
  // cuando el componente se actualizo
  componentDidUpdate() {

  }

  // componentWillUpdate() {}

  setState(newState) {
    this.state = {
      ...this.state,
      ...newState   
    }
    this.#updater()
  }
  build() {
    this.componentWillMount()
    return this.render()
  }
}

export {
  Component
}