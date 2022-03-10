import React, { Component } from 'react';
import FamilyTree from '@balkangraph/familytree.js';

export default class extends Component {
      constructor(props) {
        super(props);
        this.divRef = React.createRef();
    }

    shouldComponentUpdate() {
        return false;
    }

  componentDidMount() {
    var family = new FamilyTree(document.getElementById("tree"), {
      mouseScrool: FamilyTree.none,
      mode: "light",
      template: "hugo",
      //STARTING POINT OF THE FAMILY TREE
      nodes: this.props.nodes,
      nodeBinding: {
        field_0: "name",
        //field_1: 'born',
        img_0: "picture",
      },

    });
    family.load(this.props.nodes);
  }

    render() {
        return (
            <div id="tree" ref={this.divRef}></div>
        );
    }
}
